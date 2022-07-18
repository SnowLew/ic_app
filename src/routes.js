import React from 'react';

import {View, Text} from 'react-native';

import {
  CommonActions,
  NavigationContainer,
  NavigationContainerRef,
  NavigationProp,
} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
  TransitionSpecs,
} from '@react-navigation/stack';

import LoginScreen from './screens/Login';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
