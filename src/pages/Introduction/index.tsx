import React from 'react';
// usar o FontAwesome de font
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
        <Text>✓</Text>
        <TextListItem>
          Conclua seus objetivos de curto, medio e longo prazo com o Melissa
        </TextListItem>
      </ListItem>

      <ListItem>
        <Text>✓</Text>
        <TextListItem>
          Receba beneficios ao finalizar suas metas antes do tempo previsto
        </TextListItem>
      </ListItem>

      <ListItem>
        <Text>✓</Text>
        <TextListItem>
          Nossa assistente vai te auxiliar do começo até o final do seu objetivo
        </TextListItem>
      </ListItem>

      <ButtonConfirm
        onPress={() => {
          console.log('UwU');
        }}>
        Entendi
      </ButtonConfirm>
    </Container>
  );
};

export default Introduction;
