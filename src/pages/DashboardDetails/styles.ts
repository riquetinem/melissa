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

export const Graphic = styled.View`
  background: #fff;
  border-radius: 5px;
  elevation: 7;

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

export const Contribution = styled.View`
  margin-top: 25px;
  background: #fff;
  border-radius: 5px;
  elevation: 7;

  padding: 20px;
`;

export const TitleContribution = styled.Text`
  font-size: 18px;
`;

export const Table = styled.View``;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TableTitle = styled.Text`
  color: #5a5a5a;
  font-size: 14px;
  margin: 15px 0;
`;

export const TableColumnData = styled.Text`
  font-size: 14px;
  color: #000;
  margin-bottom: 7px;
`;

export const TableColumnValue = styled.Text`
  color: #27b7ed;
  font-size: 14px;
  font-family: 'ProximaNova-Bold';
`;

export const Line = styled.View`
  border: 1px solid #e2e4e7;
  margin: 16px -20px;
`;

export const ViewDetailsBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextViewDetails = styled.Text`
  font-size: 14px;
  font-family: 'ProximaNova-Bold';
  color: #009fe3;
`;
