import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userMoviesReducer from "./slices/userMoviesSlice";
import topMoviesReducer from "./slices/topMoviesSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUserMoviesReducer = persistReducer(
  persistConfig,
  userMoviesReducer
);

const persistedTopMoviesReducer = persistReducer(
  persistConfig,
  topMoviesReducer
);

const rootReducer = combineReducers({
  userMovies: userMoviesReducer,
  topMovies: topMoviesReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
