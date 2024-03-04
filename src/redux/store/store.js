import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../slice/auth-slice';
import { gameReducer } from '../slice/games-slice';

const store = configureStore({
  reducer: {
    // Add reducers here
    auth: authReducer,
    games: gameReducer,
  },
});

export default store;
