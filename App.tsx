import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function index() {
  return (
    <>
    <StatusBar style="light" />
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    </>
  );
}
