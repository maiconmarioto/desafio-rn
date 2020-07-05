import React, {createElement, useState, useCallback, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import View from './view';
import {ViewProps} from './types';
import {api} from '../../services/api';
import {Movie} from '../../types/Movie';

const List: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const showDetailPage = useCallback(
    (movie: Movie) => {
      navigation.navigate('Detail', movie);
    },
    [navigation],
  );

  useEffect(() => {
    async function loadInitialData() {
      try {
        const response = await api.get('list?page=0&size=10');
        setMovies(response.data);
      } catch (e) {
        setError('Tivemos um problema. Tente novamente.');
        setMovies([{} as Movie]);
      }
    }
    loadInitialData();
  }, []);

  const request = useCallback(
    async (pg: number) => {
      try {
        const response = await api.get(`list?page=${pg}&size=10`);
        setMovies([...movies, ...response.data]);
      } catch (e) {
        console.log(e);
        setError('Tivemos um problema. Tente novamente.');
      }
    },
    [setMovies, movies],
  );

  const nextPage = useCallback(async () => {
    await setPage(page + 1);
    await request(page);
  }, [page, setPage, request]);

  const handleConfirm = useCallback(async () => {
    setError('');
    await request(page);
  }, [setError, request, page]);

  const viewProps: ViewProps = {
    movies,
    error,
    nextPage,
    handleConfirm,
    showDetailPage,
  };

  return createElement(View, viewProps);
};

export default List;
