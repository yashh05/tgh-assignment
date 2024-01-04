// quotesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarkedQuote:[]
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    loadBookmarkedQuotes:(state,action)=>{
       state.bookmarkedQuote=action.payload       
    },
    bookmarkQuote: (state, action) => {
      state.bookmarkedQuote.push(action.payload);
      const idArray= state.bookmarkedQuote.map((quote)=> quote._id)

      localStorage.setItem(
        "bookmarked-quotes",
        JSON.stringify(idArray)
      );
    },
    unbookmarkQuote: (state, action) => {
      state.bookmarkedQuote = state.bookmarkedQuote.filter((quote) => quote._id !== action.payload._id);
      const idArray= state.bookmarkedQuote.map((quote)=> quote._id)

      localStorage.setItem(
        "bookmarked-quotes",
        JSON.stringify(idArray)
      );
    },
  },
});

export const {loadBookmarkedQuotes, bookmarkQuote, unbookmarkQuote } = quotesSlice.actions;
export default quotesSlice.reducer;
