import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Navbar = styled.View`
  padding: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MessageTitle = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: 'ProximaNova-Regular';
`;

export const Title = styled.View`
  width: 100%;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  background: #e5e5e5;
  padding: 25px 15px;
`;

export const FilterBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #fff;
  border-radius: 5px;

  elevation: 7;
`;

export const Filter = styled.View`
  flex-direction: row;
`;

export const FilterText = styled.View`
  flex-direction: column;
  margin-left: 15px;
`;

export const FilterTextMonth = styled.Text`
  font-family: 'ProximaNova-Regular';
  font-size: 10px;
`;

export const FilterTextDetails = styled.Text`
  font-family: 'ProximaNova-Regular';
  font-size: 10px;
`;

export const Modify = styled.Text`
  font-family: 'ProximaNova-Bold';
  font-size: 10px;
  color: #009fe3;
`;

export const Graphic = styled.View`
  margin-top: 25px;
  background: #fff;
  border-radius: 5px;
  elevation: 7;

  height: 440px;
  padding: 20px;
`;

export const TitleObjective = styled.Text`
  font-family: 'ProximaNova-Regular';
  font-size: 18px;
`;

export const ValueObjective = styled.Text`
  font-family: 'ProximaNova-Bold';
  font-size: 24px;
`;

export const Line = styled.View`
  border: 1px solid #e2e4e7;
  margin: 16px -20px;
`;

export const ViewDetailsBox = styled(RectButton)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextViewDetails = styled.Text`
  font-size: 14px;
  font-family: 'ProximaNova-Bold';
  color: #009fe3;
`;
