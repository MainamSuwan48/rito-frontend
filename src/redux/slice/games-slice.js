import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as gamesApi from '../../api/games';
import { toast } from 'react-toastify';

//initial state
const initialState = {
  games: [], // For Store Page
  isAscending: true,
  loading: false,
  currentGame: null, // For Game Page
  loadingCurrentGame: false,
  genres: null, // For Store Page
  loadingGenres: false,
  searchedGames: [], // For Search Page
  searchedGamesAscending: true,
  loadingSearchedGames: false,
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
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const searchGames = createAsyncThunk(
  'games/searchGames',
  async (query) => {
    try {
      const response = await gamesApi.searchGames(query);
      console.log(
        response.data.games.length,
        'response from search games in slice'
      );
      if (response.data.games.length === 0) {
        toast.error('No games found');
        return rejectWithValue('No games found');
      }
      return response.data.games;
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
      console.log(state.games);
      const key = action.payload;
      state.isAscending = true;
      state.games.games.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });
    },
    sortSearchedGames: (state, action) => {
      const key = action.payload;
      state.searchedGamesAscending = true;
      state.searchedGames.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });
    },
    reverseGames: (state) => {
      state.games.games.reverse();
      state.isAscending = !state.isAscending;
    },
    reverseSearchedGames: (state) => {
      state.searchedGames.reverse();
      state.searchedGamesAscending = !state.searchedGamesAscending;
    },
    clearSearch: (state) => {
      state.searchedGames = [];
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
    //searchGames
    builder
      .addCase(searchGames.pending, (state) => {
        state.loadingSearchedGames = true;
        state.error = null;
      })
      .addCase(searchGames.fulfilled, (state, action) => {
        state.searchedGames = action.payload;
        state.loadingSearchedGames = false;
      })
      .addCase(searchGames.rejected, (state, action) => {
        state.loadingSearchedGames = false;
        state.error = action.error.message;
      });
  },
});

//reducers
export const {
  sortGames,
  reverseGames,
  sortSearchedGames,
  reverseSearchedGames,
  clearSearch,
} = gamesSlice.actions;
export const gameReducer = gamesSlice.reducer;


