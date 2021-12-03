import React, { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { ComponentToPrint } from "./certificate.component";
import { userDetails } from "../../redux/actions/authActions";
import { courseDetails } from "../../redux/actions/courseAction";

const Example = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state);
  const { user, course } = storedData;
  const currentUser = user?.currentUser;
  const userDetail = user?.userDetails;
  const courseDetail = course?.detailsOfCourse;
  const loading = course?.loading;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    dispatch(userDetails(currentUser?.user_id));
    dispatch(courseDetails(id));
  }, []);

  useEffect(() => {
    handlePrint()
  }, [courseDetail]);

  if (loading) {
    return (
      <div className="absolute bottom-0 left-0 z-40 text-center bg-gray-900 opacity-90 h-screen w-screen">
        <div className="my-auto mx-auto h-32 w-32 mt-64">
          <div className="h-28 w-28 border-blue-400 rounded-full animate-spin border-t-2 p-4">
            <div className="h-24 w-24 border-blue-400 rounded-full animate-spin border-t-2 p-4">
              <div className="h-20 w-20 border-blue-400 rounded-full animate-spin border-t-2">
                <div className="h-16 w-16 border-blue-400 rounded-full animate-spin border-t-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-32 w-64 mx-auto text-gray-50 mt-4 text-center">
          &nbsp;&nbsp;&nbsp;please wait <br /> this may take a few seconds
        </div>
      </div>
    );
  }

  return (
      <ComponentToPrint
      // handlePrint={handlePrint}
        currentUser={userDetail?.first_name + " "+ userDetail?.last_name}
        courseTitle={courseDetail ? courseDetail.course_title : null}
        ref={componentRef}
      />
  );
};

export default Example;
