import { ActionTypes } from "../constants/actionTypes";
import { addQuery, getAllotedPackage, } from "../../api";
import { toast } from "react-toastify";



export const fetchAllotedPackage = (userId) => async (dispatch) => {
  dispatch({ type: ActionTypes.LOADING, payload: true });
  try {
    const response = await getAllotedPackage(userId);
    dispatch({
      type: ActionTypes.GET_ALLOTED_PACKAGE,
      payload: response.data?.data,
    });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: ActionTypes.LOADING, payload: false });
};

export const addQueries = (data) => async (dispatch) => {
  try {
    const response = await addQuery(data);
    toast.info(response.data?.message)
    dispatch({
      type:ActionTypes.ADD_QUERY,
      payload:response,
    })
  } catch (error) {
    console.log(error)
  }
}




// export const getPackageDetails = ()=> async (dispatch) =>{
//   const response = await fetchPackageDetails()
//   const res = response.data?.data;

//   dispatch({
//     type:ActionTypes.GET_PACKAGE,
//     payload:res
//   })
// }
