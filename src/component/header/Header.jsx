import React from "react";
import { Link } from "react-router-dom";
import CyberFratLogo from "../../assets/img/Cyber-Frat-Logo.png";

const Header = () => {
  return (
    <div>
      <div className=" flex items-center z-10 h-auto py-1 w-full fixed bg-gray-900 bg-opacity-50">
        <p className="md:inline md:ml-32 ml-5 md:w-96 text-white font-thin">
          <img src={CyberFratLogo} alt="...." className="h-auto" style={{ width: "200px" }} />
        </p>
        <div className="text-white text-right w-full my-5 md:mx-32">
          <Link
            to="/login"
            className="bg-red-700 py-1 lg:py-2 px-2 lg:px-5  rounded-lg mr-5"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-red-700 py-1 lg:py-2 px-2 lg:px-5 lg:mr-0 rounded-lg mr-5"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
