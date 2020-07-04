import React, {useEffect, useRef} from 'react';
import {Animated, TouchableWithoutFeedback} from 'react-native';
import {Container, ChildrenContainer} from './styles';
import BackgroundImage from './BackgroundImage';

interface CardProps {
  image: string;
}

const MovieCard: React.FC<CardProps> = ({image, children}) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);

  return (
    <TouchableWithoutFeedback onPress={() => console.log('oie')}>
      <Animated.View style={{opacity: fadeAnimation}}>
        <Container>
          <BackgroundImage source={{uri: image}} borderRadius={20}>
            <ChildrenContainer>{children}</ChildrenContainer>
          </BackgroundImage>
        </Container>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
