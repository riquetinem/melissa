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

export const ClickOnMessageMelissa = styled(RectButton)`
  width: 100%;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  align-items: center;

  position: absolute;
  bottom: 0;

  width: 500px;
`;

export const InputText = styled.TextInput`
  border-radius: 30px;
  border: 1px solid #c0c0c0;
  background-color: #fff;
  elevation: 5;

  padding: 5px 20px;
  margin-bottom: 5px;
  margin-left: 5px;

  max-width: 330px;
  width: 350px;
  font-family: 'ProximaNova-Regular';
`;

export const Send = styled(RectButton)`
  width: 45px;
  height: 45px;

  align-items: center;
  justify-content: center;

  margin-left: 10px;
  margin-bottom: 10px;

  border-radius: 22.5px;

  background-color: #009fe3;
`;
