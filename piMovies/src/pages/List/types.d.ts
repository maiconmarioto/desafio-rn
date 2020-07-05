import {Movie} from 'src/types/Movie';

export type ViewProps = {
  movies: Movie[];
  error: string;
  nextPage: () => void;
  handleConfirm: () => void;
  showDetailPage: (movie: Movie) => void;
};
