import React, {createElement, useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';

import View from './view';
import {DetailScreenRouteProp} from './types';
import {api} from '../../services/api';
import {MovieDetail} from '../../types/Movie';

const ListView: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState<MovieDetail>(
    {} as MovieDetail,
  );
  const route = useRoute<DetailScreenRouteProp>();
  const movie = route.params;

  useEffect(() => {
    async function getDetails() {
      try {
        const request = await api.get(`detail/${movie._id}`);
        setMovieDetail(request.data);
      } catch (e) {
        console.log(e);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }

    getDetails();
  }, [movie._id]);

  const viewProps = {
    route,
    movie,
    loading,
    movieDetail,
  };

  return createElement(View, viewProps);
};

export default ListView;
