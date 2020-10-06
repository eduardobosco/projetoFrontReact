import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Navigators/stackNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator>
      </StackNavigator>
    </NavigationContainer>
  );
}

export default App;