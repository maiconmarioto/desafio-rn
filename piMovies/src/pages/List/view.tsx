import React, {useCallback} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';

import Alert from '../../components/Alert';
import {ViewProps} from './types';
import {Movie} from 'src/types/Movie';
import {Card, Container, Text, Title} from './styles';
import BackgroundImage from '../../components/BackgroundImage';

const ListView: React.FC<ViewProps> = ({
  error,
  movies,
  nextPage,
  handleConfirm,
  showDetailPage,
}) => {
  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Movie>) => {
      if (!item.url) {
        return null;
      }
      return (
        <Card>
          <TouchableOpacity onPress={() => showDetailPage(item)}>
            <BackgroundImage src={item.url} opacity={0.4}>
              <Title>{item.name}</Title>
            </BackgroundImage>
          </TouchableOpacity>
        </Card>
      );
    },
    [showDetailPage],
  );

  if (movies.length === 0) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#fff" />
      </Container>
    );
  }

  return (
    <>
      <Container>
        <FlatList<Movie>
          data={movies}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={nextPage}
          onEndReachedThreshold={1}
          ListHeaderComponent={<Text>Encontre os melhores Filmes</Text>}
        />
      </Container>
      <Alert
        confirmText=""
        showCancel={false}
        onConfirm={handleConfirm}
        showAlert={!!error}
        title="Oh Não"
        message={error}
      />
    </>
  );
};

export default ListView;
