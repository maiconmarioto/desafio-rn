import React from 'react';
import {ActivityIndicator} from 'react-native';

import {
  Card,
  Container,
  Description,
  DescriptionContainer,
  Image,
  ScrollView,
  Title,
} from './styles';

import {ViewProps} from './types';
import Alert from '../../components/Alert';

const ListView: React.FC<ViewProps> = (props) => {
  const {error, handleConfirm, loading, movie, movieDetail} = props;

  return (
    <>
      <Alert
        confirmText="Tentar novamente"
        showCancel={false}
        onConfirm={handleConfirm}
        showAlert={!!error}
        title="Oh Não"
        message={error}
      />
      <ScrollView>
        <Container>
          <Image source={{uri: movie.url}} resizeMode="stretch" />
          {loading && <ActivityIndicator size="large" color="#fff" />}
          {!loading && (
            <Card>
              <Title>{movieDetail.name}</Title>
              <DescriptionContainer>
                <Description>{movieDetail.description}</Description>
              </DescriptionContainer>
            </Card>
          )}
        </Container>
      </ScrollView>
    </>
  );
};

export default ListView;
