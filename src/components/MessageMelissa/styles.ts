import styled from 'styled-components/native';

interface TextMessageProps {
  isClickable: boolean;
}

export const Message = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  margin: 0px 0 10px;
`;

export const TextMessage = styled.Text<TextMessageProps>`
  font-size: 13px;
  line-height: 15px;
  width: 300px;
  font-family: 'ProximaNova-Regular';
  padding: 15px;
  background-color: ${(props) =>
    props.isClickable ? 'rgba(56, 199, 75, 1)' : 'rgba(0, 159, 227, 1)'};
  color: #fff;
  border-radius: 10px;
`;

export const AvatarImage = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 32.5px;
`;
