import React, { FC } from "react";
import Header from "../components/Header/Header";
import TopMovies from "../components/TopMovies/TopMovies";

const TopMoviesPage: FC = () => {
  return (
    <>
      <Header />
      <TopMovies />
    </>
  );
};

export default TopMoviesPage;
