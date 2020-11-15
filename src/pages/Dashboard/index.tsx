import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StatusBar, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {VictoryLine, VictoryChart, VictoryTheme} from 'victory-native';

import {
  Navbar,
  BackButton,
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
  {x: 'nov', y: 0},
  {x: 'dez', y: 650},
  {x: 'jan', y: 600},
  {x: 'fev', y: 1200},
  {x: 'mar', y: 1500},
  {x: 'abr', y: 1300},
  {x: 'maio', y: 2300},
];

const dataCarro = [
  {x: 'mai', y: 0},
  {x: 'jun', y: 500},
  {x: 'jul', y: 300},
  {x: 'ago', y: 900},
  {x: 'set', y: 850},
  {x: 'out', y: 1300},
  {x: 'nov', y: 1200},
  {x: 'dez', y: 2200},
];

const Dashboard: React.FC = ({route}: any) => {
  const navigation = useNavigation();
  const {homePage} = route.params;

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#009FE3" />
      <Navbar>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#FFF" />
        </BackButton>
        <Title>
          <MessageTitle>Gestão de Objetivos</MessageTitle>
        </Title>
      </Navbar>
      <Container>
        <ScrollView>
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

          {!homePage && (
            <Graphic
              onPress={
                () =>
                  navigation.navigate('DashboardDetails', {
                    type: 'casa',
                    data: dataCasa,
                  })
                // eslint-disable-next-line react/jsx-curly-newline
                // eslint-disable-next-line react/jsx-closing-bracket-location
              }>
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
          )}

          <Graphic
            onPress={
              () =>
                navigation.navigate('DashboardDetails', {
                  type: 'carro',
                  data: dataCarro,
                })
              // eslint-disable-next-line react/jsx-curly-newline
              // eslint-disable-next-line react/jsx-closing-bracket-location
            }>
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
        </ScrollView>
      </Container>
    </>
  );
};

export default Dashboard;
