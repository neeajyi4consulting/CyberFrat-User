import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CyberFratLogo from "../../assets/img/Cyber-Frat-Logo.png";
import { logout } from "../../redux/actions/authActions";

function Navbar() {
  const dispatch = useDispatch();
  const [toggleSidebar, setToggleSidebar] = useState("hidden");
  const handleLogOut = () => {
    dispatch(logout());
    setToggleSidebar("hidden");
  };
  return (
    <>
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 w-full h-auto py-4 z-10 text-white"
        style={{
          background:
            "linear-gradient(90deg, #000000 0.06%, #2f1e1e 48.99%, #990B4F 100%)",
        }}
      >
        <div className="lg:col-span-2">
          <Link to="/">
            <img
              src={CyberFratLogo}
              alt="...."
              className="sm:inline hidden  mx-10"
              style={{ width: "220px", padding: "" }}
            />
          </Link>
        </div>
        <div className="lg:hidden">
          <svg
            onClick={() => {
              toggleSidebar === "hidden"
                ? setToggleSidebar("grid")
                : setToggleSidebar("hidden");
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-5 float-right"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div
          className={`${toggleSidebar} grid-row-5 sm:grid-cols-5 sm:col-span-2 mx-5 my-2 text-center font-playfair`}
        >
          <div className="my-1.5">
            <NavLink
              onClick={() => {
                setToggleSidebar("hidden");
              }}
              activeClassName="text-blue-500 hover:text-blue-300 duration-300 mx-auto"
              className="text-white mx-auto hover:text-blue-200 duration-300 "
              to="/dashboard"
            >
              Home
            </NavLink>
          </div>
          <div className="my-1.5">
            <NavLink
              onClick={() => {
                setToggleSidebar("hidden");
              }}
              activeClassName="text-blue-500 hover:text-blue-300 duration-300 mx-auto"
              className="text-white mx-auto hover:text-blue-200 duration-300"
              to="/courses"
            >
              My Course
            </NavLink>
          </div>
          <div className="my-1.5">
            <NavLink
              onClick={() => {
                setToggleSidebar("hidden");
              }}
              activeClassName="text-blue-500 hover:text-blue-300 duration-300 mx-auto"
              className="text-white mx-auto hover:text-blue-200 duration-300"
              to="/allcourses"
            >
              All Course
            </NavLink>
          </div>
          <div className="my-1.5">
            <NavLink
              onClick={() => {
                setToggleSidebar("hidden");
              }}
              activeClassName="text-blue-500 hover:text-blue-300 duration-300 mx-auto"
              className="text-white mx-auto hover:text-blue-200 duration-300"
              to="/profile"
            >
              My Profile
            </NavLink>
          </div>
          <div className="my-1.5">
            <NavLink
              className="hover:text-red-700 text-red-500 mx-auto"
              to="/"
              onClick={handleLogOut}
            >
              Log Out
            </NavLink>
          </div>
        </div>
        <div className="lg:grid sm:grid-cols-2 md:grid-cols-5 text-center my-auto hidden font-playfair">
          <NavLink
            activeClassName="text-blue-500 hover:text-blue-300 duration-300 mx-auto"
            className="text-white mx-auto hover:text-blue-200 duration-300 hidden sm:inline"
            to="/dashboard"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="text-blue-500 hover:text-blue-300 duration-300 mx-auto"
            className="text-white mx-auto hover:text-blue-200 duration-300 hidden sm:inline"
            to="/courses"
          >
            My Course
          </NavLink>
          <NavLink
            activeClassName="text-blue-500 hover:text-blue-300 duration-300 mx-auto"
            className="text-white mx-auto hover:text-blue-200 duration-300 hidden sm:inline"
            to="/allcourses"
          >
            All Course
          </NavLink>
          <NavLink
            activeClassName="text-blue-500 hover:text-blue-300 duration-300 mx-auto"
            className="text-white mx-auto hover:text-blue-200 duration-300 hidden sm:inline"
            to="/profile"
          >
            My Profile
          </NavLink>
          <NavLink
            className="hover:text-red-700 text-red-500 mx-auto hidden sm:inline"
            to="/"
            onClick={handleLogOut}
          >
            Log Out
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
