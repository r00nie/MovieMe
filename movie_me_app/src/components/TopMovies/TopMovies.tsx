import React, { useEffect, useMemo, FC } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopMovies } from "../../store/slices/topMoviesSlice";
import { RootState, AppDispatch } from "../../store";
import MovieCard from "./MovieCard/MovieCard";

const MovieCardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: auto 10px;
`;

const TopMovies: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const topMovies = useSelector((state: RootState) => state.topMovies);

  useEffect(() => {
    dispatch(fetchTopMovies());
  }, [dispatch]);

  const memoizedMovies = useMemo(() => topMovies, [topMovies]);

  if (!memoizedMovies.length) {
    return <div>Loading...</div>;
  }

  return (
    <MovieCardGrid>
      {memoizedMovies.map((movie: any) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MovieCardGrid>
  );
};

export default TopMovies;
