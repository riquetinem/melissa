import styled from 'styled-components/native';

export const Message = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const TextMessage = styled.Text`
  font-size: 13px;
  line-height: 15px;
  width: 300px;
  font-family: 'ProximaNova-Regular';
  padding: 15px;
  background-color: #c4f84c;
  border-radius: 10px;
`;

export const AvatarImage = styled.View`
  width: 55px;
  height: 55px;
  border-radius: 50;
  background-color: #fff;
  border-color: #000;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
`;
