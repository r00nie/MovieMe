import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopMovies } from "../../store/slices/topMoviesSlice";
import { RootState, AppDispatch } from "../../store";
import styled from "styled-components";

const MovieCardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: auto 10px;
`;

const MovieCard = styled.div`
  flex-basis: auto;
  max-width: 150px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-in-out;
  min-height: fit-content;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const MovieCardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const MovieCardImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

const MovieCardCaption = styled.p`
  max-width: 80%;
  font-size: 0.9rem;
`;

const TopMovies: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const topMovies = useSelector((state: RootState) => state.topMovies);

  useEffect(() => {
    dispatch(fetchTopMovies());
  }, [dispatch]);

  if (!topMovies.length) {
    return <div>Loading...</div>;
  }

  return (
    <MovieCardGrid>
      {topMovies.map((movie: any) => (
        <MovieCard key={movie.id}>
          <MovieCardTitle>{movie.titleText.text}</MovieCardTitle>
          <MovieCardImage
            src={movie.primaryImage.url}
            alt={movie.titleText.text}
          />
          <MovieCardCaption>
            {movie.primaryImage.caption.plainText.slice(0, 100)}...
          </MovieCardCaption>
        </MovieCard>
      ))}
    </MovieCardGrid>
  );
};

export default TopMovies;
