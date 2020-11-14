import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import MessageMelissa from '../../components/MessageMelissa';

import {Navbar, MessageTitle, Title, Content, Messages} from './styles';

const Chat: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#009FE3" />
      <Navbar>
        <Icon name="bars" size={24} color="#FFF" />
        <Title>
          <MessageTitle>Converse com Melissa</MessageTitle>
        </Title>
      </Navbar>
      <Content>
        <Messages>
          <MessageMelissa>
            Olá, eu sou a Melissa sua assistente virtual, vamos nos conhecer
            melhor?
          </MessageMelissa>
        </Messages>
      </Content>
    </>
  );
};

export default Chat;
