import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../slice/auth-slice';
import { gameReducer } from '../slice/games-slice';
import { userReducer } from '../slice/user-slice';
import { cartReducer } from '../slice/cart-slice';
import { wishlistsReducer } from '../slice/wishlists-slice';

const store = configureStore({
  reducer: {
    // Add reducers here
    auth: authReducer,
    games: gameReducer,
    users: userReducer,
    carts: cartReducer,
    wishlists: wishlistsReducer,
  },
});

export default store;
