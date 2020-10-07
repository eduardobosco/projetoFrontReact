import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Navigators/stackNavigator'
import BottonTabNavigator from './src/Navigators/bottomTabNavigator';



const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <NavigationContainer>
      <StackNavigator>
        <BottonTabNavigator />
      </StackNavigator>
    </NavigationContainer>
  );
}

export default App;