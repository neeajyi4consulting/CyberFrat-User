import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function DashboardCourses() {
  const baseURL = "https://rupalibhargava.pythonanywhere.com";
  const [showPackageTest, setShowPackageTest] = useState(false);
  const { course } = useSelector((state) => state);
  const goldPackageCourse = course?.goldPackageCourses;
  const plusPackageCourse = course?.plusPackageCourses;
  return (
    <>
      <div className={`grid md:grid-cols-2  grid-cols-1 gap-16 ${showPackageTest}`}>
        {!course?.packageDetails
          ? console.log("package Details", course?.packageDetails)
          : course?.packageDetails.map((val) => {
              return (
                <>
                  <div
                    key={val.id}
                    className="flex justify-center items-center h-full my-5 bg-blue-lightest"
                  >
                    <div className="bg-gray-300 w-full h-60 rounded-lg shadow-md flex card text-grey-darkest">
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
                          <span className="text-5xl text-grey-darkest">
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
                            setShowPackageTest(false ? "hidden" : "")
                            console.log("hehe", showPackageTest);
                          }}
                        >
                          <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                            View Package
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
                </>
              );
            })}
      </div>
    </>
  );
}

{
  /**
<div className="w-full bg-white p-5 my-8 rounded-lg shadow-lg">
            <div className="mx-3 mb-3 text-2xl text-gray-700 font-bold">
              <span>Gold Package</span>
              <button className="bg-blue-500 text-white font-thin px-3 py-2 rounded-lg text-lg float-right">
                Buy Package
              </button>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              {!course?.goldPackageCourses ? (
                <div>hello</div>
              ) : (
                goldPackageCourse.map((val) => {
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

                      <div className="p-2 bg-white text-left h-40">
                        <p className="text-gray-500 text-sm">Course</p>
                        <p className=" text-gray-800 h-16 text-xl">
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
                      <div className="pt-2 bg-blue-700 hover:bg-blue-900 hover:shadow-inner h-10 rounded-b-lg shadow-lg">
                        <button onClick={() => {}}>Buy Course</button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
          <div className="w-full bg-white p-5 my-8 rounded-lg shadow-lg">
            <div className="mx-3 mb-3 text-2xl text-gray-700 font-bold">
              <span>Plus Package</span>
              <button className="bg-blue-500 text-white font-thin px-3 py-2 rounded-lg text-lg float-right">
                Buy Package
              </button>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              {!course?.plusPackageCourses
                ? (console.log(course?.plusPackageCourses), (<div>hello</div>))
                : plusPackageCourse.map((val) => {
                    return (
                      <div
                        className="w-auto lg:mx-2 md:mx-2 sm:mx-2  shadow-lg  text-white text-center rounded-md my-2 relative"
                        key={val.id}
                        id={val.id}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${
                              baseURL + val.course_file
                            })`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                          }}
                          className=" w-full h-40 rounded-t-md "
                        ></div>

                        <div className="p-2 bg-white text-left h-40">
                          <p className="text-gray-500 text-sm">Course</p>
                          <p className=" text-gray-800 h-16 text-xl">
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
                        <div className="pt-2 bg-blue-700 hover:bg-blue-900 hover:shadow-inner h-10 rounded-b-lg shadow-lg">
                          <button onClick={() => {}}>Buy Course</button>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
*/
}
