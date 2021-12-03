import React from "react";
import { Helmet } from "react-helmet";
import AccountLoginImg from "../../assets/img/AccountLoginImage.png";
// import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../redux/actions/authActions";
import { toast } from "react-toastify";

function SignupScreen() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");

  const validEmail =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = (e) => {
    const data = new FormData();
    data.append("email", userEmail);
    data.append("password", password);
    data.append("phone", number);
    data.append("first_name", firstName);
    data.append("last_name", lastName);
    if (
      userEmail === "" ||
      password === "" ||
      number === "" ||
      firstName === "" ||
      lastName === "" ||
      confirmPassword === ""
    ) {
      e.preventDefault();
      toast.warning("Please Fill All Details");
    } else {
      if (password !== confirmPassword && password.length<8) {
        e.preventDefault();
        toast.warning("Password is not same");
      } else {
        if (password.length<8) {
          e.preventDefault();
          toast.warning("Password must be 8 characters Long")
        } else {
          if (!validEmail.test(userEmail)) {
            e.preventDefault();
            toast.warning("Please Enter Valid Email")
          } else {
            if (number.length===10) {
              // alert("hello")
          dispatch(addNewUser(data));
            } else {
              e.preventDefault();
              toast.warning("Please Enter Valid Phone Number")
            }
          }
        }
      }
    }
  };

  return (
    <>
    <Helmet>
        <meta charset="utf-8" />
        <title>Sign Up | CyberFrat</title>
        <meta name="description" content="This is signUp page" />
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-screen w-full">
      <div>
          <div style={{backgroundImage:`url(${AccountLoginImg})`, backgroundPosition:"center center", backgroundSize:"cover"}} className="h-screen w-screen lg:w-full"></div>
        </div>
        <div className="pt-0 mb-10 pl-10 md:py-5 lg:px-12">
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
            Sign Up Now
          </h1>
          <div
            className="text-md"
            style={{
              height: "23px",
              width: "351px",
            }}
          >
            <p
              className="lg:text-lg py-5"
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "normal",

                lineHeight: "23px",
                color: "#464646",
              }}
            >
              Login Your Account &nbsp;
              <Link
                className="text-blue-500 hover:text-blue-700 hover:underline"
                to="/login"
                style={{
                  width: "351px",
                  height: "23px",

                  lineHeight: "23px",
                }}
              >
                Click Here
              </Link>
            </p>
            <div className="" style={{ width: "500px" }}>
              <input
                type="text"
                required
                className=" md:w-full p-2 border-b-2 my-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 "
                style={{ fontFamily: "Roboto", fontWeight: "400" }}
                placeholder="First Name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <br />
              <input
                type="text"
                required
                className="md:w-full p-2 border-b-2 my-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 "
                style={{ fontFamily: "Roboto", fontWeight: "400" }}
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <br />
              <input
                type="email"
                required
                className="md:w-full p-2 border-b-2 my-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                style={{ fontFamily: "Roboto", fontWeight: "400" }}
                placeholder="Your Email Address"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
              <br />
              <input
                type="tel"
                required="required"
                maxLength={11}
                minLength={10}
                pattern="^-?[0-9]\d*\.?\d*$"
                className="md:w-full p-2 border-b-2 my-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                style={{ fontFamily: "Roboto", fontWeight: "400" }}
                placeholder="Your Phone Number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
              {/* <PhoneInput
              required
              country="in"
              international={false}
              
                placeholder="00 11111 00000"
                className="md:w-full p-2 border-b-2 my-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                value={value}
                onChange={setValue}
              /> */}
              <br />
              <input
                type="password"
                required
                className="md:w-full p-2 border-b-2 my-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                placeholder="Your Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              /><br/>
              <input
                type="password"
                required
                className="md:w-full p-2 border-b-2 my-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
              <br />
              <Link
                to="/login"
                onClick={handleSubmit}
                className="py-2 px-5 w-24 rounded-md block my-8"
                style={{
                  backgroundColor: "#ED3237",
                  color: "#F2F3F6",
                }}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupScreen;
