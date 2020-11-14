import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Navbar,
  MessageTitle,
  Title,
  Container,
  FilterBox,
  Filter,
  FilterText,
  FilterTextMonth,
  FilterTextDetails,
  Modify,
  Graphic,
} from './styles';

const Chat: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#009FE3" />
      <Navbar>
        <Icon name="bars" size={24} color="#FFF" />
        <Title>
          <MessageTitle>Gestão de Objetivos</MessageTitle>
        </Title>
      </Navbar>
      <Container>
        <FilterBox>
          <Filter>
            <Icon name="sliders-h" size={24} color="#5A5A5A" />

            <FilterText>
              <FilterTextMonth>
                02 marco 2020 a 13 novembro 2020
              </FilterTextMonth>

              <FilterTextDetails>
                Objetivos de Longo prazo - Ativos
              </FilterTextDetails>
            </FilterText>
          </Filter>

          <Modify>Modificar</Modify>
        </FilterBox>

        <Graphic />
        <Graphic />
      </Container>
    </>
  );
};

export default Chat;
