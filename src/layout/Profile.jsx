import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { getUserDetails } from "../api";
import { logout, editDetails, changeUserPassword } from "../redux/actions/authActions";
import { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Profile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [editUserFirstName, setEditUserFirstName] = useState("");
  const [editUserLastName, setEditUserLastName] = useState("");
  const [editUserEmail, setEditUserEmail] = useState("");
  const [editUserNumber, setEditUserNumber] = useState("");
  const [toogleEditForm, setToogleEditForm] = useState(true);
  const [toggleChangePassword, setToggleChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const fetchUserDetails = async () => {
    await getUserDetails(currentUser.user_id)
      .then((response) => {
        const userDetails = response.data.data;
        setUserName(userDetails.first_name + " " + userDetails.last_name);
        setUserEmail(userDetails.email);
        setUserNumber(userDetails.phone);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogOut = () => {
    dispatch(logout());
  };

  const handleEditForm = () => {
    setToogleEditForm(toogleEditForm ? false : true);
  };

  const handleChangePassword = () => {
    setToggleChangePassword(toggleChangePassword ? false : true);
  };

  const handleSubmitNewDetails = (e) => {
    if (editUserFirstName==="" || editUserLastName==="" || editUserEmail==="" || editUserNumber==="") {
      e.preventDefault();
      toast.warning("Please Fill All details") 
    }else if (editUserNumber.length!==10) {
      e.preventDefault();
      toast.warning("Please Enter a Valid Number")
    }else{
    const data = new FormData();
    data.append("first_name", editUserFirstName);
    data.append("last_name", editUserLastName);
    data.append("email", editUserEmail);
    data.append("phone", editUserNumber);
    data.append("user_id", currentUser.user_id);
      dispatch(editDetails(data));
    }
    
  };

  const handleNewPassword = async () => {
    const data = new FormData();
    data.append("user_id", currentUser?.user_id);
    data.append("old_password", oldPassword);
    data.append("new_password", newPassword);
    data.append("confirm_password", confirmPassword);
    dispatch(changeUserPassword(data))
    setToggleChangePassword(false)

  };

  useEffect(() => {
    fetchUserDetails();
  });

  return (
    <>
    <Helmet>
        <meta charset="utf-8" />
        <title>Profile | CyberFrat</title>
        <meta name="description" content="This is Profile page" />
      </Helmet>
      <div className="bg-gray-200 pt-5 ">
        <div className="bg-white px-5 py-3 mx-16 rounded-lg hidden md:block shadow-lg">
          <span className="font-bold text-2xl mx-8 font-abril">Profile</span>
        </div>
        <div
          className={` ${
            toogleEditForm ? "hidden" : ""
          } h-full w-full text-center shadow-lg fixed top-0 bg-gray-600 bg-opacity-50  `}
        >
          <div className="flex justify-center h-screen items-center antialiased">
            <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
              <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
                <p className="font-semibold text-gray-800">Edit Details</p>
                <svg
                  className="w-6 h-6"
                  onClick={handleEditForm}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
              <form onSubmit={handleSubmitNewDetails}>
                <div className="flex flex-col px-6 py-5 bg-gray-50">
                  <input
                    type="text"
                    placeholder="Enter New First Name"
                    required
                    value={editUserFirstName}
                    onChange={(e) => {
                      setEditUserFirstName(e.target.value);
                    }}
                    className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Enter New Last Name"
                    required
                    value={editUserLastName}
                    onChange={(e) => {
                      setEditUserLastName(e.target.value);
                    }}
                    className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                  />
                  <br />
                  <input
                    type="email"
                    placeholder="Enter New Email"
                    required
                    value={editUserEmail}
                    onChange={(e) => {
                      setEditUserEmail(e.target.value);
                    }}
                    className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Enter New Number"
                    required
                    value={editUserNumber}
                    onChange={(e) => {
                      setEditUserNumber(e.target.value);
                    }}
                    className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                  />
                  <br />
                </div>
                <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
                  <p
                    onClick={handleEditForm}
                    className="font-semibold text-gray-100 rounded bg-red-500 hover:bg-red-600 duration-300 px-4 py-2 "
                  >
                    Cancel
                  </p>
                  <button
                    onClick={handleSubmitNewDetails}
                    className="px-4 py-2 text-white font-semibold bg-blue-500 hover:bg-blue-600 duration-300 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div >
          <div className={`h-full w-full shadow-lg fixed top-0 bg-gray-600 bg-opacity-50  ${
                toggleChangePassword ? "" : "hidden"
              }`}>
            <div
              className={`flex justify-center h-screen w-full items-center antialiased `}
            >
              <form className="bg-white shadow-md w-96 rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Old Password
                  </label>
                  <input
                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    
                    type="password"
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={(e) => {
                      setOldPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    New Password
                  </label>
                  <input
                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                  onClick={handleNewPassword}
                    className="bg-blue-500 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Change Password
                  </button>
                  <button
                  onClick={handleChangePassword}
                    className="bg-red-500 hover:bg-red-700 duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mx-16 rounded-lg bg-white p-10 pb-20 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-full ml-2 inline-block"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sm:ml-5 text-xl my-2">{userName}</span>
          <span>
          <button
            onClick={handleEditForm}
            className="bg-blue-500 text-white py-3 px-5 my-2 rounded-lg float-right block sm:inline w-full sm:w-auto cursor-pointer"
          >
            Edit User Details
            </button>
          </span>
          <span>
            <button
              onClick={handleChangePassword}
              className="bg-blue-500 text-white py-3 px-5 my-2 rounded-lg float-right block sm:inline w-full sm:w-auto cursor-pointer mx-0 sm:mx-5"
            >
              Change Password
            </button>
          </span>

          <div className="border-2 p-5 mt-36 sm:mt-10">
            <div>
              <p className="text-gray-500 text-sm pt-10">Account Name</p>

              <p className="border-b-2 py-5 w-full">{userName} </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm pt-10">Email</p>
              {/* <span
                onClick={handleEditForm} className="text-blue-500 float-right cursor-pointer hover:text-blue-800 ">Edit</span> */}
              <p className="border-b-2 py-5 w-full">{userEmail}</p>
            </div>
            <div className="border-b-2 mb-5">
              <p className="text-gray-500 text-sm pt-10">Contact Number</p>
              {/* <span
                onClick={handleEditForm} className="text-blue-500 float-right cursor-pointer hover:text-blue-800">Edit</span> */}
              <p className="border-b-1 py-5 w-full">{userNumber}</p>
            </div>
          </div>
          <Link to="/" onClick={handleLogOut}>
          <span className="float-right text-white bg-red-500 my-5 p-3 rounded-lg">
            
              Sign Out
          </span>
            </Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
