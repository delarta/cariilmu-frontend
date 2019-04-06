import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import mentorReducer from "./mentorReducer";
import mainReducer from "./mainReducer";

export default combineReducers({
  student: studentReducer,
  admin: adminReducer,
  mentor: mentorReducer,
  auth: authReducer,
  main: mainReducer
});
