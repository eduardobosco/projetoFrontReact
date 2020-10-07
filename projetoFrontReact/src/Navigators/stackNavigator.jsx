import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../Screens/Welcome/welcome'
import Funcionario from '../Screens/Funcionario/funcionario'
import Login from '../Screens/Login/login'
import Adm from '../Screens/Administrativa/adm'
import EditarFuncionario from '../Screens/Funcionario/Editar/editFunc'
import Edit from '../Screens/Funcionario/Editar/edit'
import BottonTabNavigator from './bottomTabNavigator';



const Stack = createStackNavigator();

const stackNavigator = () => {
    return (

        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Adm" component={Adm} options={{ headerShown: false }} />
            <Stack.Screen name="Funcionario" component={Funcionario} options={{ headerShown: false }} />
            <Stack.Screen name="EditarFuncionario" component={EditarFuncionario} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Root" component={BottonTabNavigator} options={{ headerShown: false }} /> */}


        </Stack.Navigator>

    );
}

export default stackNavigator;