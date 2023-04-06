import { configureStore } from "@reduxjs/toolkit";
import userMoviesReducer from "./slices/userMoviesSlice";
import topMoviesReducer from "./slices/topMoviesSlice";

const store = configureStore({
  reducer: {
    userMovies: userMoviesReducer,
    topMovies: topMoviesReducer,
  },
});

export default store;
