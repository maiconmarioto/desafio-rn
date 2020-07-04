import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo, TouchableOpacity} from 'react-native';

import {ViewProps} from './types';
import {Movie} from 'src/types/Movie';
import {Card, Container, Title} from './styles';
import BackgroundImage from '../../components/BackgroundImage';

const ListView: React.FC<ViewProps> = ({movies, nextPage}) => {
  const renderItem = useCallback(({item}: ListRenderItemInfo<Movie>) => {
    if (!item.url) {
      return null;
    }
    return (
      <Card>
        <TouchableOpacity>
          <BackgroundImage src={item.url} opacity={0.4}>
            <Title>{item.name}</Title>
          </BackgroundImage>
        </TouchableOpacity>
      </Card>
    );
  }, []);

  return (
    <Container>
      <FlatList<Movie>
        data={movies}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={nextPage}
        onEndReachedThreshold={1}
      />
    </Container>
  );
};

export default ListView;
