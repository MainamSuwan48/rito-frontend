import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as postApi from '../../api/post';

const initialState = {
  posts: [],
  loading: false,
  post: null,
  error: null,
};

export const getAllPosts = createAsyncThunk('posts/getAllPosts', async () => {
  try {
    const response = await postApi.getAllPost();
    return response.data.posts;
  } catch (error) {
    return Promise.reject(error);
  }
});

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    clearPost: (state) => {
      state.post = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const communityReducer = communitySlice.reducer;
