import React, { FC } from "react";
import styled from "styled-components";

const MovieCardWrapper = styled.div`
  flex-basis: auto;
  width: fit-content;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  min-height: 90px;
`;

const MovieCardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 0.8rem;
  border-radius: 10px;
`;

const MovieCardCaption = styled.p`
  max-width: 80%;
  font-size: 0.9rem;
`;

type MovieCardProps = {
  movie: any;
};

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <MovieCardWrapper>
      <MovieCardTitle>{movie.titleText.text}</MovieCardTitle>
      <MovieCardImage src={movie.primaryImage.url} alt={movie.titleText.text} />
      <MovieCardCaption>
        {movie.primaryImage.caption.plainText.slice(0, 100)}...
      </MovieCardCaption>
    </MovieCardWrapper>
  );
};

export default MovieCard;
