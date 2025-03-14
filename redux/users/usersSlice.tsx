import { createSlice } from "@reduxjs/toolkit";
import { RepositoryFactory } from "@/repository/RepositoryFactory";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const users = RepositoryFactory.get("users");

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (
    { payload, page, pageSize, onComplete }: FETCH_USERS_PROPS,
    thunkAPI
  ) => {
    try {
      const { data } = await users.fetchUsers(payload, page, pageSize);
      if (data) {
        onComplete();
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
      onComplete();
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userStatus = createAsyncThunk(
  "users/userStatus",
  async ({ payload, onSuccess, onError }: USER_STATUS_PROPS, thunkAPI) => {
    try {
      const { data } = await users.userStatus(payload);
      // if (data) {
      onSuccess(
        !payload.isActive
          ? "User verified successfully"
          : "User unverified successfully"
      );
      return thunkAPI.fulfillWithValue(data);
      // }
    } catch (error: any) {
      onError(error.response?.data?.message || "Something went wrong");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const isUserDelete = createAsyncThunk(
  "users/isUserDelete",
  async ({ userId, onSuccess, onError }: USER_DELETE_PROPS, thunkAPI) => {
    try {
      const { data } = await users.isUserDelete(userId);
      // if (data) {
      onSuccess("User deleted successfully");
      return thunkAPI.fulfillWithValue(data);
      // }
    } catch (error: any) {
      onError(error.response?.data?.message || "Something went wrong");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: USERS_REDUX_STATE = {
  users: [],
  current_page: 1,
  total_users: 0,
  total_pages: 0,
};

const usersSlicer = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload.data;
      state.current_page = action.payload.meta.current_page;
      state.total_users = action.payload.meta.total;
      state.total_pages = action.payload.meta.last_page;
    });
  },
});

export default usersSlicer.reducer;
