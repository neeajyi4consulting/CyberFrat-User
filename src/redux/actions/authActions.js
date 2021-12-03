import {
  setJWT,
  cleanLocalStorage,
  getUserInfoFromJWT,
} from "../../utils/storage";
import { loginUser, editUserDetails, getUserDetails, changePassword, addUser } from "../../api";
import { ActionTypes } from "../constants/actionTypes";
import { toast } from "react-toastify";

export const loginAction = (data) => async (dispatch) => {
  dispatch({ type: ActionTypes.LOADING, payload: true });
  const response = await loginUser(data);

  if (response.data?.status === true) {
    setJWT(response?.data?.data?.token);
    toast.success("Logged in Successfully");
  } else {
    toast.error("Invalid Email or Password");
  }
  const userData = await getUserInfoFromJWT();

  dispatch({
    type: ActionTypes.LOGIN,
    payload: userData,
  });
  dispatch({ type: ActionTypes.LOADING, payload: false });
};

export const fetchUserAction = () => async (dispatch) => {
  dispatch({ type: ActionTypes.LOADING, payload: true });
  const token = await getUserInfoFromJWT();

  dispatch({
    type: ActionTypes.FETCH_CURRENTUSER,
    payload: token,
  });
  dispatch({ type: ActionTypes.LOADING, payload: false });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: ActionTypes.LOGOUT, payload: { loading: true } });
  cleanLocalStorage();
  toast.success("Logged Out Successfully");

  dispatch({
    type: ActionTypes.LOGOUT,
    payload: null,
  });
  dispatch({ type: ActionTypes.LOADING, payload: false });
};

export const editDetails = (data) => async (dispatch) => {
  dispatch({ type: ActionTypes.LOADING, payload: true });
  const response = await editUserDetails(data);
  toast.info(response.data.message);

  if (response.data.status === true) {
    // console.log("admin function clg done!");
  } else {
    console.log(response);
  }

  dispatch({
    type: ActionTypes.EDIT_DETAILS,
    payload: response,
  });
  dispatch({ type: ActionTypes.LOADING, payload: false });
};

export const userDetails = (userId) => async (dispatch) => {
  dispatch({ type: ActionTypes.LOADING, payload: true });
  const response = await getUserDetails(userId);
  dispatch({
    type: ActionTypes.GET_USER_DETAILS,
    payload: response.data?.data,
  });
  dispatch({ type: ActionTypes.LOADING, payload: false });
};

export const changeUserPassword = (data) => async (dispatch) =>{
  dispatch({ type: ActionTypes.LOADING, payload: true });
  try {
    const response = await changePassword(data);
  toast.info(response.data.message);
  dispatch({
    type: ActionTypes.EDIT_PASSWORD,
    payload: response,
  });
  } catch (error) {
    console.log(error)
  }
  dispatch({ type: ActionTypes.LOADING, payload: false });
}

export const addNewUser = (data) => async (dispatch) => {
  try {
    const response = await addUser(data);
    dispatch({
      type:ActionTypes.ADD_USER,
      payload:response.data
    })
    toast.info(response.data?.message)
  } catch (error) {
    console.log(error)
  }
}