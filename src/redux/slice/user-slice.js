import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as userApi from '../../api/user';

//initial state
const initialState = {
  users: [],
  loading: false,
  currentUser: null,
  userProfile: null,
  userGames: null,
  loadingUserGames: false,
  error: null,
};

export const getAllUsers = createAsyncThunk('users/getAllUsers', async () => {
  try {
    const response = await userApi.getAllUser();
    return response.data.users;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const getUserById = createAsyncThunk(
  'users/getUserById',
  async (userId) => {
    try {
      const response = await userApi.getUserById(userId);
      console.log(response.data);
      return response.data.user;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getUserGames = createAsyncThunk(
  'users/getUserGames',
  async (userId) => {
    console.log(userId);
    try {
      const response = await userApi.getUserGames(userId);
      console.log(response.data);
      return response.data.games;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.currentUser = null;
    },
    clearUserGames: (state) => {
      state.userGames = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // get User by Id
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // get User by Id
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    //get User Games
    builder
      .addCase(getUserGames.pending, (state) => {
        state.loadingUserGames = true;
        state.error = null;
      })
      .addCase(getUserGames.fulfilled, (state, action) => {
        state.loadingUserGames = false;
        state.userGames = action.payload;
      })
      .addCase(getUserGames.rejected, (state, action) => {
        state.loadingUserGames = false;
        state.error = action.error.message;
      });
  },
});

export const { clearUser, clearUserGames } = userSlice.actions;

//reducers
export const userReducer = userSlice.reducer;