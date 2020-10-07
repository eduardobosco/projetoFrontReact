import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import BtnLogin from '../../Components/Button/BtnLogin';
import criarConta from '../../Schemas/criarConta'

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
    },


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

            <Modal onBackdropPress={() => setVisible(false)} isVisible={visible} >
                <View style={{ backgroundColor: '#fff', height: 300 }}>
                    <Text style={styles.textModal}>Criar Nova Conta</Text>

                    <TextInput onChangeText={text => setUsuario(text)}
                        value={usuario}
                        style={styles.input}
                        placeholder="Nome de Usuario" />

                    <TextInput onChangeText={text => setSenha(text)}
                        value={senha}
                        style={styles.input}
                        placeholder="senha" />

                    <BtnModal
                        buttonStyle={styles.btnModal}
                        title="Salvar"
                        onPress={conta}
                    />
                </View>
            </Modal>

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