import { movies } from "./../data/movies";
import { createSlice } from "@reduxjs/toolkit";

const userMoviesSlice = createSlice({
  name: "userMovies",
  initialState: movies,
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    deleteMovie: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload);
    },
    editMovie: (state, action) => {
      const movieIndex = state.findIndex(
        (movie) => movie.id === action.payload.id
      );
      if (movieIndex !== -1) {
        state[movieIndex] = action.payload;
      }
    },
  },
});

export const { addMovie, deleteMovie, editMovie } = userMoviesSlice.actions;
export default userMoviesSlice.reducer;
