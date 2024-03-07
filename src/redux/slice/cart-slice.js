import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as cartApi from '@/api/cart';
import { toast } from 'react-toastify';

//initial state
const initialState = {
  carts: [],
  loading: false,
  error: null,
};

export const getMyCart = createAsyncThunk('carts/me', async () => {
  try {
    const response = await cartApi.getMyCart();
    return response.data.carts;
  } catch (error) {
    return Promise.reject(error);
  }
});

// payload = {gameId : 'game id'}
export const addItem = createAsyncThunk('carts/create', async (payload) => {
  try {
    const response = await cartApi.addItem(payload);
    toast.success('Game added to cart');
    return response.data.cart;
  } catch (error) {
    return Promise.reject(error);
  }
});

// payload = cart id (string)
export const deleteItem = createAsyncThunk('carts/delete', async (payload) => {
  try {
    await cartApi.deleteItem(payload);
    toast.success('Game removed from cart');
    return payload;
  } catch (error) {
    return Promise.reject(error);
  }
});

// payload = user id (string)
export const deleteMyCart = createAsyncThunk(
  'carts/delete/me',
  async (payload) => {
    try {
      await cartApi.deleteMyCart(payload);
      toast.success('Cart is cleared');
      return payload;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

// slice
const cartSlice = createSlice({
  name: 'carts',
  initialState,
  extraReducers: (builder) => {
    // getMyCart
    builder
      .addCase(getMyCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMyCart.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = action.payload;
      })
      .addCase(getMyCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // addItem
    builder
      .addCase(addItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.loading = false;
        state.carts.push(action.payload);
      })
      .addCase(addItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // deleteItem
    builder
      .addCase(deleteItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = state.carts.filter((item) => item.id != action.payload);
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // deleteMyCart
    builder
      .addCase(deleteMyCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMyCart.fulfilled, (state) => {
        state.loading = false;
        state.carts = [];
      })
      .addCase(deleteMyCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// reducer
export const cartReducer = cartSlice.reducer;
