import styled from 'styled-components/native';

export const Message = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const TextMessage = styled.Text`
  font-size: 13px;
  line-height: 15px;
  width: 300px;
  font-family: 'ProximaNova-Regular';
  padding: 15px;
  background-color: rgba(69, 194, 230, 0.3);
  border-radius: 10px;
`;

export const AvatarImage = styled.View`
  width: 55px;
  height: 55px;
  border-radius: 27.5px;
  background-color: #fff;
  border-color: #000;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
`;
