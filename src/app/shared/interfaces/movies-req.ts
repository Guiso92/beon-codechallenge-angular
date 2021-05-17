import { Movie } from './movie';
import { Movies } from './movies';
export interface MoviesReq {
  meta: object;
  data: {
    movies: Array<Movies>;
  };
  status: string;
  status_message: string;
}

export interface MovieReq {
  meta: object;
  data: {
    movie: Movie;
  };
  status: string;
  status_message: string;
}
