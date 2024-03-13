import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as adminApi from '@/api/admin';
import { toast } from 'react-toastify';

//initial state
const initialState = {
  unVerifiedGames: [],
  allChats: [],
  loading: false,
  error: null,
};

export const getUnverifiedGames = createAsyncThunk(
  'admin/games/non-verified',
  async () => {
    try {
      const response = await adminApi.getUnverifiedGames();
      return response.data.games;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const verifyGame = createAsyncThunk(
  'admin/games/verify',
  async ({ gameId, navigate }) => {
    try {
      const response = await adminApi.verifyGame(gameId);
      toast.success('Game verified');
      navigate('/admin');
      return response.data.game;
    } catch (error) {
      toast.error(error.response.message);
      return Promise.reject(error);
    }
  }
);

export const deleteGame = createAsyncThunk(
  'admin/games/delete',
  async ({ gameId, navigate }) => {
    try {
      const response = await adminApi.deleteGame(gameId);
      toast.success(`Deleted game id: ${gameId}`);
      navigate('/admin');
      return gameId;
    } catch (error) {
      toast.error(error.response.message);
      return Promise.reject(error);
    }
  }
);

export const getAllChat = createAsyncThunk('admin/chat/all', async () => {
  try {
    const response = await adminApi.getAllChat();
    return response.data.chats;
  } catch (error) {
    return Promise.reject(error);
  }
});

// slice
const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    clearUnverifiedGames: (state) => {
      state.unVerifiedGames = [];
    },
  },
  extraReducers: (builder) => {
    // getGames unverified
    builder
      .addCase(getUnverifiedGames.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUnverifiedGames.fulfilled, (state, action) => {
        state.loading = false;
        state.unVerifiedGames = action.payload;
      })
      .addCase(getUnverifiedGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // verify
    builder
      .addCase(verifyGame.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyGame.fulfilled, (state, action) => {
        state.loading = false;
        state.unVerifiedGames.filter((game) => game.id !== action.payload.id);
      })
      .addCase(verifyGame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // deleteGame
    builder
      .addCase(deleteGame.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteGame.fulfilled, (state, action) => {
        state.loading = false;
        state.unVerifiedGames.filter((game) => game.id !== action.payload);
      })
      .addCase(deleteGame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(getAllChat.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllChat.fulfilled, (state, action) => {
        state.loading = false;
        state.allChats = action.payload;
      })
      .addCase(getAllChat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// reducer
export const { clearUnverifiedGames } = adminSlice.actions;
export const adminReducer = adminSlice.reducer;
