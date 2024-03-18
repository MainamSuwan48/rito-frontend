import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as postApi from '../../api/post';

const initialState = {
  posts: [],
  loading: false,
  like: null,
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

export const getPostById = createAsyncThunk(
  'posts/getPostById',
  async (postId) => {
    try {
      const response = await postApi.getPostById(postId);
      console.log(response.data.post);
      return response.data.post;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const findLikePost = createAsyncThunk(
  'posts/findLikePost',
  async (postId) => {
    try {
      const response = await postApi.findLikePost(postId);
      return response.data.like;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const toggleLikePost = createAsyncThunk(
  'posts/toggleLikePost',
  async (postId) => {
    try {
      const response = await postApi.toggleLikePost(postId);
      return response.data.post;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async ({ formData }, { rejectWithValue }) => {
    try {
      const response = await postApi.createPost(formData);
      return response.data.post;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

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
    builder
      .addCase(toggleLikePost.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(toggleLikePost.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(toggleLikePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export const communityReducer = communitySlice.reducer;
