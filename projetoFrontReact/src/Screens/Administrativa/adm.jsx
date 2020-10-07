import React from 'react';
import { ScrollView, Text, View, StyleSheet, StatusBar } from 'react-native';
import ButtonAdm from '../../Components/Button/ButtonAdm';
import Header from '../../Components/Header/Header';
import {styles} from './styles';


const AdmScreen = ({ navigation }) => {


    return (
        <ScrollView style={styles.display}>

            <Header />

            <View style={styles.titleContainer}>
                <StatusBar barstyle="light" backgroundColor='#12132F' />
                <Text style={styles.titleText}>Área administrativa</Text>
            </View>

            <View style={styles.buttonView}>
                <ButtonAdm
                    onPress={() => navigation.navigate("Funcionario")}
                    iconName='account-tie' title='Funcionário' />
                <ButtonAdm iconName='order-bool-ascending' title='Categoria' />
            </View>

            <View style={styles.buttonView}>
                <ButtonAdm iconName='account' title='Cliente' />
                <ButtonAdm iconName='purse' title='Produtos' />
            </View>

            <View style={styles.buttonView}>
                <ButtonAdm iconName='view-headline' title='Pedido' />
                <ButtonAdm iconName='cart' title='Carrinho' />
            </View>

        </ScrollView>
    );
};

export default AdmScreen;