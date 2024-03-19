import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as gamesApi from '../../api/games';
import { toast } from 'react-toastify';

//initial state
const initialState = {
  allGames: [], // For Store Page
  page: 1,
  isAscending: true,
  loading: false,
  moreGamesLoading: false,
  randomGames: [], // For Home Page
  loadingRandomGames: false,
  currentGame: null, // For Game Page
  loadingCurrentGame: false,
  genres: null, // For Store Page
  currentGenre: null,
  loadingGenres: false,
  searchedGames: [], // For Search Page
  gameSearchQuery: '',
  searchPage: 1,
  moreSearchedGamesLoading: false,
  searchedGamesAscending: true,
  loadingSearchedGames: false,
  error: null,
  /// For Publishing
  gameTags: [], //tags
  loadingTags: false,
  gameTagsForPublishing: [],
  platforms: [], //platforms
  loadingPlatforms: false,
  gamePlatformsForPublishing: [],
  genresForPublishing: [],
  filteredPlatforms: [],
  //genres for publishing
};

export const getGames = createAsyncThunk('games/getGames', async (page) => {
  try {
    const response = await gamesApi.getGames(page);
    await new Promise((resolve) => setTimeout(resolve, 300));
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const getMoreGames = createAsyncThunk(
  'games/getMoreGames',
  async (page) => {
    try {
      const response = await gamesApi.getGames(page);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getGameById = createAsyncThunk(
  'games/getGameById',
  async (gameId) => {
    try {
      const response = await gamesApi.getGame(gameId);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return response.data.game;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getRandomGames = createAsyncThunk(
  'games/getRandomGames',
  async () => {
    try {
      const response = await gamesApi.getRandomGames();
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log(
        response.data.games,
        'response.data.games from getRandomGames in slice '
      );
      return response.data.games;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getAllGenres = createAsyncThunk('games/getAllGenres', async () => {
  try {
    const response = await gamesApi.getAllGenres();
    await new Promise((resolve) => setTimeout(resolve, 300));
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
      await new Promise((resolve) => setTimeout(resolve, 300));
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getMoreGamesByGenreId = createAsyncThunk(
  'games/getMoreGamesByGenreId',
  async ({ genreId, page }) => {
    try {
      const response = await gamesApi.getGameByGenre(genreId, page);
      await new Promise((resolve) => setTimeout(resolve, 300));
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
      await new Promise((resolve) => setTimeout(resolve, 300));
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

export const getMoreSearchGames = createAsyncThunk(
  'games/getMoreSearchGames',
  async ({ query, page }) => {
    try {
      const response = await gamesApi.searchGames(query, page);
      await new Promise((resolve) => setTimeout(resolve, 300));
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const searchTags = createAsyncThunk(
  'games/searchTags',
  async (query) => {
    try {
      const response = await gamesApi.searchTags(query);
      await new Promise((resolve) => setTimeout(resolve, 300));
      console.log(response.data.tags);
      return response.data.tags;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getAllPlatforms = createAsyncThunk(
  'games/getAllPlatForms',
  async () => {
    try {
      const response = await gamesApi.getAllPlatforms();
      await new Promise((resolve) => setTimeout(resolve, 300));
      console.log(response.data.tags);
      return response.data.tags;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const createGame = createAsyncThunk(
  'games/create',

  async ({ formData, navigate, onClear }, { rejectWithValue }) => {
    try {
      const response = await gamesApi.createGame(formData);
      toast.success('Successfully created game');
      onClear();

      navigate('/');
      return response.data.newGame;
    } catch (error) {
      toast.error(error.response.message);
      return rejectWithValue(error.response.statusText);
    }
  }
);

export const updateGame = createAsyncThunk(
  'games/update',
  async ({ formData, gameId, navigate, onClear }, { rejectWithValue }) => {
    try {
      const response = await gamesApi.updateGame(formData, gameId);
      toast.success('Successfully updated game');
      onClear();

      navigate('/');
      return response.data.game;
    } catch (error) {
      toast.error(error.response.message);
      return rejectWithValue(error.response.statusText);
    }
  }
);

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    //For Store Page
    clearAllGames: (state) => {
      state.allGames = [];
    },
    clearCurrentGenre: (state) => {
      state.currentGenre = null;
    },
    sortGames: (state, action) => {
      console.log(state.allGames);
      const key = action.payload;
      state.isAscending = true;
      state.allGames.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    resetPage: (state) => {
      state.page = 1;
    },
    //For Search Page
    setGameSearchQuery: (state, action) => {
      console.log(
        action.payload,
        'action.payload from setGameSearchQuery in slice'
      );
      state.gameSearchQuery = action.payload;
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
    incrementSearchPage: (state) => {
      state.searchPage += 1;
    },
    resetSearchPage: (state) => {
      state.searchPage = 1;
    },
    setCurrentGenre: (state, action) => {
      console.log(
        action.payload,
        'action.payload from setCurrentGenre in slice'
      );
      state.currentGenre = action.payload;
    },
    reverseGames: (state) => {
      state.allGames.reverse();
      state.isAscending = !state.isAscending;
    },
    reverseSearchedGames: (state) => {
      state.searchedGames.reverse();
      state.searchedGamesAscending = !state.searchedGamesAscending;
    },
    clearSearch: (state) => {
      state.searchedGames = [];
    },
    clearCurrentGame: (state) => {
      state.currentGame = null;
    },
    //For Publishing
    // -- GameTagsForPublishing
    addTagForPublishing: (state, action) => {
      const tagExists = state.gameTagsForPublishing.some(
        (tag) => tag.id === action.payload.tagId
      );

      if (!tagExists) {
        state.gameTagsForPublishing.push({
          id: action.payload.tagId,
          name: action.payload.tagName,
        });
      }
      console.log(state.gameTagsForPublishing);
    },
    addInitialTags: (state, action) => {
      state.gameTagsForPublishing = action.payload;
    },
    deleteDataTag: (state, action) => {
      state.gameTagsForPublishing = state.gameTagsForPublishing.filter(
        (tag) => tag.id !== action.payload.tagId
      );
    },
    // -- GameGenresForPublishing
    addGenreForPublishing: (state, action) => {
      if (state.genresForPublishing.length < 5) {
        const genreExists = state.genresForPublishing.some(
          (genre) => genre.id === action.payload.genreId
        );

        if (!genreExists) {
          state.genresForPublishing.push({
            id: action.payload.genreId,
            name: action.payload.genreName,
          });
        }
      } else {
        toast.error('You can only add up to 5 genres.');
      }
    },
    addInitialGenres: (state, action) => {
      state.genresForPublishing = action.payload;
    },
    deleteDataGenre: (state, action) => {
      state.genresForPublishing = state.genresForPublishing.filter(
        (genre) => genre.id !== action.payload.genreId
      );
    },
    // -- GamePlatformsForPublishing
    addPlatformForPublishing: (state, action) => {
      const platformExists = state.gamePlatformsForPublishing.some(
        (platform) => platform.id === action.payload.platformId
      );

      if (!platformExists) {
        state.gamePlatformsForPublishing.push({
          id: action.payload.platformId,
          name: action.payload.platformName,
        });
      }
    },
    addInitialPlatforms: (state, action) => {
      state.gamePlatformsForPublishing = action.payload;
    },
    deleteDataPlatform: (state, action) => {
      state.gamePlatformsForPublishing =
        state.gamePlatformsForPublishing.filter(
          (platform) => platform.id !== action.payload.platformId
        );
    },
    searchPlatforms: (state, action) => {
      const searchTerm = action.payload;
      state.filteredPlatforms = state.platforms.filter((platform) =>
        platform.name.toLowerCase().includes(searchTerm)
      );
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
        state.allGames = action.payload.games;
        console.log(action.payload, 'action.payload from getGames in slice');
        state.loading = false;
      })
      .addCase(getGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    //getMoreGames
    builder
      .addCase(getMoreGames.pending, (state) => {
        state.moreGamesLoading = true;
        state.error = null;
      })
      .addCase(getMoreGames.fulfilled, (state, action) => {
        if (action.payload.games.length === 0) {
          state.moreGamesLoading = false;
          toast.error('No more games found');
          return;
        }
        state.allGames = state.allGames.concat(action.payload.games);
        state.moreGamesLoading = false;
      })
      .addCase(getMoreGames.rejected, (state, action) => {
        state.moreGamesLoading = false;
        state.error = action.error.message;
      });

    //getRandomGames
    builder
      .addCase(getRandomGames.pending, (state) => {
        state.loadingRandomGames = true;
        state.error = null;
      })
      .addCase(getRandomGames.fulfilled, (state, action) => {
        state.randomGames = action.payload;
        state.loadingRandomGames = false;
      })
      .addCase(getRandomGames.rejected, (state, action) => {
        state.loadingRandomGames = false;
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
        state.allGames = action.payload.games;
        state.loading = false;
      })
      .addCase(getGamesByGenreId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    //getMoreGamesByGenreId
    builder
      .addCase(getMoreGamesByGenreId.pending, (state) => {
        state.moreGamesLoading = true;
        state.error = null;
      })
      .addCase(getMoreGamesByGenreId.fulfilled, (state, action) => {
        if (action.payload.games.length === 0) {
          toast.error('No more games found');
          state.moreGamesLoading = false;
          return;
        }
        state.allGames = state.allGames.concat(action.payload.games);
        state.moreGamesLoading = false;
      })
      .addCase(getMoreGamesByGenreId.rejected, (state, action) => {
        state.moreGamesLoading = false;
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
    //getMoreSearchGames
    builder
      .addCase(getMoreSearchGames.pending, (state) => {
        state.moreSearchedGamesLoading = true;
        state.error = null;
      })
      .addCase(getMoreSearchGames.fulfilled, (state, action) => {
        if (action.payload.games.length === 0) {
          toast.error('No more games found');
          state.moreSearchedGamesLoading = false;
          return;
        }
        state.searchedGames = state.searchedGames.concat(action.payload.games);
        state.moreSearchedGamesLoading = false;
      })
      .addCase(getMoreSearchGames.rejected, (state, action) => {
        state.moreSearchedGamesLoading = false;
        state.error = action.error.message;
      });
    //searchTags
    builder
      .addCase(searchTags.pending, (state) => {
        state.loadingTags = true;
        state.error = null;
      })
      .addCase(searchTags.fulfilled, (state, action) => {
        state.gameTags = action.payload;
        state.loadingTags = false;
      })
      .addCase(searchTags.rejected, (state, action) => {
        state.loadingTags = false;
        state.error = action.error.message;
      });
    //getAllPlatForms
    builder
      .addCase(getAllPlatforms.pending, (state) => {
        state.loadingPlatforms = true;
        state.error = null;
      })
      .addCase(getAllPlatforms.fulfilled, (state, action) => {
        state.platforms = action.payload;
        state.filteredPlatforms = action.payload;
        state.loadingPlatforms = false;
      })
      .addCase(getAllPlatforms.rejected, (state, action) => {
        state.loadingPlatforms = false;
        state.error = action.error.message;
      });
    // create game
    builder
      .addCase(createGame.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createGame.fulfilled, (state, action) => {
        state.loading = false;
        state.gamePlatformsForPublishing = [];
        state.gameTagsForPublishing = [];
        state.genresForPublishing = [];
      })
      .addCase(createGame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // update game
    builder
      .addCase(updateGame.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateGame.fulfilled, (state, action) => {
        state.loading = false;
        state.gamePlatformsForPublishing = [];
        state.gameTagsForPublishing = [];
        state.genresForPublishing = [];
      })
      .addCase(updateGame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

//reducers
export const {
  incrementPage,
  resetPage,
  setCurrentGenre,
  clearAllGames,
  clearCurrentGenre,
  sortGames,
  reverseGames,
  setGameSearchQuery,
  sortSearchedGames,
  reverseSearchedGames,
  clearSearch,
  incrementSearchPage,
  resetSearchPage,
  clearCurrentGame,
  addTagForPublishing,
  addInitialTags,
  deleteDataTag,
  addGenreForPublishing,
  addInitialGenres,
  deleteDataGenre,
  addPlatformForPublishing,
  addInitialPlatforms,
  deleteDataPlatform,
  searchPlatforms,
} = gamesSlice.actions;
export const gameReducer = gamesSlice.reducer;
