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
  Graphic,
  TitleObjective,
  ValueObjective,
  Contribution,
  TitleContribution,
  Table,
  Row,
  TableTitle,
  TableColumnData,
  TableColumnValue,
  Line,
  ViewDetailsBox,
  TextViewDetails,
} from './styles';

interface FormatData {
  x: string;
  y: number;
}

const DashboardDetails: React.FC = ({route}: any) => {
  const navigation = useNavigation();
  const {type, data} = route.params;

  const titleText =
    type === 'casa' ? 'Casa Própria em 2040' : 'Carro novo 2025';

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#009FE3" />
      <Navbar>
        <Icon
          name="chevron-left"
          size={24}
          color="#FFF"
          onPress={() => navigation.goBack()}
        />
        <Title>
          <MessageTitle>{titleText}</MessageTitle>
        </Title>
      </Navbar>
      <ScrollView>
        <Container>
          {type === 'casa' ? (
            <>
              <Graphic>
                <TitleObjective>Casa Própria em 2040</TitleObjective>
                <ValueObjective>R$ 300.000,00</ValueObjective>
                <VictoryChart width={350} theme={VictoryTheme.grayscale}>
                  <VictoryLine
                    data={data}
                    x="x"
                    y="y"
                    interpolation="catmullRom"
                  />
                </VictoryChart>
              </Graphic>

              <Contribution>
                <TitleContribution>Contribuições</TitleContribution>

                <Table>
                  <Row>
                    <TableTitle>Data</TableTitle>
                    <TableTitle>Valor</TableTitle>
                  </Row>

                  {data.map((detailContribution: FormatData) => (
                    <Row key={detailContribution.x}>
                      <TableColumnData>{detailContribution.x}</TableColumnData>

                      <TableColumnValue>
                        R$ {detailContribution.y}
                      </TableColumnValue>
                    </Row>
                  ))}
                </Table>

                <Line />

                <ViewDetailsBox>
                  <TextViewDetails>Ver detalhes</TextViewDetails>
                  <Icon name="chevron-right" size={10} color="#009FE3" />
                </ViewDetailsBox>
              </Contribution>
            </>
          ) : (
            <>
              <Graphic>
                <TitleObjective>Carro novo em 2025</TitleObjective>
                <ValueObjective>R$ 40.000,00</ValueObjective>
                <VictoryChart width={350} theme={VictoryTheme.grayscale}>
                  <VictoryLine
                    data={data}
                    x="x"
                    y="y"
                    interpolation="catmullRom"
                  />
                </VictoryChart>
              </Graphic>

              <Contribution>
                <TitleContribution>Contribuições</TitleContribution>

                <Table>
                  <Row>
                    <TableTitle>Data</TableTitle>
                    <TableTitle>Valor</TableTitle>
                  </Row>

                  {data.map((detailContribution: FormatData) => (
                    <Row key={detailContribution.x}>
                      <TableColumnData>{detailContribution.x}</TableColumnData>

                      <TableColumnValue>
                        R$ {detailContribution.y}
                      </TableColumnValue>
                    </Row>
                  ))}
                </Table>

                <Line />

                <ViewDetailsBox>
                  <TextViewDetails>Ver detalhes</TextViewDetails>
                  <Icon name="chevron-right" size={10} color="#009FE3" />
                </ViewDetailsBox>
              </Contribution>
            </>
          )}
        </Container>
      </ScrollView>
    </>
  );
};

export default DashboardDetails;
