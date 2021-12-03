import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { showPackagesInCourse } from "../redux/actions/courseAction";
import { coursePurchase } from "../redux/actions/purchaseAction";
function ShowAllCourses() {
  const dispatch = useDispatch();
  const { user, course } = useSelector((state) => state);
  const currentUser = user.currentUser;
  const loading = course?.loading;
  const courseInfo = course?.packageCourse;
  const baseURL = "https://rupalibhargava.pythonanywhere.com";

  const packageDetailsFunction = async () => {
    const data = new FormData();
    data.append("package_id", 25);
    dispatch(showPackagesInCourse(data));
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
    packageDetailsFunction();
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
      {!course?.packageCourse ? (
        <div>Courses in Gold Packages</div>
      ) : (
        courseInfo.map((val) => {
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
    </>
  );
}

export default ShowAllCourses;
