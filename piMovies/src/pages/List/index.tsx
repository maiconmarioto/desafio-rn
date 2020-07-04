import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {MovieCard, MovieName} from '../../components/MovieCard';

const List: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <MovieCard image="https://image.tmdb.org/t/p/w300_and_h450_bestv2/cYlzLYlhUXS0kW9T3ttAQ6fvZuV.jpg">
          <MovieName>Nome do Filme</MovieName>
        </MovieCard>
        <MovieCard image="https://media.fstatic.com/9Nj6GJcDtcgMG4FllePHuegogts=/fit-in/290x478/smart/media/movies/covers/2011/06/71fc1d0bb2bc1483e66941bb2f17d830.jpg">
          <MovieName>Nome do Filme</MovieName>
        </MovieCard>
        <MovieCard image="https://media.fstatic.com/yQz_oR8G5_y_OOCDHVesLVN3oyA=/fit-in/290x478/smart/media/movies/covers/2019/07/0636548.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg">
          <MovieName>Baurau</MovieName>
        </MovieCard>
        <MovieCard image="https://media.fstatic.com/tWzEK1v-V__5PEQdCeugAJv0bos=/fit-in/290x478/smart/media/movies/covers/2019/09/3348619.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg">
          <MovieName>Negocio do medo</MovieName>
        </MovieCard>
        <MovieCard image="https://image.tmdb.org/t/p/w600_and_h900_bestv2/5uqxMHM7YLKk6yni4bOE0D6DVz8.jpg">
          <MovieName>Como Treinar Seu Dragão</MovieName>
        </MovieCard>
      </ScrollView>
    </SafeAreaView>
  );
};

export default List;
