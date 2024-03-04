import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as gamesApi from '../../api/games';

//initial state
const initialState = {
  games: [],
  loading: false,
  error: null,
};

const getGames = createAsyncThunk('games/getGames', async () => {
  try {
    const response = await gamesApi.getGames();
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
});

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGames.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.games = action.payload;
        state.loading = false;
      })
      .addCase(getGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

//reducers
export const gameReducer = gamesSlice.reducer;
