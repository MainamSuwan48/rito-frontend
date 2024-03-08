import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as wishlistsApi from '../../api/wishlists';
import { toast } from 'react-toastify';

const initialState = {
  wishlist: [],
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
      console.log(
        response.data.wishlists,
        'response from get my wishlist in slice'
      );
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
      console.log(response.data, 'response from add game to wishlist in slice');
      return response.data;
    } catch (error) {
      toast.error('Failed to add game to wishlist');
      return Promise.reject(error);
    }
  }
);

export const removeGameFromWishlist = createAsyncThunk(
  'wishlists/removeGameFromWishlist',
  async (itemId) => {
    try {
      const response = await wishlistsApi.removeGameFromWishlist(itemId);
      toast.success('Game removed from wishlist');
      return response.data;
    } catch (error) {
      toast.error('Failed to remove game from wishlist');
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
        if (action.payload.message) {
          toast.success('Game removed from wishlist');
          // this function will extract wishlist id from the response message
          console.log(action.payload.message);
          const id = parseInt(action.payload.message.split(' ')[2]);
          console.log(id);
          state.wishlist = state.wishlist.filter((item) => item.id !== id);
        } else if (action.payload.wishlist) {
          // The item was added to the wishlist
          toast.success('Game added to wishlist');
          console.log(action.payload.wishlist);
          state.wishlist.push(action.payload.wishlist);
        }
        state.loading = false;
      }),
      builder.addCase(addGameToWishlist.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
    // Remove Game From Wishlist
    builder.addCase(removeGameFromWishlist.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(removeGameFromWishlist.fulfilled, (state, action) => {
        state.loading = false;
        const id = parseInt(action.payload.message.split(' ')[2]);
        console.log(id, 'id of game to remove from wishlist');
        state.wishlist = state.wishlist.filter((item) => item.id !== id);
        console.log(state.wishlist, 'wishlist after removing game');
      }),
      builder.addCase(removeGameFromWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const wishlistsReducer = wishlistsSlice.reducer;
