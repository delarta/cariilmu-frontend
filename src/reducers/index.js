import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import mentorReducer from "./mentorReducer";

export default combineReducers({
  student: studentReducer,
  admin: adminReducer,
  mentor: mentorReducer,
  auth: authReducer
});
