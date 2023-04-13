import { configureStore } from '@reduxjs/toolkit';
import { userFilter, userData, userModal } from './userSlice';

export const store = configureStore({
  reducer: {
    filter: userFilter.reducer,
    data: userData.reducer,
    modal: userModal.reducer,
  },
});
