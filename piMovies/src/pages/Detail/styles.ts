import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Card = styled.View`
  flex: 1;
`;

export const ActivityIndicator = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ScrollView = styled.ScrollView`
  width: ${Dimensions.get('screen').width}px;
  height: ${Dimensions.get('screen').height / 2 + 100}px;
  flex-direction: column;
`;

export const Container = styled.View`
  flex: 1;
  width: ${Dimensions.get('screen').width}px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.ImageBackground`
  width: ${Dimensions.get('screen').width}px;
  height: ${Dimensions.get('screen').height / 2 + 100}px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
`;

export const TitleContainer = styled.View`
  width: ${Dimensions.get('screen').width}px;
  margin-top: -50px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #fff6ff;
  border-radius: 20px;
`;

export const Title = styled.Text`
  margin-top: 15px;
  font-size: 27px;
  color: #fff6ff;
  text-align: center;
  min-height: 30px;
  letter-spacing: 1px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #fff6ff;
  text-align: center;
  margin-top: 15px;
  letter-spacing: 1px;
  margin-bottom: 40px;
`;

export const DescriptionContainer = styled.View`
  padding-top: 5px;
  padding-right: 30px;
  padding-left: 30px;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
`;
