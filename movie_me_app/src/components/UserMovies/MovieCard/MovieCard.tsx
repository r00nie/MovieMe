import React, { FC, useState } from "react";
import styled from "styled-components";
import { Movie } from "../../../types/types";
import MovieDialog from "../MovieDialog/MovieDialog";

interface MovieCardProps {
  movie: Movie;
  onDelete: () => void;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
  max-width: 250px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
  padding: 20px;
  position: relative;
  min-height: fit-content;
  margin: 0.8rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 0.8rem;
  border-radius: 10px;
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
  margin-top: auto;
`;

const Button = styled.button`
  background-color: #71677c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  padding: 8px 16px;
  margin-right: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in;

  &:hover {
    transform: scale(1.05);
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
      <Rating>Rating: {movie.rating}</Rating>
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
