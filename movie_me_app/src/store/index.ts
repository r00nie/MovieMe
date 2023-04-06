import { configureStore } from "@reduxjs/toolkit";
import userMoviesReducer from "./slices/userMoviesSlice";
import topMoviesReducer from "./slices/topMoviesSlice";

const store = configureStore({
  reducer: {
    userMovies: userMoviesReducer,
    topMovies: topMoviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
