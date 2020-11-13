import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 55px;
  background: #009fe3;
  border-radius: 5px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  /* font-family: 'RobotoSlab-Medium'; */
  color: #fff;
  font-size: 18px;
`;
