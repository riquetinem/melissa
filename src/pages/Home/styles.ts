import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

export const Header = styled.View`
  background-color: #009fe3;
  flex-direction: column;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  padding: 15px 15px 0;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Welcome = styled.View`
  flex-direction: column;
`;

export const Hello = styled.Text`
  color: #fff;
  font-size: 13px;
  font-family: 'ProximaNova-Regular';
`;

export const Level = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: 'ProximaNova-Bold';
`;

export const Cash = styled.View`
  margin: 35px 0px 20px;
`;

export const TotalCash = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextTotalCash = styled.Text`
  color: #fff;
  font-size: 24px;
  font-family: 'ProximaNova-Regular';
`;

export const CashToReceive = styled.Text`
  color: #8ce7ff;
  font-family: 'ProximaNova-Regular';
  font-size: 14px;
  margin-top: 10px;
`;

export const Line = styled.View`
  border: 1px solid #1db5f6;
  margin-bottom: 20px;
`;

export const Message = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
`;

export const TextMessage = styled.Text`
  color: #fff;
  font-family: 'ProximaNova-Regular';
  font-size: 14px;
`;

export const CDI = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 65px;
`;

export const TextCDI = styled.Text`
  color: #fff;
  padding: 4px 5px;
  background: #27b7ed;
  border-radius: 15px;
  font-family: 'ProximaNova-Regular';
  font-size: 9px;
`;

export const AddYourCards = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 37px;
`;

export const TextAddYourCards = styled.Text`
  color: #fff;
  font-family: 'ProximaNova-Regular';
  font-size: 14px;
`;

export const ArrowUp = styled(RectButton)`
  align-items: center;
  justify-content: center;

  margin-left: 50%;
  margin-bottom: 20px;
  background: #27b7ed;
  width: 25px;
  height: 25px;

  border-radius: 12.5px;
`;

export const LineWithButtonsOptions = styled.View`
  margin-top: 25px;
  padding: 0 20px;

  flex: 1;
  flex-direction: row;
`;

export const Option = styled.View`
  width: 55px;
  margin-left: 15px;
`;

export const ButtonOption = styled.View``;

export const Button = styled(RectButton)`
  width: 55px;
  height: 55px;
  border-radius: 27.5px;
  justify-content: center;
  align-items: center;
  background: #009fe3;
`;

export const TextButton = styled.Text`
  color: #5a5a5a;
  margin-top: 5px;
  font-size: 12px;
  font-family: 'ProximaNova-Regular';
  text-align: center;
`;
