import { createSlice } from "@reduxjs/toolkit";
import { RepositoryFactory } from "@/repository/RepositoryFactory";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const reports = RepositoryFactory.get("reports");

export const fetchReports = createAsyncThunk(
  "reports/fetchReports",
  async ({ page, pageSize, onComplete }: FETCH_REPORTS_PROPS, thunkAPI) => {
    try {
      const { data } = await reports.fetchReports(page, pageSize);
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

const initialState: REPORTS_REDUX_STATE = {
  reports: [],
  current_page: 1,
  total_users: 0,
  total_pages: 0,
};

const reportsSlicer = createSlice({
  name: "reports",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReports.fulfilled, (state, action) => {
      state.reports = action.payload.data;
      state.current_page = action.payload.meta.current_page;
      state.total_users = action.payload.meta.total;
      state.total_pages = action.payload.meta.last_page;
    });
  },
});

export default reportsSlicer.reducer;
