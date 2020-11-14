import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import MessageMelissa from '../../components/MessageMelissa';
import MessageUser from '../../components/MessageUser';

import {
  Navbar,
  MessageTitle,
  Title,
  Content,
  Messages,
  InputText,
  InputGroup,
  Send,
} from './styles';

interface MessageText {
  id: number;
  text: string;
}

const Chat: React.FC = () => {
  const [newMessage, setNewMessage] = useState<string>('');
  const [messages, setMessages] = useState<MessageText[]>([]);
  const [count, setCount] = useState<number>(0);

  const messagesMelissaTxt = ['', 'Alllll', 'HEEEEEY'];

  const handleMessage = async (text: string): Promise<void> => {
    const id = messages.length + 1;
    await setMessages([...messages, {id, text}]);
  };

  useEffect(() => {
    setNewMessage('');
    setCount(count + 1);
  }, [messages]);

  useEffect(() => {
    console.log(messagesMelissaTxt[count]);
  }, [count]);

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
        <ScrollView>
          <Messages>
            <MessageMelissa>
              Olá, eu sou a Melissa sua assistente virtual, vamos nos conhecer
              melhor?
            </MessageMelissa>
            {!!messages &&
              messages.map((message) => (
                <MessageUser key={message.id}>{message.text}</MessageUser>
              ))}

              { messagesMelissaTxt[count] != '' && (
                  <MessageMelissa key={count}>{messagesMelissaTxt[count]}</MessageMelissa>
                )}
          </Messages>
        </ScrollView>
        <InputGroup>
          <InputText
            onChangeText={(text) => {
              setNewMessage(text);
            }}
            value={newMessage}
          />
          <Send onPress={() => handleMessage(newMessage)}>
            <Icon name="chevron-right" size={24} color="#fff" />
          </Send>
        </InputGroup>
      </Content>
    </>
  );
};

export default Chat;
