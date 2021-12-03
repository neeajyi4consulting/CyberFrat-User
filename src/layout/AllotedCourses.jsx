import React from "react";
import { Helmet } from "react-helmet";
import EnrolledCourses from "../Pages/EnrolledCourses";

function Courses() {
  return (
    <>
    <Helmet>
        <meta charset="utf-8" />
        <title>My Courses | CyberFrat</title>
        <meta name="description" content="This is Alloted Courses page" />
      </Helmet>
      <div className="z-20  p-5 bg-gray-200">
        <div className="bg-white p-5 rounded-lg shadow-lg mt-6">
          <div className="text-xl font-bold text-gray-700 bg-white pb-3 font-zilla">
            My Courses
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <EnrolledCourses />
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
