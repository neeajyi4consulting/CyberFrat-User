import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  courseList: [],
  userDetails: [],
  chapterList: [],
  courseDetails: [],
  detailsOfCourse: null,
  courseQuiz: [],
  quizResult: null,
  allotedPackageDetails: [],
  loading: false,
  score: " ",
  chapterClientList: {},
  courseClientList: "",
  quizCompleted: false,
  addCertificate: null,
  packageCourse: [],
  packageDetails: [],
  goldPackageCourses: [],
  plusPackageCourses: [],
};

export const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_COURSE_LIST:
      return { ...state, courseList: payload };
    case ActionTypes.GET_USER_DETAILS:
      return { ...state, userDetails: payload };
    case ActionTypes.GET_CHAPTER_LIST:
      return { ...state, chapterList: payload };
    case ActionTypes.GET_COURSE_DETAILS:
      return { ...state, courseDetails: payload };
    case ActionTypes.DETAILS_OF_COURSE:
      return { ...state, detailsOfCourse: payload };
    case ActionTypes.GET_QUIZ:
      return { ...state, courseQuiz: payload };
    case ActionTypes.GET_QUIZ_RESULT:
      return { ...state, quizResult: payload };
    case ActionTypes.GET_ALLOTED_PACKAGE:
      return { ...state, allotedPackageDetails: payload };
    case ActionTypes.LOADING:
      return { ...state, loading: payload };
    case ActionTypes.CHECK_SCORE:
      return { ...state, score: payload };
    case ActionTypes.CHAPTER_CLIENT_LIST:
      return { ...state, chapterClientList: payload };
    case ActionTypes.COURSE_CLIENT_LIST:
      return { ...state, courseClientList: payload };
    case ActionTypes.QUIZCOMPLETED:
      return { ...state, quizCompleted: payload };
    case ActionTypes.ADDCERTIFICATE:
      return { ...state, addCertificate: payload };
    case ActionTypes.GET_PACKAGE_COURSE:
      return { ...state, packageCourse: payload };
    case ActionTypes.GET_PACKAGE:
      return { ...state, packageDetails: payload };
    case ActionTypes.GOLD_PACKAGE_COURSES:
      return { ...state, goldPackageCourses: payload };
    case ActionTypes.PLUS_PACKAGE_COURSES:
      return { ...state, plusPackageCourses: payload };

    default:
      return state;
  }
};
