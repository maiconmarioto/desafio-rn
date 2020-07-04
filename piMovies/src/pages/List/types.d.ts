import {Movie} from 'src/types/Movie';

export type ViewProps = {
  movies: Movie[];
  page: number;
  error: string;
  nextPage: () => void;
  request: (pg: number) => Promise<void>;
};
