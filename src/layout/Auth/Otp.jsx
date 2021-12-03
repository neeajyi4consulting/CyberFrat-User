import React, { Component } from "react";
import { Helmet } from "react-helmet";
import AccountLoginImg from "../../assets/img/AccountLoginImage.png";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";

class Otp extends Component {
  constructor() {
    super();
    this.state = { otp: "" };
  }
  handleChange = (otp) => this.setState({ otp });
  render() {
    return (
      <>
      <Helmet>
        <meta charset="utf-8" />
        <title>Otp | CyberFrat</title>
        <meta name="description" content="This is Otp page" />
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
              OTP
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
                Login Your Account{" "}
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
                  {" "}
                  &nbsp;Click Here
                </Link>
              </p>
              <form className="my-5" style={{ width: "500px" }}>
                <OtpInput
                  value={this.state.otp}
                  onChange={this.handleChange}
                  numInputs={4}
                  className="border-2 m-2 px-2 py-0.5"
                  placeholder="0000"
                />

                <Link
                  to="/"
                  className="py-2 px-6 w-24 rounded-md block my-8"
                  style={{
                    backgroundColor: "#ED3237",
                    color: "#F2F3F6",
                    fontFamily: "Roboto",
                    fontWeight: "500",
                  }}
                >
                  Verify
                </Link>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Otp;
