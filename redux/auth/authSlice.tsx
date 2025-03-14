import { createSlice } from "@reduxjs/toolkit";
import { RepositoryFactory } from "@/repository/RepositoryFactory";
import { createAsyncThunk } from "@reduxjs/toolkit";
const auth = RepositoryFactory.get("auth");

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ payload, onSuccess, onError }: LOGIN_USER_PROPS, thunkAPI) => {
    try {
      const { data } = await auth.loginUser(payload);
      if (data) {
        onSuccess();
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error: any) {
      onError(error.response?.data?.message || "Something went wrong");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async ({ onSuccess, onError }: LOGOUT_USER_PROPS, thunkAPI) => {
    try {
      onSuccess();
      return thunkAPI.fulfillWithValue(null);
    } catch (error: any) {
      onError("Something went wrong");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const globalLoading = createAsyncThunk(
  "auth/globalLoading",
  async ({ payload }: { payload: boolean }, thunkAPI) => {
    return thunkAPI.fulfillWithValue(payload);
  }
);
const initialState: LOGIN_REDUX_STATE = {
  access_token: null,
  token_type: null,
  expires_in: null,
  isGlobalLoading: false,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.access_token = action.payload.access_token;
      state.token_type = action.payload.token_type;
      state.expires_in = action.payload.expires_in;
      localStorage.setItem("token", action.payload.access_token);
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.access_token = null;
      state.token_type = null;
      state.expires_in = null;
      localStorage.removeItem("auth");
      localStorage.removeItem("token");
    });
    builder.addCase(globalLoading.fulfilled, (state, action) => {
      state.isGlobalLoading = action.payload;
    });
  },
});

export default authSlicer.reducer;
