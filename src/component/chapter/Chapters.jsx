import checkIcon from "../../assets/img/check-mark.svg";
import React from "react";
import {
  chapterIdStored,
  chapterDetails,
} from "../../redux/actions/chapterAction";
import { useDispatch } from "react-redux";

import { getChapterDetails } from "../../api";

const Chapters = ({id, chapterName}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(chapterIdStored(id));
    dispatch(chapterDetails(id));
  };

  // const chapterDetails = async (courseId) => {
  //   await getChapterDetails(8).then((response) => {
  //     const chapterInfo = response.data?.data;
  //     // console.log("this is chapterDtails", chapterInfo);
  //     // setDetailsOfChapter({
  //     //   about: chapterInfo.about,
  //     //   link: chapterInfo.link,
  //       // chapterName:chapterInfo.chapter_name,
  //     });
  //   });
  // };

  return (
    <>
      <div>
        <div
          className="border-t-2 border-fuchsia-600 p-5 bg-red-200"
          onClick={handleClick}
        >
          <img src={checkIcon} alt="...." className="inline-block" />
          <p className="inline-block">&nbsp; {chapterName}</p>
          <p className="text-sm text-gray-600 pl-7">Video</p>
        </div>
      </div>
    </>
  );
};

export default Chapters;
