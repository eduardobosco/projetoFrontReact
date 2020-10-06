import React from 'react';
import { ScrollView, Text, View, StyleSheet, StatusBar } from 'react-native';
import ButtonAdm from '../../Components/Button/ButtonAdm';
import Header from '../../Components/Header/Header';


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

const styles = StyleSheet.create({
    display: {
        flex: 1,
        backgroundColor: '#12132F',
    },
    titleContainer: {
        fontFamily: 'Tahoma',
    },
    titleText: {
        fontSize: 30,
        color: '#5FD393',
        alignSelf: 'center',
        marginBottom: 50,
        marginTop: 40,
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default AdmScreen;