import React, { FC, useState } from "react";
import styled from "styled-components";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import MovieDialog from "../MovieDialog/MovieDialog";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    director: string;
    releaseDate: string;
    rating: number;
    photoUrl: string;
    description: string;
  };
  onDelete: () => void;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

const Director = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const ReleaseDate = styled.p`
  margin-bottom: 8px;
`;

const Rating = styled.p`
  margin-bottom: 16px;
`;

const Description = styled.p`
  text-align: justify;
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const Button = styled.button`
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px 16px;
  margin-right: 8px;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    background-color: #005fa3;
  }
`;

const MovieCard: FC<MovieCardProps> = ({ movie, onDelete }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <Card>
      <Image src={movie.photoUrl} alt={movie.title} />
      <Title>{movie.title}</Title>
      <Director>Directed by {movie.director}</Director>
      <ReleaseDate>Released on {movie.releaseDate}</ReleaseDate>
      <Rating>IMDb Rating: {movie.rating}</Rating>
      <Description>{movie.description}</Description>
      <ButtonContainer>
        <Button onClick={handleDialogOpen}>
          <span role="img" aria-label="edit">
            ✏️
          </span>{" "}
          Edit
        </Button>
        <Button onClick={onDelete}>
          <span role="img" aria-label="delete">
            🗑️
          </span>{" "}
          Delete
        </Button>
      </ButtonContainer>
      <MovieDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        movie={movie}
        isEdit
      />
    </Card>
  );
};

export default MovieCard;
