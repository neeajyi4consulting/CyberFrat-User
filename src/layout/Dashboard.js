import React, { useEffect, useState } from "react";
import MyCourses from "../Pages/dashboard/MyCourses";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getBannerList, getEventList } from "../api";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  allotedPackageDetaile,
  fetchUserDetails,
  getPackage,
  showPackagesInCourse,
} from "../redux/actions/courseAction";
import { userDetails } from "../redux/actions/authActions";
import ShowAllCourses from "../Pages/ShowAllCourses";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user, course } = useSelector((state) => state);
  const loading = course?.loading;
  const currentUser = user?.currentUser;
  const courseInfo = course?.allotedPackageDetails;
  const baseURL = "https://rupalibhargava.pythonanywhere.com";
  const [bannerDetails, setBannerDetails] = useState([]);
  const [eventList, setEventList] = useState([]);

  const fetchPackageCourse = () => {
    const data = new FormData();
    data.append("package_id", 25);
    dispatch(showPackagesInCourse(data));
  };

  const packageTest = () => {
    if (course?.userDetails?.package_alloted?.length > 0) {
      if (
        course?.userDetails?.package_alloted[0]?.package_name?.name ===
        "Plus Package"
      ) {
        return (
          <div className="mt-6">
            <div className="h-auto">
              <div className="bg-white p-4 w-full rounded-lg shadow-lg">
                <div className="mx-3 mb-4 text-2xl text-gray-700 font-bold font-zilla">
                  <Link to="/courses">My Courses</Link>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-5 grid-cols-1 gap-4">
                  {courseInfo?.map((val) => {
                    return (
                      <MyCourses
                        key={val?.course_name?.id}
                        imgsrc={baseURL + val?.course_name?.course_file}
                        courseName={val?.course_name?.course_title}
                        author={val?.course_name?.author}
                        id={val?.course_name?.id}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            {course?.packageCourse !== undefined ? (
              <div className="bg-white p-4 w-full rounded-lg shadow-lg mt-6 h-auto">
                <div className="mx-3 mb-4 text-2xl text-gray-700 font-bold font-zilla">
                  <span>Gold Package</span>
                  <Link
                    to="/allcourses"
                    className="float-right bg-blue-500 text-white font-thin md:px-3 px-2 md:py-2 py-1 md:text-lg text-sm rounded-md"
                  >
                    View Packages
                  </Link>
                </div>
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                  <ShowAllCourses />
                </div>
              </div>
            ) : null}
          </div>
        );
      } else {
        return (
          <div className="mt-5">
            <div className="bg-white p-4 w-full rounded-lg shadow-lg">
              <div className="mx-3 mb-4 text-2xl text-gray-700 font-bold font-zilla">
                <Link to="/courses">My Courses</Link>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-4">
                {courseInfo?.map((val) => {
                  return (
                    <MyCourses
                      key={val?.course_name?.id}
                      imgsrc={baseURL + val?.course_name?.course_file}
                      courseName={val?.course_name?.course_title}
                      author={val?.course_name?.author}
                      id={val?.course_name?.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="bg-white p-5 rounded-lg shadow-lg mt-6">
          <div className="text-xl font-bold text-gray-700 bg-white font-zilla">
            All Packages
          </div>
          <div className="grid md:grid-cols-2  grid-cols-1 gap-16 mt-5">
            {test}
          </div>
        </div>
      );
    }
  };

  const test = !course?.packageDetails
    ? console.log(
        "no package purchased and info of package",
        course?.packageDetails
      )
    : course?.packageDetails.map((val) => {
        return (
          <div
            key={val.id}
            className="flex justify-center items-center h-full bg-blue-lightest"
          >
            <div className="bg-gray-200 w-full h-60 rounded-lg shadow-sm hover:shadow-lg duration-300 flex card text-grey-darkest">
              <img
                className="w-1/2 h-full rounded-l-lg"
                src={baseURL + val.image}
                alt="PackageImage"
              />
              <div className="w-full flex flex-col">
                <div className="p-4 pb-0 flex-1">
                  <h3 className="font-light mb-1 text-xl text-grey-darkest">
                    {val.name}
                  </h3>
                  <span className="md:text-5xl text-sm text-grey-darkest">
                    &#8377; {val.price}
                  </span>
                  <div className="flex items-center mt-4">
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
                      </svg>
                      Free Test
                    </div>
                  </div>
                </div>
                <Link to="/allcourses">
                  <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                    Check All Packages and Courses
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      });

  const fetchOtherDetails = async () => {
    setBannerDetails(await (await getBannerList()).data?.data);
    setEventList((await getEventList()).data?.data);
  };

  useEffect(() => {
    fetchUserDetails(currentUser?.user_id);
    dispatch(getPackage());
    fetchOtherDetails();
    dispatch(userDetails(currentUser?.user_id));
    dispatch(allotedPackageDetaile(currentUser?.user_id));
    fetchPackageCourse();
    dispatch(getPackage());
  }, []);
  if (loading) {
    return (
      <div className="absolute bottom-0 left-0 z-40 text-center bg-gray-900 opacity-90 h-screen w-screen">
        <div className="my-auto mx-auto h-24 w-24 mt-64">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-red-700 duration-300 animate-spin"
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
        <div className="h-24 w-64 mx-auto text-gray-50 mt-4 text-center">
          &nbsp;&nbsp;&nbsp;Please Wait... <br/>This may take a few seconds
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>Home | CyberFrat</title>
        <meta name="description" content="This is Dashboard" />
      </Helmet>

      <div className="px-5 pt-5 bg-gray-200">
        <div className="pb-5 text-3xl font-bold text-gray-700 font-abril">
          Dashboard
        </div>
        <div className="relative w-full bg-gray-900 rounded-lg">
          <Carousel
            autoPlay
            interval="5000"
            infiniteLoop
            stopOnHover
            useKeyboardArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
          >
            {bannerDetails.map((val) => {
              return (
                <a
                  href={val.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={val.id}
                >
                  <img
                    src={baseURL + val.image}
                    alt="...."
                    className="w-full h-40 md:h-72 lg:h-96 cursor-pointer rounded-lg"
                    onClick={() => window.location("https://cyberfrat.com/")}
                  />
                </a>
              );
            })}
          </Carousel>
        </div>
        {packageTest()}
        <div className="bg-white p-5 rounded-lg shadow-lg mt-6">
          <div className="text-2xl mb-3 font-bold text-gray-700 bg-white font-display">
            Events
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventList === []
              ? null
              : eventList.map((val) => {
                  return (
                    <div key={val?.id}>
                      <a href={val?.link}>
                        <div className="hover:shadow-3xl shadow-sm duration-300 h-full relative group">
                          <div
                            style={{
                              backgroundImage: `url(${baseURL + val?.image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                            }}
                            className="w-full h-64 rounded-lg"
                            // className="lg:ml-2 sm:w-full w-64 md:h-32 sm:h-40 h-64 rounded-lg shadow-lg col-span-4 sm:col-span-1 mx-auto"
                          ></div>
                          {/* <img src={baseURL + val?.image} alt="eventImage" className="w-full h-full rounded-lg"/> */}
                          <div className="lg:opacity-0 opacity-70 group-hover:opacity-70 duration-300 absolute w-full h-64 left-0 bottom-0  z-10 flex justify-center items-center text-lg bg-gray-100 text-black rounded-lg">
                            <div>
                              <span className="md:text-2xl text-lg flex justify-center lg:animate-bounce font-shippori italic">
                                {val?.title}
                              </span>
                              <br />
                              <span className="p-5 text-sm md:text-lg text-center flex justify-center font-condensed ">
                                {val?.about}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

