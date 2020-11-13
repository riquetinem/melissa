import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import melissaImg from '../../assets/melissa.png';

import {
  Container,
  Title,
  ListItem,
  TextListItem,
  ButtonConfirm,
  Close,
} from './styles';

const Introduction: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Container>
        <Close
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <Icon name="close" size={30} color="#009FE3" />
        </Close>

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
            Nossa assistente vai te auxiliar do começo até o final do seu
            objetivo
          </TextListItem>
        </ListItem>

        <ButtonConfirm onPress={() => navigation.navigate('Home')}>
          Entendi
        </ButtonConfirm>
      </Container>
    </>
  );
};

export default Introduction;
