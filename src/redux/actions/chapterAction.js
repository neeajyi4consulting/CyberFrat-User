import {
  changeChapterStatus,
  getChapterDetails,
  getChapterStatus,
} from "../../api";
import { ActionTypes } from "../constants/actionTypes";

export const fetchChapterDetails = (id) => async (dispatch) => {
  try {
    const response = await getChapterDetails(id);
    // console.log("this is from action chapter", response?.data?.data)
    dispatch({
      type: ActionTypes.GET_CHAPTER_DETAILS,
      payload: response?.data?.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const chapterIdStored = (id) => async (dispatch) => {
  try {
    await dispatch({
      type: ActionTypes.CHAPTER_ID_STORED,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const chapterDetails = (id) => async (dispatch) => {
  const response = await getChapterDetails(id);
  dispatch({
    type: ActionTypes.GET_CHAPTER_INFO,
    payload: response.data?.data,
  });
};

export const chapterStatus = (data) => async (dispatch) => {
  const response = await getChapterStatus(data);
  dispatch({
    type: ActionTypes.GET_CHAPTER_STATUS,
    payload: response.data?.data,
  });
};

export const changeStatusOfChapter = (data) => async (dispatch) => {
  const response = await changeChapterStatus(data);
  console.log("status chapter change", response);
  dispatch({
    type: ActionTypes.CHANGE_CHAPTER_STATUS,
    payload: response.data,
  });
};


