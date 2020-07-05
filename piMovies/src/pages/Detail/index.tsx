import React, {createElement, useCallback, useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';

import View from './view';
import {DetailScreenRouteProp, ViewProps} from './types';
import {api} from '../../services/api';
import {MovieDetail} from '../../types/Movie';

const ListView: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [movieDetail, setMovieDetail] = useState<MovieDetail>(
    {} as MovieDetail,
  );
  const route = useRoute<DetailScreenRouteProp>();
  const movie = route.params;

  const request = useCallback(async () => {
    if (!movie._id) {
      return;
    }

    try {
      const response = await api.get(`detail/${movie._id}`);
      setMovieDetail(response.data);
    } catch (e) {
      console.log(e);
      setError('Tivemos um problema. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }, [setMovieDetail, setLoading, movie._id]);

  useEffect(() => {
    async function getDetails() {
      await request();
    }

    getDetails();
  }, [request]);

  const handleConfirm = useCallback(async () => {
    await request();
    setError('');
  }, [setError, request]);

  const viewProps: ViewProps = {
    movie,
    error,
    loading,
    handleConfirm,
    movieDetail,
  };

  return createElement(View, viewProps);
};

export default ListView;
