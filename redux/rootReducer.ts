import { combineReducers } from "@reduxjs/toolkit";
import authSlicer from "./auth/authSlice";
const rootReducer = combineReducers({
  auth: authSlicer,
});


export default rootReducer;
