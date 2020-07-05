import {RouteProp} from '@react-navigation/native';

import {Movie, MovieDetail} from 'src/types/Movie';

export type RootStackParamList = {
  Detail: Movie;
};

export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

export type ViewProps = {
  movie: Movie;
  error: string;
  handleConfirm: () => void;
  loading: boolean;
  movieDetail: MovieDetail;
};
