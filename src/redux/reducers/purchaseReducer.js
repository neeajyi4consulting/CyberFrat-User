import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    paymentResponse:null,
};

export const purchaseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.BUY_PACKAGE:
      return { ...state, paymentResponse: payload };

    default:
      return state;
  }
};
