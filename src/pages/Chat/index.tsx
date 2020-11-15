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
  ClickOnMessageMelissa,
  InputText,
  InputGroup,
  Send,
} from './styles';

interface MessageText {
  id: number;
  text: string;
}

const Chat: React.FC = () => {
  const navigation = useNavigation();

  const [newMessage, setNewMessage] = useState<string>('');
  const [messages, setMessages] = useState<MessageText[]>([]);
  const [count, setCount] = useState<number>(-1);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleMessage = async (text: string): Promise<void> => {
    const id = messages.length + 1;
    await setMessages([...messages, {id, text}]);
  };

  useEffect(() => {
    setNewMessage('');
    setCount(count + 1);
  }, [messages]);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setShowMessage(true);
      }, 3000);
    }
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
            <MessageMelissa isClickable={false}>
              Olá, eu sou a Melissa sua assistente virtual, vamos nos conhecer
              melhor?
            </MessageMelissa>

            <MessageMelissa isClickable={false}>
              Qual é o seu próximo objetivo?
            </MessageMelissa>

            {!!messages &&
              messages.map((message) => (
                <MessageUser key={message.id}>{message.text}</MessageUser>
              ))}

            {count > 0 && (
              <>
                <MessageMelissa isClickable={false}>
                  Tudo bem, aguarde um momento, estou fazendo uma predição de
                  quando voce ira atingir o seu objetivo
                </MessageMelissa>

                {showMessage ? (
                  <ClickOnMessageMelissa
                    // eslint-disable-next-line prettier/prettier
                    onPress={() => navigation.navigate('Dashboard', {
                        homePage: false,
                        // eslint-disable-next-line prettier/prettier
                      })}
                    // eslint-disable-next-line prettier/prettier
                  >
                    <MessageMelissa isClickable>
                      Tudo certo, voce esta a um passo mais perto de atingir
                      seus objetivos. Toque aqui para prosseguir.
                    </MessageMelissa>
                  </ClickOnMessageMelissa>
                ) : (
                  <MessageMelissa isClickable={false}>...</MessageMelissa>
                )}
              </>
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
