import React from 'react';
import {FlatList} from 'react-native';

import {Card, Container} from './styles';
import BackgroundImage from '../../components/BackgroundImage';

const image1 =
  'https://image.tmdb.org/t/p/w300_and_h450_bestv2/cYlzLYlhUXS0kW9T3ttAQ6fvZuV.jpg';
const image2 =
  'https://media.fstatic.com/9Nj6GJcDtcgMG4FllePHuegogts=/fit-in/290x478/smart/media/movies/covers/2011/06/71fc1d0bb2bc1483e66941bb2f17d830.jpg';
const image3 =
  'https://media.fstatic.com/yQz_oR8G5_y_OOCDHVesLVN3oyA=/fit-in/290x478/smart/media/movies/covers/2019/07/0636548.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg';
const image4 =
  'https://media.fstatic.com/tWzEK1v-V__5PEQdCeugAJv0bos=/fit-in/290x478/smart/media/movies/covers/2019/09/3348619.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg';
const image5 =
  'https://image.tmdb.org/t/p/w600_and_h900_bestv2/5uqxMHM7YLKk6yni4bOE0D6DVz8.jpg';

const items = [
  {id: 1, src: image1},
  {id: 2, src: image2},
  {id: 3, src: image3},
  {id: 4, src: image4},
  {id: 5, src: image5},
];

const List: React.FC = () => {
  return (
    <Container>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <Card>
            <BackgroundImage src={item.src} />
          </Card>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
};

export default List;
