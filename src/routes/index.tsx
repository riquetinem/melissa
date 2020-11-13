import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import Introduction from '../pages/Introduction';

const Meli = createStackNavigator();

const Routes: React.FC = () => (
  <Meli.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#009FE3'},
      // eslint-disable-next-line react/jsx-closing-bracket-location
    }}>
    <Meli.Screen name="Introduction" component={Introduction} />
    <Meli.Screen name="Home" component={Home} />
  </Meli.Navigator>
);

export default Routes;
