import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StatusBar, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {VictoryLine, VictoryChart, VictoryTheme} from 'victory-native';

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
  TitleObjective,
  ValueObjective,
  Line,
  ViewDetailsBox,
  TextViewDetails,
} from './styles';

const dataCasa = [
  {x: 'jun', y: 0},
  {x: 'jul', y: 650},
  {x: 'ago', y: 1250},
  {x: 'set', y: 1000},
  {x: 'out', y: 1300},
  {x: 'nov', y: 1450},
  {x: 'dez', y: 2100},
];

const dataCarro = [
  {x: 'mai', y: 0},
  {x: 'jun', y: 400},
  {x: 'jul', y: 300},
  {x: 'ago', y: 900},
  {x: 'set', y: 850},
  {x: 'out', y: 1300},
  {x: 'nov', y: 1200},
  {x: 'dez', y: 2200},
];

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
      <ScrollView>
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

          <Graphic>
            <TitleObjective>Casa Própria em 2040</TitleObjective>
            <ValueObjective>R$ 300.000,00</ValueObjective>
            <VictoryChart width={350} theme={VictoryTheme.grayscale}>
              <VictoryLine
                data={dataCasa}
                x="x"
                y="y"
                interpolation="catmullRom"
              />
            </VictoryChart>

            <Line />

            <ViewDetailsBox>
              <TextViewDetails>Ver detalhes</TextViewDetails>
              <Icon name="chevron-right" size={10} color="#009FE3" />
            </ViewDetailsBox>
          </Graphic>

          <Graphic>
            <TitleObjective>Carro novo em 2025</TitleObjective>
            <ValueObjective>R$ 40.000,00</ValueObjective>
            <VictoryChart width={350} theme={VictoryTheme.grayscale}>
              <VictoryLine
                data={dataCarro}
                x="x"
                y="y"
                interpolation="catmullRom"
              />
            </VictoryChart>

            <Line />

            <ViewDetailsBox>
              <TextViewDetails>Ver detalhes</TextViewDetails>
              <Icon name="chevron-right" size={10} color="#009FE3" />
            </ViewDetailsBox>
          </Graphic>
        </Container>
      </ScrollView>
    </>
  );
};

export default Chat;
