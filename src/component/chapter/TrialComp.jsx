import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import MyCourses from "./component/MyCourses";
import Upcomingtraining from "./component/UpcomingTraining";
import Boxfooter from "./component/BoxFooter";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getPackage } from "../../redux/actions/packageAction";
import {
  fetchPackageDetails,
  getBannerList,
  getEventList,
  getServiceList,
} from "../../api";
import { Link } from "react-router-dom";
import { allotedPackageDetail } from "../../redux/actions/courseAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state);
  const { user, course } = storedData;
  const loading = course?.loading;
  const currentUser = user?.currentUser;
  const courseInfo = course?.allotedPackageDetails;
  const baseURL = "https://rupalibhargava.pythonanywhere.com";
  const [packageInfo, setPackageInfo] = useState([]);
  const [event, setEvent] = useState([]);
  const [services, setServices] = useState([]);
  const [bannerDetails, setBannerDetails] = useState([]);

  const fetchEventDetails = async () => {
    setEvent(await (await getEventList()).data?.data);
    setServices(await (await getServiceList()).data?.data);
    setBannerDetails(await (await getBannerList()).data?.data);
    await fetchPackageDetails().then((response) => {
      setPackageInfo(response.data?.data);
    });
  };

  useEffect(() => {
    dispatch(getPackage());
    fetchEventDetails();
  }, []);

  useEffect(() => {
    dispatch(allotedPackageDetail(currentUser?.user_id));
  }, [packageInfo]);
  if (loading) {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        <div>&nbsp;&nbsp;&nbsp;please wait</div>
      </div>
    );
  }

  return (
    <>
      <Sidebar selectedValue="dashboard" />
      <div className=" hidden  align-bottom bg-gray-200 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg
                className="h-6 w-6 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                Enter Your Email
              </h3>
              <div className="mt-2">
                <input type="text" className="bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <Link
            to="/"
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Deactivate
          </Link>
          <Link
            to="/landingpage"
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cancel
          </Link>
        </div>
      </div>
      <div className="p-5 bg-gray-200">
        <div className="pb-5 text-xl font-bold text-gray-700">Dashboard</div>
        <div className="relative w-full">
          <Carousel
            autoPlay
            interval="5000"
            infiniteLoop
            stopOnHover
            showThumbs={false}
          >
            {bannerDetails.map((val) => {
              return (
                <div key={val.id}>
                  <a href={val.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={baseURL + val.image}
                      alt="...."
                      className="w-full h-96 cursor-pointer"
                    />
                    {/* <p className="legend">{val.title}</p> */}
                  </a>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
          <div>
            <div className="bg-white p-4 w-full rounded-lg shadow-lg">
              <Link to="/courses">
                <div className="m-3 text-2xl text-gray-700 font-bold">
                  My Courses
                </div>
              </Link>
              <div className="grid md:grid-cols-3 grid-cols-1">
                {courseInfo?.map((val) => {
                  return (
                    <MyCourses
                      key={val?.course_name?.id}
                      imgsrc={baseURL + val?.course_name?.course_file}
                      courseName={val?.course_name?.course_title}
                      totalTime={val?.course_name?.total_hours}
                      id={val?.course_name?.id}
                    />
                  );
                })}
              </div>
            </div>
            <div className="bg-white p-4 w-full rounded-lg shadow-lg mt-8">
              <div className="m-3 text-2xl text-gray-700 font-bold">
                Packages
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {packageInfo.map((val) => {
                  return (
                    <div
                      key={val.name}
                      className="bg-blue-500 text-white h-20 text-sm rounded-lg my-5 p-3 inline-block w-full"
                    >
                      <div className="inline-block ml-3">
                        <p className="text-lg">{val.name}</p>
                        <p>Price: ${val.price}</p>
                      </div>
                      <a
                        href={val?.payment_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-2 rounded-full font-bold inline-block float-right"
                      >
                        Buy Now
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg lg:ml-5 p-4 mt-5 lg:mt-0">
            <div className="m-3 text-2xl text-gray-700 font-bold">Services</div>
            {event.map((val) => {
              return (
                <>
                  <Upcomingtraining
                    key={val.id}
                    title={val.title}
                    link={val.link}
                    about={val.about}
                    img={baseURL + val.image}
                  />
                </>
              );
            })}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg mt-8 mb-12 p-5 grid grid-cols-2 gap-2 lg:grid-cols-6">
          {services.map((val) => {
            return (
              <Boxfooter
                key={val.id}
                title={val.title}
                link={val.link}
                img={baseURL + val.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
