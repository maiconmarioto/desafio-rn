import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {ViewProps} from './types';
import {
  Card,
  Container,
  Description,
  DescriptionContainer,
  Image,
  ScrollView,
  Title,
} from './styles';

const ListView: React.FC<ViewProps> = (props) => {
  const {loading, movie, movieDetail} = props;

  return (
    <>
      <ScrollView>
        <Container>
          {loading && <ActivityIndicator size="large" color="#fff" />}
          {!loading && (
            <Card>
              <Image source={{uri: movie.url}} resizeMode="stretch" />
              <View>
                <Title>{movie.name}</Title>
                <DescriptionContainer>
                  <Description>{movieDetail.description}</Description>
                </DescriptionContainer>
              </View>
            </Card>
          )}
        </Container>
      </ScrollView>
    </>
  );
};

export default ListView;
