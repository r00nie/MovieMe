import React, { FC, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addMovie, editMovie } from "../../../store/slices/userMoviesSlice";

const DialogContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 50%;
  max-width: 600px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
`;

const Input = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const TextArea = styled.textarea`
  font-size: 1.2rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

interface MovieDialogProps {
  isOpen: boolean;
  onClose: () => void;
  isEdit?: boolean;
  movie?: {
    id: number;
    title: string;
    director: string;
    releaseDate: string;
    description: string;
    photoUrl: string;
    rating: number;
  };
}

const MovieDialog: FC<MovieDialogProps> = ({
  isOpen,
  onClose,
  isEdit = false,
  movie,
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: movie ? movie.title : "",
    director: movie ? movie.director : "",
    releaseDate: movie ? movie.releaseDate : "",
    description: movie ? movie.description : "",
    photoUrl: movie ? movie.photoUrl : "",
    rating: movie ? movie.rating : "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEdit && movie) {
      dispatch(editMovie({ id: movie.id, ...formData }));
    } else {
      dispatch(addMovie(formData));
    }
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <DialogContainer>
      <DialogContent>
        <h2>{movie ? "Edit" : "Add New"} Movie</h2>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <Label htmlFor="director">Director</Label>
          <Input
            type="text"
            id="director"
            name="director"
            value={formData.director}
            onChange={handleChange}
            required
          />
          <Label htmlFor="releaseDate">Release Date</Label>
          <Input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            required
          />
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
          />

          <Label htmlFor="photoUrl">Photo URL</Label>
          <Input
            type="url"
            id="photoUrl"
            name="photoUrl"
            value={formData.photoUrl}
            onChange={handleChange}
            required
          />

          <Label htmlFor="rating">Rating (out of 10)</Label>
          <Input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            min={0}
            max={10}
            step={0.1}
          />

          <ButtonContainer>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </ButtonContainer>
        </Form>
      </DialogContent>
    </DialogContainer>
  );
};

export default MovieDialog;
