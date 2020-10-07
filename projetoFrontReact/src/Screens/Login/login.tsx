import React from 'react';
import { StatusBar, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import BtnLogin from '../../Components/Button/BtnLogin';

const LoginScreen = ({ navigation }) => {

    const goToAdm = () => {
        navigation.navigate("Adm")
    }


    return (
        <ImageBackground style={styles.imageBackground}
            resizeMode='cover'
            source={require('../../Assets/Images/background.png')}>

            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <Image source={require('../../Assets/Images/logo.png')}
                    style={styles.logo}
                    resizeMode='contain' />
                <Text style={styles.pencet}>Pencet</Text>
            </View>

            <View>
                <Text style={styles.slogan}>Tecnologia que facilita a vida!</Text>
            </View>

            <View style={styles.containerLogin}>
                <TextInput style={styles.loginText} placeholder='E-Mail' placeholderTextColor='#5FD393' />
                <TextInput style={styles.loginText} placeholder='Senha' placeholderTextColor='#5FD393' />
            </View>


            <View>
                <Text style={styles.forgoten}>Esqueceu a sua senha?</Text>
                <BtnLogin
                    onPress={goToAdm}
                    title='ACESSAR' />
                <Text style={styles.forgoten}>Crie sua conta</Text>
            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: null,
        height: null,
    },
    pencet: {
        fontSize: 65,
        color: '#6AC0C9',
        fontFamily: 'Tahoma Bold',
        borderLeftWidth: 1,
        borderLeftColor: '#6Ac0c9',
        paddingLeft: 15,
    },
    logo: {
        display: 'flex',
        width: 70,
        height: 70,
        marginHorizontal: 10,
        alignSelf: 'center',
        marginLeft: 30,
    },
    slogan: {
        fontSize: 20,
        color: '#6AC0C9',
        fontFamily: 'Tahoma',
        marginHorizontal: 35,
        alignSelf: 'center',
        marginTop: 10,
    },
    container: {
        marginTop: 100,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerLogin: {
        marginHorizontal: 60,
        marginTop: 30,
    },
    loginText: {
        borderBottomWidth: 1,
        borderBottomColor: '#295A83',
        color: '#fff',
        marginTop: 45,
    },
    forgoten: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#5FD393',
        marginTop: 30,
        marginBottom: 50,
    },
});

export default LoginScreen;