import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export const ImageBG = styled.ImageBackground`
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #000;
`;

export const Container = styled.View`
  flex: 1;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.5);
  flex-grow: 1;
  flex-basis: 100%;
  width: ${width / 2 - 2}px;
`;
