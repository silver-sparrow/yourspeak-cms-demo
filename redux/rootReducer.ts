import { combineReducers } from "@reduxjs/toolkit";
import authSlicer from "./auth/authSlice";
import usersSlicer from "./users/usersSlice";
import tagsSlicer from "./Tags/tagsSlice";
import reportsSlicer from "./reports/reportsSlice";
const rootReducer = combineReducers({
  auth: authSlicer,
  users: usersSlicer,
  tags: tagsSlicer,
  reports: reportsSlicer,
});

export default rootReducer;
