import React, { FC, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { Id, Movie } from "../../types/types";
import { deleteMovie } from "../../store/slices/userMoviesSlice";
import MovieCard from "./MovieCard/MovieCard";
import MovieDialog from "./MovieDialog/MovieDialog";

const MoviesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 50px;
  max-width: 90%;
`;

const AddButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #37123c;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 40px;
  font-weight: 400;
  padding: 8px 16px;
  margin-right: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: #71677c;
    transform: scale(1.1);
  }
`;

const UserMovies: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const userMovies = useSelector((state: RootState) => state.userMovies);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = (id: Id) => {
    dispatch(deleteMovie(id));
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <MoviesContainer>
        {userMovies.map((movie: Movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDelete={() => handleDelete(movie.id)}
          />
        ))}
      </MoviesContainer>
      <AddButton onClick={handleDialogOpen}>+</AddButton>
      <MovieDialog isOpen={isDialogOpen} onClose={handleDialogClose} />
    </>
  );
};

export default UserMovies;
