// quotesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarkedQuotes: [],
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    loadBookmarkedQuotes: (state, action) => {
        console.log(action.payload);
      state.bookmarkedQuotes = action.payload;
    },
    bookmarkQuote: (state, action) => {
      state.bookmarkedQuotes.push(action.payload);
      localStorage.setItem(
        "bookmarked-quotes",
        JSON.stringify(state.bookmarkedQuotes)
      );
      console.log(state.bookmarkedQuotes);
    },
    unbookmarkQuote: (state, action) => {
      state.bookmarkedQuotes = state.bookmarkedQuotes.filter(
        (id) => id !== action.payload
      );
      localStorage.setItem(
        "bookmarked-quotes",
        JSON.stringify(state.bookmarkedQuotes)
      );
      console.log(state.bookmarkedQuotes);
    },
  },
});

export const {loadBookmarkedQuotes, bookmarkQuote, unbookmarkQuote } = quotesSlice.actions;
export default quotesSlice.reducer;
