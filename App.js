import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
