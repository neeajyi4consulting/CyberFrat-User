import React from "react";
import totalCoursesIcon from "../../../assets/img/Total-course.svg";
import completedCourseIcon from "../../../assets/img/completed-course.svg";
import totalLearningHours from "../../../assets/img/Total-Learning-Horse.svg";

const Coursesinfo = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      <div className="bg-blue-500 text-white rounded-lg my-5 p-3 inline-block">
        <div className="bg-white rounded-full inline-block p-3">
          <img src={totalCoursesIcon} alt="...." className="" />
        </div>
        <div className="inline-block ml-3">
          <p>Total Courses</p>
          <p>09</p>
          <div className="relative bg-gray-200 mt-2 rounded-full">
            <div className="overflow-hidden h-1 w-auto  text-xs flex rounded-full bg-blue-400">
              <div
                style={{ width: `50px` }}
                className=" flex flex-col text-center z-0 text-white rounded-full bg-white"
              ></div>
            </div>
          </div>
          <div className="inline text-xs">40 OF 125 Lesson Completed</div>
        </div>
      </div>
      <div className="bg-red-500 text-white rounded-lg my-5 p-3 inline-block ">
        <div className="bg-white rounded-full inline-block p-3">
          <img src={completedCourseIcon} alt="...." className="" />
        </div>
        <div className="inline-block ml-3">
          <p>Completed Courses</p>
          <p>04</p>
          <div className="relative bg-gray-200 mt-2 rounded-full">
            <div className="overflow-hidden h-1 w-auto  text-xs flex rounded-full bg-yellow-400">
              <div
                style={{ width: `50px` }}
                className=" flex flex-col text-center z-0 text-white rounded-full bg-white"
              ></div>
            </div>
          </div>
          <div className="inline text-xs">30% Lesson Completed 17 days</div>
        </div>
      </div>
      <div className="bg-blue-500 text-white rounded-lg my-5 p-3 inline-block">
        <div className="bg-white rounded-full inline-block p-3">
          <img src={totalLearningHours} alt="...." className="" />
        </div>
        <div className="inline-block ml-3">
          <p>Total Learning Hours</p>
          <p>50 Hours</p>
          <div className="relative bg-gray-200 mt-2 rounded-full">
            <div className="overflow-hidden h-1 w-auto  text-xs flex rounded-full bg-blue-400">
              <div
                style={{ width: `50px` }}
                className=" flex flex-col text-center z-0 text-white rounded-full bg-white"
              ></div>
            </div>
          </div>
          <div className="inline text-xs">60% Lesson Completed 23 days</div>
        </div>
      </div>
    </div>
  );
};

export default Coursesinfo;
