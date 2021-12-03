import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { chapterReducer } from "./chapterReducer";
import { courseReducer } from "./courseReducer";
import { packageReducer } from "./packageReducer";
import { purchaseReducer } from "./purchaseReducer";


const reducers = combineReducers({
  user: authReducer,
  course: courseReducer,
  packages: packageReducer,
  chapter: chapterReducer,
  paymentRed: purchaseReducer,
});

export default reducers;
