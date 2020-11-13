import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, Text} from 'react-native';

import melissaImg from '../../assets/melissa.png';

import {
  Container,
  Title,
  ListItem,
  TextListItem,
  ButtonConfirm,
} from './styles';

const Introduction: React.FC = () => {
  return (
    <Container>
      <Image source={melissaImg} />

      <Title>Utilze agora uma nova forma de investir em você!</Title>

      <ListItem>
        <Icon name="check-circle-o" size={24} color="#009FE3" />

        <TextListItem>
          Conclua seus objetivos de curto, medio e longo prazo com o Melissa
        </TextListItem>
      </ListItem>

      <ListItem>
        <Icon name="check-circle-o" size={24} color="#009FE3" />

        <TextListItem>
          Receba beneficios ao finalizar suas metas antes do tempo previsto
        </TextListItem>
      </ListItem>

      <ListItem>
        <Icon name="check-circle-o" size={24} color="#009FE3" />

        <TextListItem>
          Nossa assistente vai te auxiliar do começo até o final do seu objetivo
        </TextListItem>
      </ListItem>

      <ButtonConfirm
        onPress={() => {
          console.log('UwU');
        }}
      >
        Entendi
      </ButtonConfirm>
    </Container>
  );
};

export default Introduction;
