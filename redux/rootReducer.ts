import { combineReducers } from "@reduxjs/toolkit";
import authSlicer from "./auth/authSlice";
import usersSlicer from "./users/usersSlice";
import tagsSlicer from "./Tags/tagsSlice";

const rootReducer = combineReducers({
  auth: authSlicer,
  users: usersSlicer,
  tags: tagsSlicer,
});

export default rootReducer;
