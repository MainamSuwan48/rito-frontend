import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as gamesApi from '../../api/games';

//initial state
const initialState = {
  games: [], // For Store Page
  loading: false,
  currentGame: null, // For Game Page
  loadingCurrentGame: false,
  genres: null, // For Store Page
  loadingGenres: false,
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

export const getGameById = createAsyncThunk(
  'games/getGameById',
  async (gameId) => {
    console.log('ran');
    try {
      const response = await gamesApi.getGame(gameId);
      console.log(response.data.game, 'game data from get game by id in slice');
      return response.data.game;
    } catch (error) {
      console.log(error, 'error from get game by id in slice');
      return Promise.reject(error);
    }
  }
);

export const getAllGenres = createAsyncThunk('games/getAllGenres', async () => {
  try {
    const response = await gamesApi.getAllGenres();
    console.log(response.data.genres, 'response from get all genres in slice');
    return response.data.genres;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const getGamesByGenreId = createAsyncThunk(
  'games/getGamesByGenreId',
  async (genreId) => {
    try {
      const response = await gamesApi.getGameByGenre(genreId);
      return response.data;
      console.log(response.data, 'response from get games by genre id in slice');
    } catch (error) {
      return Promise.reject(error);
    }
  }
);



const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    sortGames: (state, action) => {
      state.games = action.payload;
    },
  },
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
        state.loadingCurrentGame = true;
        state.error = null;
      })
      .addCase(getGameById.fulfilled, (state, action) => {
        state.currentGame = action.payload;
        state.loadingCurrentGame = false;
      })
      .addCase(getGameById.rejected, (state, action) => {
        state.loadingCurrentGame = false;
        state.error = action.error.message;
      });
    //getAllGenres
    builder
      .addCase(getAllGenres.pending, (state) => {
        state.loadingGenres = true;
        state.error = null;
      })
      .addCase(getAllGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
        state.loadingGenres = false;
      })
      .addCase(getAllGenres.rejected, (state, action) => {
        state.loadingGenres = false;
        state.error = action.error.message;
      });
    //getGamesByGenreId
    builder
      .addCase(getGamesByGenreId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGamesByGenreId.fulfilled, (state, action) => {
        state.games = action.payload;
        state.loading = false;
      })
      .addCase(getGamesByGenreId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

//reducers
export const gameReducer = gamesSlice.reducer;
