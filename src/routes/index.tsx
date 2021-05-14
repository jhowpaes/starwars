import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import PeopleListing from '../pages/PeopleListing';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none" >
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen 
        name="PeopleListing"
        component={PeopleListing}
      />
    </Stack.Navigator>
  );
}

export default Routes;