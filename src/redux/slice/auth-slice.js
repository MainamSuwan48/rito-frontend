import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as authApi from '../../api/auth';
import { storeToken, deleteToken, getToken } from '@/utils/local-storage';
import { toast } from 'react-toastify';

//initial state

const initialState = {
  authUser: null,
  loading: false,
  error: null,
};

export const setAuthUser = (user) => ({
  type: 'SET_AUTH_USER',
  payload: user,
});

export const getMe = createAsyncThunk('auth/me', async () => {
  const token = getToken();
  if (!token) {
    return Promise.reject('Token not found');
  }
  try {
    const response = await authApi.getMe();
    delete response.data.user.password;
    console.log(response.data.user);
    return response.data.user;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const login = createAsyncThunk(
  'auth/login',
  async ({ usernameOrEmail, password }) => {
    try {
      const data = { usernameOrEmail, password };
      const response = await authApi.login(data);
      storeToken(response.data.token);
      toast.success('Login successful');
      return response.data.user;
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(`Login failed: ${error.response.data.message}`);
      return Promise.reject(error);
    }
  }
);

export const registerUser = createAsyncThunk('auth/register', async (data) => {
  console.log(data, 'data in register from auth-slice');
  try {
    const response = await authApi.register(data);
    console.log(response.data.token, 'response in register from auth-slice');
    deleteToken();
    storeToken(response.data.token);
    toast.success('Registration successful');
    return response.data.user; // Fix the typo here
  } catch (error) {
    console.log(error.response.data.message);
    toast.error(`Register failed: ${error.response.data.message}`);
    return Promise.reject(error);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    deleteToken();
    return null;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const updateAuthUser = createAsyncThunk(
  'auth/updateAuthUser',
  async (dataObj) => {
    const { id, data } = dataObj;
    try {
      console.log(dataObj);
      const response = await authApi.updateAuthUser(id, data);
      console.log(response.data);
      return response.data.user;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const updateProfileImage = createAsyncThunk(
  'auth/updateProfileImage',
  async (dataObj) => {
    const { id, formData } = dataObj;
    try {
      const response = await authApi.updateProfileImage(id, formData);
      return response.data.user;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthUser: (state) => {
      state.authUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Me Cases
      .addCase(getMe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.authUser = action.payload;
        state.loading = false;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // Login Cases
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.authUser = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // Register Cases
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.authUser = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // Logout Cases
    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.authUser = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // update auth user
    builder
      .addCase(updateAuthUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAuthUser.fulfilled, (state, action) => {
        state.loading = false;
        state.authUser = action.payload;
      })
      .addCase(updateAuthUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // update profile image
    builder
      .addCase(updateProfileImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfileImage.fulfilled, (state, action) => {
        state.loading = false;
        state.authUser = action.payload;
      })
      .addCase(updateProfileImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Reducer
export const authReducer = authSlice.reducer;
