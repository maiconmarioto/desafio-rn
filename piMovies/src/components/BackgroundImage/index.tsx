import React from 'react';

import {ImageBG} from './style';

interface Props {
  src: string;
  opacity?: number;
}

const BackgroundImage: React.FC<Props> = ({src, opacity = 0.5, children}) => {
  return (
    <ImageBG source={{uri: src}} resizeMode="cover" imageStyle={{opacity}}>
      {children}
    </ImageBG>
  );
};

export default BackgroundImage;
