import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
`;

export const Close = styled(RectButton)`
  position: absolute;

  top: 4.5px;
  left: 15px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #000;
  text-align: center;
  font-family: 'ProximaNova-Bold';
  margin: 3px 0 25px;
`;

export const ListItem = styled.View`
  flex-direction: row;

  margin-bottom: 16px;
  padding: 0 18px;
`;

export const TextListItem = styled.Text`
  margin-left: 11px;
  font-size: 18px;
  font-family: 'ProximaNova-Regular';
`;

export const ButtonConfirm = styled(Button)`
  margin-top: 100px;
`;
