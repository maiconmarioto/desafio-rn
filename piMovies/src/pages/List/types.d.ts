import {Movie} from 'src/types/Movie';

export type ViewProps = {
  movies: Movie[];
  error: string;
  nextPage: () => void;
  showDetailPage: (movie: Movie) => void;
};
