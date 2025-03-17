import { createSlice } from "@reduxjs/toolkit";
import { RepositoryFactory } from "@/repository/RepositoryFactory";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const tags = RepositoryFactory.get("tags");

export const fetchTags = createAsyncThunk(
  "tags/fetchTags",
  async ({ page, pageSize, onComplete }: FETCH_TAGS_PROPS, thunkAPI) => {
    try {
      const { data } = await tags.fetchTags(page, pageSize);
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

const initialState: TAGS_REDUX_STATE = {
  tags: [],
  current_page: 1,
  total_users: 0,
  total_pages: 0,
};

const tagsSlicer = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.tags = action.payload.data;
      state.current_page = action.payload.meta.current_page;
      state.total_users = action.payload.meta.total;
      state.total_pages = action.payload.meta.last_page;
    });
  },
});

export default tagsSlicer.reducer;
