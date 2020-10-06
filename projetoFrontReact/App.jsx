import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Navigators/stackNavigator'
import BottonTabNavigator from './src/Navigators/bottomTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator>
        <BottonTabNavigator />
      </StackNavigator>
    </NavigationContainer>
  );
}

export default App;