import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as userApi from '../../api/user';

//initial state
const initialState = {
  users: [],
  loading: false,
  currentUser: null,
  error: null,
};

export const getAllUsers = createAsyncThunk('users/getAllUsers', async () => {
  try {
    const response = await userApi.getAllUser();
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const getUserById = createAsyncThunk(
  'users/getUserById',
  async (userId) => {
    try {
      const response = await userApi.getUserById(userId);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const updateUser = createAsyncThunk('users/updateUser', async (id,data) => {
  try {
    const response = await userApi.updateUser(id,data);
    console.log(response.data)
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
});


const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
      builder
      // get User by Id
      .addCase(getUserById.pending, (state)=>{
        state.loading = true
        state.error = null
      })
      .addCase(getUserById.fulfilled, (state,action)=>{
        state.loading = false
        state.users = action.payload
      })
      .addCase(getUserById.rejected,(state,action)=>{
        state.loading = false
        state.error = action.error.message
      })

      // update user
      builder
      .addCase(updateUser.pending,(state)=>{
        state.loading = true
        state.error = null
      })
      .addCase(updateUser.fulfilled,(state,action)=>{
        state.loading = false
        state.users = action.payload
      })
      .addCase(updateUser.rejected,(state,action)=>{
        state.loading = false
        state.error = action.error.message
      })

    }
});

//reducers
export const userReducer = userSlice.reducer;
