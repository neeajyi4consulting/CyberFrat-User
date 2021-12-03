import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  chapterDetails: null,
  chapterStatus: {
    completedVideoLenght: 0,
    is_completed: false,
  },
  chapterInfo: {
    name:"testName",
  },
};

export const chapterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_CHAPTER_DETAILS:
      return { ...state, chapterDetails: payload };
    case ActionTypes.CHAPTER_ID_STORED:
      return { ...state, chapterId: payload };
    case ActionTypes.GET_CHAPTER_INFO:
      return { ...state, chapterInfo: payload };
    case ActionTypes.GET_CHAPTER_STATUS:
      return { ...state, chapterStatus: payload };

    default:
      return { state };
  }
};
