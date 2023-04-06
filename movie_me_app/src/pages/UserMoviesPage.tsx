import React, { FC } from "react";
import Header from "../components/Header/Header";
import UserMovies from "../components/UserMovies/UserMovies";

const UserMoviesPage: FC = () => {
  return (
    <>
      <Header />
      <UserMovies />
    </>
  );
};

export default UserMoviesPage;
