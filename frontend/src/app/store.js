import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/users/userSlice.js';

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
