import styled from 'styled-components/native';

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
`;

export const Title = styled.View`
  width: 100%;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  background-color: #e5e5e5;
  flex-direction: column;
  justify-content: space-between;
`;

export const Messages = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 25px 5px;
`;
