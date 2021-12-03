import React, { useEffect, useState } from "react";
import CyberFratLogo from "../../assets/img/Cyber-Frat-Logo.png";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/authActions";
import { useHistory } from "react-router-dom";

function Sidebar({ selectedValue }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [dashboardClass, setDashboardClass] = useState("");
  const [coursesClass, setCoursesClass] = useState("");
  const [profileClass, setProfileClass] = useState("");
  const [toggleSidebar, setToggleSidebar] = useState("hidden");

  const selectedClass = () => {
    switch (selectedValue) {
      case "dashboard":
        setCoursesClass("text-gray-500");
        setDashboardClass("text-gray-700 bg-gray-300");
        setProfileClass("text-gray-500");
        break;
      case "profile":
        setCoursesClass("text-gray-500");
        setProfileClass("text-gray-700 bg-gray-300");
        setDashboardClass("text-gray-500");
        break;

      default:
        setCoursesClass("text-gray-700 bg-gray-300");
        setDashboardClass("text-gray-500");
        setProfileClass("text-gray-500");

        break;
    }
  };

  const handleLogOut = () => {
    dispatch(logout());
    history.push("/");
  };

  useEffect(() => {
    selectedClass();
  });

  return (
    <>
      <nav className="-mt-24 z-10 shadow-lg">
        <div className="">
          <div className={`flex flex-wrap w-72 lg:inline-block`}>
            <div className="w-20 md:w-full h-auto py-6 ">
              <button
                onClick={() => {
                  toggleSidebar === "hidden"
                    ? setToggleSidebar("")
                    : setToggleSidebar("hidden");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white mx-3 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <img
                src={CyberFratLogo}
                alt="...."
                className="md:inline hidden "
                style={{ width: "220px", padding: "" }}
              />
            </div>
            <div
              className={`${toggleSidebar} bg-white text-gray-500 h-screen shadow-lg absolute lg:top-24 md:top-24 md:mt-1 sm:mt-1 mt-3 top-20 left-0 z-10`}
            >
              <Link to="/dashboard">
                <div className={`px-10 w-72 py-5 h-auto ${dashboardClass} text-gray-500`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline mx-2 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Dashboard
                </div>
              </Link>
              <Link to="/courses">
                <div className={`px-10 w-72 py-5 h-auto ${coursesClass} text-gray-500`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  My Courses
                </div>
              </Link>
              <Link to="/admin">
                <div className={`px-10 w-72 py-5 h-auto ${profileClass} text-gray-500`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  My Profile
                </div>
              </Link>
              <div
                className="px-10 w-72 py-5 h-auto text-gray-500"
                style={{ backgroundColor: "white", color: "#868686" }}
              >
                <button onClick={handleLogOut}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
