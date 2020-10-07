import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import BtnLogin from '../../Components/Button/BtnLogin';
import criarConta from '../../Schemas/criarConta';
import {styles} from './styles';

const LoginScreen = ({ navigation }) => {

    const [visible, setVisible] = useState(false);
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const goToAdm = () => {
        navigation.navigate("Adm")
    }

    const conta = () => {
        Realm.open({ schema: [criarConta] }).then((realm) => {
            realm.write(() => {
                realm.create('Conta', {
                    usuario: usuario,
                    senha: senha,
                });
            });
            const contas = realm.objects('Conta')
        });
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
                <TextInput
                    style={{ fontSize: 18 }}
                    onChangeText={setUsuario}
                    value={usuario}
                    style={styles.loginText}
                    placeholder='Usuário'
                    placeholderTextColor='#5FD393' />

                <TextInput
                    style={{ fontSize: 18 }}
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry={true}
                    style={styles.loginText}
                    placeholder='Senha'
                    placeholderTextColor='#5FD393' />
            </View>


            <View>
                <Text style={styles.forgoten}>Esqueceu a sua senha?</Text>
                <BtnLogin
                    onPress={goToAdm}
                    title='ACESSAR' />
                <TouchableOpacity>
                    <Text style={styles.forgoten}>Crie sua conta</Text>
                </TouchableOpacity>
            </View>



        </ImageBackground>
    );
};



export default LoginScreen;