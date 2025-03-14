import { combineReducers } from "@reduxjs/toolkit";
import authSlicer from "./auth/authSlice";
import usersSlicer from "./users/usersSlice";
const rootReducer = combineReducers({
  auth: authSlicer,
  users: usersSlicer,
});

export default rootReducer;
