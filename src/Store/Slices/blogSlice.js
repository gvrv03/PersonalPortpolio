import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBlogsURL } from "../../../allLinks";

// Define the initial state
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

// Create an async thunk to fetch user data
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const res = await fetch(getAllBlogsURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
});

// Create the user slice
const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    deleteBlog(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
