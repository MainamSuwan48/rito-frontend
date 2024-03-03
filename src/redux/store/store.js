import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../slice/auth-slice';

const store = configureStore({
  reducer: {
    // Add reducers here
    auth: authReducer,
  },
});

export default store;
