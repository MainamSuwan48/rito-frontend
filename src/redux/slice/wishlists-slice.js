import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as wishlistsApi from '../../api/wishlists';
import { toast } from 'react-toastify';

const initialState = {
  wishlist: null,
  loading: false,
  allWishlists: [],
  loadingAllWishlists: false,
  error: null,
};

export const getMyWishlist = createAsyncThunk(
  'wishlists/getMyWishlist',
  async () => {
    try {
      const response = await wishlistsApi.getMyWishlist();
      console.log(response.data.wishlists, 'response from get my wishlist in slice');
      return response.data.wishlists;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const addGameToWishlist = createAsyncThunk(
  'wishlists/addGameToWishlist',
  async (gameId) => {
    try {
      const response = await wishlistsApi.addGameToWishlist({ gameId });
      toast.success('Game added to wishlist');
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const wishlistsSlice = createSlice({
  name: 'wishlists',
  initialState,
  extraReducers: (builder) => {
    // Get My Wishlist
    builder.addCase(getMyWishlist.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getMyWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload;
        state.loading = false;
      }),
      builder.addCase(getMyWishlist.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
    // Add Game To Wishlist
    builder.addCase(addGameToWishlist.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(addGameToWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload;
        state.loading = false;
      }),
      builder.addCase(addGameToWishlist.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const wishlistsReducer = wishlistsSlice.reducer;
