import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Funcionario from '../Screens/Funcionario/funcionario';
import EditarFuncionario from '../Screens/Funcionario/Editar/editFunc';

const Tab = createBottomTabNavigator();

const BottonTabNavigator = () => {

    return (
        <Tab.Navigator >

            <Tab.Screen name="EditarFuncionario"
                component={EditarFuncionario}
                options={{
                    tabBarLabel: 'Voltar',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="back" color={color} size={size} />
                    ),
                }} />

            <Tab.Screen name="Funcionario"
                component={Funcionario}
                options={{
                    tabBarLabel: 'Voltar',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="back" color={color} size={size} />
                    ),
                }} />

        </Tab.Navigator>

    );
};
export default BottonTabNavigator;