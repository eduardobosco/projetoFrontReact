import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../Screens/Welcome/welcome'
import Funcionario from '../Screens/Funcionario/funcionario'
import Login from '../Screens/Login/login'
import Adm from '../Screens/Administrativa/adm'
import EditarFuncionario from '../Screens/Funcionario/Editar/editFunc'



const Stack = createStackNavigator();

const stackNavigator = () => {
    return (

        <Stack.Navigator initialRouteName='Adm'>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Adm" component={Adm} options={{ headerShown: false }} />
            <Stack.Screen name="Funcionario" component={Funcionario} options={{ headerShown: false }} />
            <Stack.Screen name="EditarFuncionario" component={EditarFuncionario} options={{ headerShown: false }} />


        </Stack.Navigator>

    );
}

export default stackNavigator;