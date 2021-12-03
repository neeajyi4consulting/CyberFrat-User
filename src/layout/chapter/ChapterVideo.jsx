import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ReactTooltip from "react-tooltip";
import Vimeo from "@u-wave/react-vimeo";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  getChapterClientList,
  setCertificate,
} from "../../redux/actions/courseAction";
import { changeStatusOfChapter } from "../../redux/actions/chapterAction";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function ChapterVideo() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, course } = useSelector((state) => state);
  const loading = course?.loading;
  const currentUser = user?.currentUser;
  const statuses = course?.chapterClientList;
  const isPassed = course?.chapterClientList?.ispass;
  const courseList = course?.chapterClientList?.chapter_data;
  const [chapter, setChapter] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoLink, setVideoLink] = useState();

  const handleFetchCourse = () => {
    const data = new FormData();
    data.append("user_id", currentUser.user_id);
    data.append("course_id", id);
    dispatch(getChapterClientList(data));
  };

  const handleOnChangeVideo = (val) => {
    console.log("this is chapter id", chapter);
    setChapter(val?.id);
    setVideoLink(val?.link);
  };
  const handleOnFinishVideo = (res) => {
    const data = new FormData();
    data.append("user_id", currentUser.user_id);
    data.append("chapter_id", chapter);
    data.append("course_id", id);
    data.append("status", res.percent);
    data.append("completedVideoLenght", res.seconds);
    data.append("totalVideoLength", res.duration);
    dispatch(changeStatusOfChapter(data));
    if (courseList.length - 1 > currentIndex) {
      setCurrentIndex(currentIndex + 1);
      handleFetchCourse();
    } else {
      console.log("something went wrong");
      handleFetchCourse();
    }
  };

  const autoPlayNextVideo = () => {
    setVideoLink(courseList ? courseList[currentIndex].link : "not available");
    setChapter(!courseList ? null : courseList[currentIndex]?.id);
  };

  useEffect(() => {
    handleFetchCourse();
  }, []);
  useEffect(() => {
    autoPlayNextVideo();
  }, [courseList]);

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>Chapter Video | CyberFrat</title>
        <meta name="description" content="This is Chapter Video page" />
      </Helmet>
      <div className="bg-gray-200 pt-8">
        <div className="bg-gray-100 sm:px-5 sm:py-3 sm:mx-16 sm:p-6 rounded-lg shadow-lg">
          <div className="mb-3 p-1">
            <span className="font-bold text-2xl">Chapter Video</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 w-full my-3">
            <div className="bg-white relative col-span-2 shadow-lg">
              {loading ? (
                <div className="z-40 text-center bg-gray-900 opacity-90 h-auto w-full ">
                  <div className="my-auto mx-auto h-24 w-24">
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
                    &nbsp;&nbsp;&nbsp;please wait <br /> this may take a few
                    seconds
                  </div>
                </div>
              ) : (
                <div>
                  <Vimeo
                    video={
                      courseList !== undefined
                        ? videoLink
                        : "https://vimeo.com/647748643"
                    }
                    // height="600px"
                    // width="900px"
                    responsive={true}
                    showByline={false}
                    showPortrait={false}
                    showTitle={false}
                    onError={(error) => {
                      console.log("this is error", error);
                    }}
                    onEnd={(res) => handleOnFinishVideo(res)}
                  />
                </div>
              )}

              <div className="h-auto border-b-1 border-gray-700 shadow-lg bg-white grid grid-cols-1 md:grid-cols-5">
                <div
                  to="/"
                  className="text-blue-400 mx-3 py-4 px-8 border-b-2 text-center border-blue-400"
                >
                  About
                </div>
                {statuses?.course_status === "completed" ? (
                  !isPassed ? (
                    <Link
                      rel="noreferrer"
                      to={`/courses/chapterquiz/${id}`}
                      className={
                        "text-gray-700 mx-3 py-4 px-8 text-center relative"
                      }
                    >
                      Quiz
                    </Link>
                  ) : (
                    <button
                      data-tip="You have already Passed this test"
                      className="text-gray-400 text-center cursor-not-allowed"
                    >
                      Quiz
                      <ReactTooltip />
                    </button>
                  )
                ) : (
                  <button
                    data-tip="Complete this Course First"
                    className="text-gray-400 text-center cursor-not-allowed"
                  >
                    Quiz
                    <ReactTooltip />
                  </button>
                )}
                {statuses.Quiz_Completed &&
                statuses?.course_status === "completed" ? (
                  isPassed ? (
                    <button
                      onClick={() => {
                        history.push(`/certificate/${id}`);
                        const data = new FormData();
                        data.append("user_id", currentUser?.user_id);
                        data.append("course_id", id);
                        dispatch(setCertificate(data));
                      }}
                      className={
                        "text-gray-700 mx-3 py-4 px-8 text-center relative"
                      }
                    >
                      Certificate
                    </button>
                  ) : (
                    <button className="text-gray-400 text-center cursor-not-allowed">
                      <div data-tip="Sorry, You failed test" type="success">
                        Certificate
                      </div>
                      <ReactTooltip />
                    </button>
                  )
                ) : (
                  <button className="text-gray-400 text-center cursor-not-allowed">
                    Certificate
                  </button>
                )}
              </div>
              <div className="bg-white pt-5">
                <p className="text-gray-500 px-5 py-2 h-auto ">
                  {!statuses?.chapter_data
                    ? "About this Course"
                    : statuses?.chapter_data[0]?.course?.about}
                  {/* {!chapter ? "" : chapter.name?.about}  */}
                </p>
              </div>
            </div>
            <div
              style={{ overflow: "auto", height: "auto", maxHeight: "620px" }}
            >
              <div className="bg-white shadow-xl w-full">
                <div className="p-5">
                  <p className="text-lg font-bold">Chapters In This Course</p>
                </div>
                <div>
                  {!courseList || courseList === undefined
                    ? null
                    : courseList.map((val) => {
                        return (
                          <div key={val?.id}>
                            <div
                              className={`border-t-2 border-fuchsia-600 p-5 duration-300 cursor-pointer ${
                                val?.chapter_status?.is_completed
                                  ? "bg-green-200 text-gray-700 shadow-lg hover:bg-green-300"
                                  : "bg-white hover:bg-blue-50"
                              } `}
                              onClick={() => handleOnChangeVideo(val)}
                            >
                              <p className="inline-block overflow-hidden">
                                &nbsp; {val?.chapter_name}
                              </p>
                              <p className="text-sm text-gray-600 pl-7">
                                {val?.chapter_file ? (
                                  <Link to="/">Attatched File</Link>
                                ) : (
                                  "Video"
                                )}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChapterVideo;
