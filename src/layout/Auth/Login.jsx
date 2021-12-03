import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import AccountLoginImg from "../../assets/img/AccountLoginImage.png";
import { cleanLocalStorage } from "../../utils/storage";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginAction } from "../../redux/actions/authActions";

const LoginScreen = () => {
  const history = useHistory();
  const [id, setId] = useState("neeraj@gmail.com");
  const [passcode, setPasscode] = useState("password");
  const [togglePassword, setTogglePassword] = useState("password");
  const dispatch = useDispatch();

  const handleClick = () => {
    const data = new FormData();
    data.append("email", id);
    data.append("password", passcode);
    dispatch(loginAction(data));
    history.push("/dashboard");
    // dispatch(allotedPackageDetaile(user?.currentUser?.user_id));
  };

  const clearLocalStorageOnLoad = () => {
    cleanLocalStorage();
    window.localStorage.clear();
  };

  useEffect(() => {
    clearLocalStorageOnLoad();
  }, []);

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>Login | CyberFrat</title>
        <meta name="description" content="This is Login page" />
      </Helmet>
      <div className="bg-white h-full grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div
            style={{
              backgroundImage: `url(${AccountLoginImg})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
            className="h-screen w-screen lg:w-full"
          ></div>
        </div>
        <div className="pt-5 mb-10 pl-10 md:py-16 lg:p-24">
          <div
            className="inline-block mr-4 largeScreen"
            style={{
              height: "35px",
              width: "6px",
              backgroundColor: "#ED3237",
            }}
          ></div>
          <h1
            className="text-2xl lg:text-5xl inline"
            style={{
              height: "59px",
              width: "491px",
              color: "#344685",
            }}
          >
            Login to your Account
          </h1>
          <p
            className="mt-5"
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              lineHeight: "23px",
              color: "#464646",
            }}
          >
            Don't have Account{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:text-blue-700 hover:underline"
            >
              SignUp
            </Link>
          </p>
          <div
            className="text-md"
            style={{
              height: "23px",
              width: "351px",
            }}
          >
            <div className="my-5" style={{ width: "500px" }}>
              <input
                type="text"
                className="w-1/2 md:w-full p-2 border-b-2 mt-16"
                style={{ fontFamily: "Roboto", fontWeight: "400" }}
                placeholder="Your Name"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <br />
              <div className="relative w-1/2 md:w-full">
                <input
                  type={togglePassword}
                  className="w-full p-2 border-b-2 my-10"
                  style={{ fontFamily: "Roboto", fontWeight: "400" }}
                  placeholder="Your Password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    setTogglePassword(
                      togglePassword === "password" ? "text" : "password"
                    );
                  }}
                  className="h-6 w-6 inline-block text-gray-400 absolute top-14 right-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <br />
              <input
                type="checkbox"
                name="Remember me"
                id=""
                className=""
                style={{ width: "20px", height: "20px" }}
              />
              <span
                className="px-2"
                style={{
                  color: "#464646",
                  fontFamily: "Roboto",
                  fontWeight: "400",
                }}
              >
                Remember Me
              </span>
              <span className="float-center lg:float-right">
                {" "}
                <Link
                  to="/forgetpassword"
                  style={{
                    color: "#344685",
                    fontFamily: "Roboto",
                    fontWeight: "400",
                  }}
                >
                  Forget Password?
                </Link>
              </span>
              <button
                type="submit"
                className="py-2 px-8 rounded-md block my-8"
                style={{
                  backgroundColor: "#ED3237",
                  color: "#F2F3F6",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                }}
                onClick={handleClick}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
