import { configureStore } from '@reduxjs/toolkit';
import media from './media';

const store = configureStore({
  reducer: { media },
  devTools: true
});

export default store;
