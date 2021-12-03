import React from "react";
import CyberFratLogo from "../../assets/img/Cyber-Frat-Logo.png";

const Landingfooter = () => {
  return (
    <div className="bg-black">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />
      <footer className="text-white bg-black body-font ">
        <div className="container py-16 lg:py-24 flex md:px-10 lg:px-40 md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a
              href="https://cyberfrat.com/"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <span className="ml-3 text-xl text-gray-200">
                <img src={CyberFratLogo} alt="...." />
              </span>
            </a>
            <p className="mt-2 mb-5 text-sm text-gray-400">
              CyberFrat is an enterprise risk management services company with a
              special focus on Cyber Security, Risk Management, and Emerging
              Technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-4">
            <div className="md:text-right text-center w-full pr-4">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
                Common Link
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://cyberfrat.com/"
                    className="text-gray-500 hover:text-gray-100 hover:underline"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://cyberfrat.com/blogs/"
                    className="text-gray-500 hover:text-gray-100 hover:underline"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="https://cyberfrat.com/events/"
                    className="text-gray-500 hover:text-gray-100 hover:underline"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="https://cyberfrat.com/contact-us/"
                    className="text-gray-500 hover:text-gray-100 hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
              </nav>
            </div>
            <div className="md:text-left text-center w-full lg:px-4">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
                Services Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://cyberfrat.com/cwf/"
                    className="text-gray-500 hover:text-gray-100 hover:underline"
                  >
                    Cyber WarFare
                  </a>
                </li>
                <li>
                  <a
                    href="https://cyberfrat.com/"
                    className="text-gray-500 hover:text-gray-100 hover:underline"
                  >
                    CyberFrat
                  </a>
                </li>
                <li>
                  <a
                    href="https://cyberfrat.com/fyn/"
                    className="text-gray-500 hover:text-gray-100 hover:underline"
                  >
                    Enterprise network Enhancement Survey
                  </a>
                </li>
                <li>
                  <a
                    href="https://cyberfrat.com/isf/"
                    className="text-gray-500 hover:text-gray-100 hover:underline"
                  >
                    Infosec Fusion
                  </a>
                </li>
                <li>
                  <a
                    href="https://cyberfrat.com/splunk/"
                    className="text-gray-500 hover:text-gray-100 hover:underline"
                  >
                    Survey on Analytics-Driven Security Platform
                  </a>
                </li>
              </nav>
            </div>
            <div className="md:text-left text-center w-full pl-2">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
                Contact Info
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline my-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Address
                  <br />
                  <span className="font-thin text-sm text-gray-400">
                    CyberFrat, C315, Eastern Business District, LBS Road,
                    Bhandup West, Mumbai - 400078
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Phone
                  <br />{" "}
                  <span className="font-thin text-sm text-gray-400">
                    +91 89 2700 2700
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email
                  <br />{" "}
                  <span className="font-thin text-sm text-gray-400">
                    Team@CyberFrat.com
                  </span>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 md:px-40">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              Copyright © 2021
              <span className="text-gray-600 ml-1">
                {" "}
                <a
                  href="https://cyberfrat.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  CyberFrat
                </a>
              </span>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/CyberFrat/"
                className="text-gray-500 border-2 border-gray-500 rounded-full px-1.5"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.twitter.com/cyberfrat"
                className="ml-3 text-gray-500 border-2 border-gray-500 rounded-full px-1"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/cyberfrat"
                className="ml-3 text-gray-500 border-2 border-gray-500 rounded-full px-1"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/cyberfrat"
                className="ml-3 text-gray-500 border-2 border-gray-500 rounded-full px-1"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/cyberfrat"
                className="ml-3 text-gray-500 border-2 border-gray-500 rounded-full px-1"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landingfooter;
