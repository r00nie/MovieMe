import React, { FC } from "react";
import HomePage from "./pages/HomePage";
import TopMoviesPage from "./pages/TopMoviesPage";
import UserMoviesPage from "./pages/UserMoviesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-movies" element={<TopMoviesPage />} />
        <Route path="/user-movies" element={<UserMoviesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
