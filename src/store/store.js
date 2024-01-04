// store.js
import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from '../slices/quoteSlices';

const store = configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});

export default store;
