import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allotedPackageDetaile } from "../redux/actions/courseAction";
function EnrolledCourses() {
  const dispatch = useDispatch();
  const { user, course } = useSelector((state) => state);
  const currentUser = user?.currentUser;
  const courseInfo = course?.allotedPackageDetails;
  const baseURL = "https://rupalibhargava.pythonanywhere.com";

  useEffect(() => {
    dispatch(allotedPackageDetaile(currentUser?.user_id));
  }, []);
  return (
    <>
      {courseInfo?.length === 0 ? <div className="text-center text-2xl italic text-gray-400 w-auto col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5 font-abril">"Please Purchase any Course or Package"</div> : courseInfo.map((val) => {
        return (
          <div
            className="w-auto lg:mx-2 md:mx-2 sm:mx-2 shadow-lg bg-gray-200 hover:bg-gray-100 duration-300 rounded-md my-2 relative"
            key={val.id}
            id={val.course_name.id}
          >
            <Link to={"/courses/chaptervideo/" + val.course_name.id}>
            <div
              style={{
                backgroundImage: `url(${
                  baseURL + val.course_name.course_file
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              className=" w-full h-40 rounded-t-md"
            ></div>

            <div className="p-2">
              <p className="text-gray-500 text-sm">Course</p>
              <p className=" text-gray-800 mb-5 text-xl font-dm">
                
                  {val.course_name.course_title}
              </p>
              <span className="absolute bottom-2 left-2 text-sm font-satisfy">
                by&nbsp;
                <span className="">
                  {val.course_name.author}
                </span>
              </span>
            </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default EnrolledCourses;
