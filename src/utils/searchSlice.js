import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showGptSearch: false,
    showGptMovies: undefined,
    movieNames: undefined,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      state.showGptMovies = action.payload;
    },
    addMovieName: (state, action) => {
      state.movieNames = action.payload;
    },
  },
});

export const { toggleGptSearch, addGptMovies, addMovieName } =
  searchSlice.actions;
export default searchSlice.reducer;
