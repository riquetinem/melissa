import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  Info,
  Hello,
  Welcome,
  Level,
  Cash,
  TotalCash,
  TextTotalCash,
  CashToReceive,
  Line,
  Message,
  TextMessage,
  CDI,
  TextCDI,
  AddYourCards,
  TextAddYourCards,
  ArrowUp,
  LineWithButtonsOptions,
  Option,
  ButtonOption,
  Button,
  TextButton,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Info>
          <Welcome>
            <Hello>Olá João</Hello>
            <Level>Nível 6 - Mercado Pontos</Level>
          </Welcome>

          <IconFontAwesome name="bell-o" size={24} color="#fff" />
        </Info>

        <Cash>
          <TotalCash>
            <TextTotalCash>R$ 1.253,00</TextTotalCash>
            <Icon name="chevron-right" size={10} color="#fff" />
          </TotalCash>
          <CashToReceive>R$ 20,30 a liberar</CashToReceive>
        </Cash>

        <Line />

        <Message>
          <TextMessage>Aqui seu dinheiro rende mais!</TextMessage>
          <CDI>
            <TextCDI>100% CDI</TextCDI>
            <Icon name="chevron-right" size={10} color="#fff" />
          </CDI>
        </Message>

        <Line />

        <AddYourCards>
          <TextAddYourCards>Adicione seus cartões</TextAddYourCards>
          <Icon name="chevron-right" size={10} color="#fff" />
        </AddYourCards>

        <ArrowUp>
          <Icon name="chevron-up" size={10} color="#fff" />
        </ArrowUp>
      </Header>

      <LineWithButtonsOptions>
        <Option>
          <ButtonOption>
            <Button>
              <Icon name="qrcode" size={30} color="#fff" />
            </Button>
            <TextButton>Código QR</TextButton>
          </ButtonOption>
        </Option>

        <Option>
          <ButtonOption>
            <Button>
              <Icon name="money-bill-wave" size={30} color="#fff" />
            </Button>
            <TextButton>Adicionar dinheiro</TextButton>
          </ButtonOption>
        </Option>

        <Option>
          <ButtonOption>
            <Button onPress={() => navigation.navigate('Introduction')}>
              <Icon name="comments-dollar" size={30} color="#fff" />
            </Button>
            <TextButton>Assistente Virtual</TextButton>
          </ButtonOption>
        </Option>

        <Option>
          <ButtonOption>
            <Button>
              <Icon name="hand-holding-usd" size={30} color="#fff" />
            </Button>
            <TextButton>Transferir dinheiro</TextButton>
          </ButtonOption>
        </Option>

        <Option>
          <ButtonOption>
            <Button>
              <Icon name="chevron-up" size={30} color="#fff" />
            </Button>
            <TextButton>Sacar dinheiro</TextButton>
          </ButtonOption>
        </Option>
      </LineWithButtonsOptions>
    </Container>
  );
};

export default Home;
