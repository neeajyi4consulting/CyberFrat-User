import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../redux/actions/authActions";
import { getCourse, getPackage, plusPackage } from "../redux/actions/courseAction";
import { coursePurchase, paymentAction } from "../redux/actions/purchaseAction";

function AllCourses() {
  const dispatch = useDispatch();
  const baseURL = "https://rupalibhargava.pythonanywhere.com";
  const { user, course } = useSelector((state) => state);
  const currentUser = user?.currentUser;
  const loading = course?.loading;

  const packagePayment = (val) => {
    const detailsOfUser = user.userDetails;
    const amount = val?.price;
    const data = new FormData();
    data.append("amount", amount);
    data.append("user_id", currentUser?.user_id);
    data.append("package_id", val?.id);
    console.log(detailsOfUser);
    dispatch(paymentAction(data, detailsOfUser, val));
  };

  const coursePayment = (val) => {
    const detailsOfUser = user.userDetails;
    const amount = +val?.selling_price;
    const data = new FormData();
    data.append("amount", amount);
    data.append("user_id", currentUser?.user_id);
    data.append("course_id", val?.id);
    dispatch(coursePurchase(data, detailsOfUser, val));
  };

  useEffect(() => {
    dispatch(getPackage());
    dispatch(userDetails(currentUser?.user_id));
    const data = new FormData();
    data.append("package_id", 24);
    dispatch(plusPackage(data));
    dispatch(getCourse())
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
        <title>All Courses | CyberFrat</title>
        <meta name="description" content="This is All Courses page" />
      </Helmet>
      <div className="z-20  p-5 bg-gray-200">
        <div className="bg-white p-5 rounded-lg shadow-lg mt-6">
          <div className="text-xl font-bold text-gray-700 bg-white font-zilla">
            Membership
          </div>
          <div className="grid lg:grid-cols-2  grid-cols-1 md:gap-16 gap-1">
            {!course?.packageDetails
              ? console.log(
                  "no package purchased and info of package",
                  course?.packageDetails
                )
              : course?.packageDetails.map((val) => {
                  return (
                    <div
                      key={val.id}
                      className="flex justify-center items-center h-full my-5 bg-blue-lightest transform hover:translate-x-1 hover:translate-y-1 duration-500"
                    >
                      <div className="bg-gray-300 w-full md:h-60 h-48 rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-200 duration-300 flex card text-grey-darkest">
                        {/* <img
                          className="w-1/2 h-full rounded-l-lg"
                          src={baseURL + val.image}
                          alt="PackageImage"
                        /> */}
                        <div
                          style={{
                            backgroundImage: `url(${baseURL + val.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                          }}
                          className=" w-3/4 h-full rounded-l-lg shadow-sm hover:shadow-lg duration-300"
                        ></div>
                        <div className="w-full flex flex-col">
                          <div className="p-4 pb-0 flex-1">
                            <h3 className="font-light mb-1 md:text-xl text-lg text-grey-darkest font-garamond">
                              {val.name}
                            </h3>
                            <span className="md:text-5xl text-lg text-grey-darkest">
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
                          <button
                            onClick={() => {
                              packagePayment(val);
                            }}
                          >
                            <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light font-acme font-bold">
                              Purchase Now
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
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg mt-6">
          <div className="text-xl font-bold text-gray-700 bg-white pb-3 font-zilla">
            All Courses
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {!course?.courseList ? (
              <div>All Courses</div>
            ) : (
              course?.courseList.map((val) => {
                return (
                  <div
                    className="w-auto lg:mx-2 md:mx-2 sm:mx-2  shadow-lg  text-white text-center rounded-md my-2 relative"
                    key={val.id}
                    id={val.id}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${baseURL + val.course_file})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                      }}
                      className=" w-full h-40 rounded-t-md "
                    ></div>

                    <div className="p-2 bg-gray-200 text-left h-40">
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
                    <div
                      onClick={() => {
                        coursePayment(val);
                      }}
                      className="pt-2 bg-blue-700 hover:bg-blue-600 hover:shadow-lg duration-300 h-10 rounded-b-lg shadow-sm font-acme cursor-pointer"
                    >
                      Buy Course
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCourses;
