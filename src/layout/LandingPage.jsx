import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../component/header/Header";
import backgroundImg from "../assets/img/background.png";
import Landingfooter from "../component/footer/LandingFooter";
import { useDispatch } from "react-redux";
import { addQueries } from "../redux/actions/packageAction";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getCourse, getPackage } from "../redux/actions/courseAction";
import { getEventList } from "../api";

const Landingpage = () => {
  const dispatch = useDispatch();
  const baseURL = "https://rupalibhargava.pythonanywhere.com";
  const { course } = useSelector((state) => state);
  const loading = course?.loading;
  const courseList = course?.courseList;
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [eventList, setEventList] = useState([]);

  const handleQuaries = () => {
    const data = new FormData();
    data.append("email", email);
    data.append("subject", subject);
    data.append("content", message);
    if (email === "" || subject === "" || message === "") {
      toast.warning("Please Fill all details");
    } else {
      dispatch(addQueries(data));
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  const fetchEventList = async () => {
    setEventList((await getEventList()).data?.data);
  };

  useEffect(() => {
    dispatch(getPackage());
    dispatch(getCourse());
    fetchEventList();
  }, []);
  if (loading) {
    return (
      <div className="absolute bottom-0 left-0 z-40 text-center bg-gray-900 opacity-90 h-screen w-screen">
        <div className="my-auto mx-auto h-24 w-24 mt-64">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-red-700 duration-1000 animate-spin"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="h-32 w-64 mx-auto text-gray-50 mt-4 text-center">
          &nbsp;&nbsp;&nbsp;please wait <br /> this may take a few seconds
        </div>
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>CyberFrat</title>
        <meta name="description" content="This is Landing page" />
      </Helmet>
      <Header />
      <div>
        <div
          className="w-full flex flex-wrap content-center"
          style={{ height: "600px", backgroundImage: `url(${backgroundImg})` }}
        >
          <div className=" text-white text-xl font-bold font-serif text-center w-full">
            CyberFrat - A Tech Fraternity
          </div>
          <div
            className=" text-white text-md md:text-4xl lg:text-5xl font-bold  text-center w-full my-5 responsiveClass mx-5 md:mx-16 lg:mx-40"
            style={{ lineHeight: "70px" }}
          >
            Expand your Career Prospects with us by taking Advanced IT
            CyberSecurity Trainings
          </div>
          <div className="text-white text-xl text-center w-full my-5">
            <Link to="/signup" className=" py-3 px-5  bg-red-700 rounded-lg">
              Become a Member
            </Link>
          </div>
        </div>
      </div>
      <div className="md:mx-20 lg:mx-32 ">
        <div className="bg-white p-5 rounded-lg shadow-lg mt-6">
          <div className="text-2xl text-center md:text-left font-serif font-bold text-gray-700 bg-white">
            Membership
          </div>
          <div className="grid lg:grid-cols-2  grid-cols-1 gap-16">
            {course?.packageDetails !== undefined
              ? course?.packageDetails.map((val) => {
                  return (
                    <div
                      key={val.id}
                      className="flex justify-center items-center my-10 h-60 bg-blue-lightest"
                    >
                      <div
                        style={{}}
                        className="bg-gray-200 w-full h-60 rounded-lg shadow-md flex card text-grey-darkest"
                      >
                        <img
                          className="w-1/2 h-full rounded-l-lg bg-auto object-cover"
                          src={baseURL + val.image}
                          alt="PackageImage"
                        />
                        <div className="w-full flex flex-col bg-gray-200 rounded-r-lg">
                          <div className="p-4 pb-0 flex-1">
                            <h3 className="font-light mb-1 text-xl text-grey-darkest">
                              {val.name}
                            </h3>
                            <span className="md:text-5xl text-2xl text-grey-darkest">
                              {" "}
                              &#8377; {val.price}
                            </span>
                            <div className="flex items-center mt-5">
                              <div className="pr-2 text-xs">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 inline"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>{" "}
                                Free Test
                              </div>
                            </div>
                          </div>
                          <Link to="/login">
                            <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                              Purchase Now
                              <i className="fas fa-chevron-right"></i>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div className="bg-gray-200 p-5 rounded-lg shadow-lg mt-6">
          <div className="text-2xl mb-5 mt-2 font-bold font-serif text-center text-gray-700 bg-white lineInBetween">
            All Courses
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {!courseList ? (
              null
            ) : (
              courseList.map((val) => {
                return (
                  <div
                    className="w-auto lg:mx-2 md:mx-2 sm:mx-2  shadow-lg  text-white text-center rounded-md my-2 relative"
                    key={val.id}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${baseURL + val.course_file})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                      }}
                      className=" w-full h-40 rounded-t-md "
                    ></div>
                    <div className="p-2 bg-gray-100 text-left h-40">
                      <p className="text-gray-500 text-sm">Course</p>
                      <p className=" text-gray-800 h-16 text-xl font-dm">
                        {val.course_title}
                      </p>
                      <p className="text-gray-800 text-xl h-8">
                        &#8377;{val.selling_price}
                      </p>
                      <div className="text-black text-xs">
                        by&nbsp;
                        <span className="">{val.author}</span>
                      </div>
                    </div>
                    <Link
                      to="/login"
                      onClick={() => {
                        toast.success("Please Login First");
                      }}
                    >
                      <div className="pt-2 bg-blue-700 hover:bg-blue-600 hover:shadow-lg duration-300 h-10 rounded-b-lg shadow-sm font-acme">
                        Buy Course
                      </div>
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div className="bg-gray-200 p-5 rounded-lg shadow-lg mt-6">
          <div className="text-2xl mb-5 mt-2 font-bold font-serif text-center text-gray-700 bg-white lineInBetween">
            Events
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventList === []
              ? null
              : eventList.map((val) => {
                  return (
                    <>
                      <a href={val?.link} key={val?.id}>
                        <div className="hover:shadow-3xl shadow-xl h-full relative group">
                          <div
                            style={{
                              backgroundImage: `url(${baseURL + val?.image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                            }}
                            className="w-full h-64 rounded-lg"
                          ></div>

                          <div className="lg:opacity-0 opacity-70 group-hover:opacity-70 duration-300 absolute w-full h-64 left-0 bottom-0  z-10 flex justify-center items-center text-lg bg-gray-100 text-black rounded-lg">
                            <div>
                              <span className="text-xl flex justify-center lg:animate-bounce">
                                {val?.title}
                              </span>{" "}
                              <br />
                              <span className="px-5 text-center flex justify-center">
                                {" "}
                                {val?.about}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </>
                  );
                })}
          </div>
        </div>

        <div>
          <div className="max-w-screen-xl mt-12 mb-20 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-200 text-gray-900 rounded-lg shadow-lg">
            <div className="flex flex-col ">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Lets talk about everything!
                </h2>
                <div className="text-gray-700 mt-8">
                  Hate forms? Send us an{" "}
                  <a
                    href="mailto:test@gmail.com?subject=My custom mail subject"
                    className="underline cursor-pointer"
                  >
                    email
                  </a>{" "}
                  instead.
                </div>
              </div>
              <div className=" mt-5 text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A iste
                expedita nostrum quos, unde ullam libero obcaecati natus
                cupiditate inventore necessitatibus rerum autem quod illo
                quisquam sapiente et! Qui quia quos inventore vitae? Minima
                perspiciatis ratione sed suscipit aliquid, explicabo nulla
                excepturi harum et magnam corrupti cupiditate iusto amet quam.
              </div>
            </div>
            <div className="">
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder=""
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Subject
                </span>
                <input
                  className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea
                  value={message}
                  required
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="w-full h-32 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="mt-8">
                <button
                  onClick={handleQuaries}
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Query or Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Landingfooter />
    </>
  );
};

export default Landingpage;
