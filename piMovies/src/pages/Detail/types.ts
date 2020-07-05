import {RouteProp} from '@react-navigation/native';

import {Movie, MovieDetail} from 'src/types/Movie';

export type RootStackParamList = {
  Detail: Movie;
};

export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

export type ViewProps = {
  route: RouteProp<RootStackParamList, 'Detail'>;
  movie: Movie;
  loading: boolean;
  movieDetail: MovieDetail;
};
