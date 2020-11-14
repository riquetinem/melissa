import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import Introduction from '../pages/Introduction';
import Chat from '../pages/Chat';
import Dashboard from '../pages/Dashboard';
import DashboardDetails from '../pages/DashboardDetails';

const Meli = createStackNavigator();

const Routes: React.FC = () => (
  <Meli.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#009FE3'},
      // eslint-disable-next-line react/jsx-closing-bracket-location
    }}>
    <Meli.Screen name="Home" component={Home} />
    <Meli.Screen name="Introduction" component={Introduction} />
    <Meli.Screen name="Chat" component={Chat} />
    <Meli.Screen name="Dashboard" component={Dashboard} />
    <Meli.Screen name="DashboardDetails" component={DashboardDetails} />
  </Meli.Navigator>
);

export default Routes;
