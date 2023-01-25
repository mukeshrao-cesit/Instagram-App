import { configureStore } from '@reduxjs/toolkit';
import repoSlice from './slice';

export const store = configureStore({
  reducer: {
    post: repoSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
