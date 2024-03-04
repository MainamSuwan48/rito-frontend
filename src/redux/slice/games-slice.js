import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as gamesApi from '../../api/games';

//initial state
const initialState = {
  games: [], // For Store Page
  loading: false,
  currentGame: null, // For Game Page
  error: null,
};

export const getGames = createAsyncThunk('games/getGames', async () => {
  try {
    const response = await gamesApi.getGames();
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const getGameById = createAsyncThunk('games/getGameById', async (gameId) => {
  console.log("ran")
  try {
    const response = await gamesApi.getGame(gameId);
    console.log(response.data.game,"game data from get game by id in slice");
    return response.data.game;
  } catch (error) {
    console.log(error,"error from get game by id in slice");
    return Promise.reject(error);
  }
});

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  extraReducers: (builder) => {
    //getGames
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
    //getGameById
    builder
      .addCase(getGameById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGameById.fulfilled, (state, action) => {
        state.currentGame = action.payload;
        state.loading = false;
      })
      .addCase(getGameById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

//reducers
export const gameReducer = gamesSlice.reducer;
