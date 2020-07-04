import React from 'react';
import {ImageBackgroundProperties} from 'react-native';

import {Container, ImageBG} from './style';

const BackgroundImage: React.FC<ImageBackgroundProperties> = ({
  source,
  borderRadius,
  children,
}) => {
  return (
    <ImageBG imageStyle={{borderRadius}} source={source} resizeMode="cover">
      <Container>{children}</Container>
    </ImageBG>
  );
};

export default BackgroundImage;
