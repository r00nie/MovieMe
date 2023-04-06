import React, { FC, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { deleteMovie } from "../../store/slices/userMoviesSlice";
import MovieCard from "./MovieCard/MovieCard";
import MovieDialog from "./MovieDialog/MovieDialog";

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 85%;
`;

const UserMovies: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const userMovies = useSelector((state: RootState) => state.userMovies);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = (movie: any) => {
    dispatch(deleteMovie(movie.id));
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
        {userMovies.map((movie: any) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDelete={() => handleDelete(movie)}
          />
        ))}
      </MoviesContainer>
      <button onClick={handleDialogOpen}>Add Movie</button>
      <MovieDialog isOpen={isDialogOpen} onClose={handleDialogClose} />
    </>
  );
};

export default UserMovies;
