export type Id = string | number;

export type Movie = {
  id: Id;
  title: string;
  director: string;
  releaseDate: string;
  description: string;
  photoUrl: string;
  rating: number;
};
