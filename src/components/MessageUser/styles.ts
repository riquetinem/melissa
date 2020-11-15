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
  background-color: #fff;
  border-radius: 10px;
`;

export const AvatarImage = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 32.5px;
`;
