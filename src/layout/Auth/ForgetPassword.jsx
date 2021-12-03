import React, { useState } from "react";
import { Helmet } from "react-helmet";
import AccountLoginImg from "../../assets/img/AccountLoginImage.png";
import { Link } from "react-router-dom";
import { forgetPass } from '../../api'

function ForgetPassword() {
  const [email, setEmail] = useState("test@gmail.com");

  const handleForgetPassword = async () => {
    const data = new FormData();
    data.append("email", email);
    // forgetPasscode(data)
    await forgetPass(data)
      .then((response) => {
        console.log("response from forget password screen", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <Helmet>
        <meta charset="utf-8" />
        <title>Forget Password | CyberFrat</title>
        <meta name="description" content="This is Forget password page" />
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
          <div style={{backgroundImage:`url(${AccountLoginImg})`, backgroundPosition:"center center", backgroundSize:"cover"}} className="h-screen w-screen lg:w-full"></div>
        </div>
        <div className="p-5 lg:p-24">
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
            Forget Password
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
              Login Your Account
              <Link
                to="/"
                style={{
                  position: "absolute",
                  width: "351px",
                  height: "23px",

                  lineHeight: "23px",
                  color: "#ed3237",
                }}
              >
                &nbsp; Click Here
              </Link>
            </p>
            <div className="my-5" style={{ width: "500px" }}>
              <input
                type="email"
                className="w-full p-2 border-b-2 my-5"
                style={{ fontFamily: "Roboto", fontWeight: "400" }}
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button
                onClick={handleForgetPassword}
                className="py-2 px-5 w-24 rounded-md block my-8"
                style={{
                  backgroundColor: "#ED3237",
                  color: "#F2F3F6",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
