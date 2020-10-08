import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, ImageBackground, Image, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import BtnLogin from '../../Components/Button/BtnLogin';
import criarConta from '../../Schemas/criarConta';
import {styles} from './styles';
import BtnModal from '../../Components/Button/BtnModal';


const LoginScreen = ({ navigation }) => {

    const realm = require('realm');
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const goToAdm = () => {
        realm.open({schema: [ContaSchema]}).then(
            realm => { 
                const logins = realm.objects('Conta');
                for ( const login of logins ){
                    if ((usuario == login.user) && (senha == login.password)) 
                    {   
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Adm' }],
                        });
                        break;
                    }
                    else{
                        Alert.alert('Nome de usuário ou senha invalidos!');
                    }
                }
            }
        ).catch((error) => {
            Alert.alert('Erro ao conectar no Banco de Dados!');
            console.log(error)});              
    }

    const ContaSchema = {
        name: 'Conta',
        properties: {
                    user: 'string',
                    password: 'string',
                }
    }

    const salvar = () => {
        realm.open({schema: [ContaSchema]}).
        then(realm => { realm.write(() => {
            const myCar = realm.create('Conta', {
                user: user,
                password: password,
            });
            setUser('');
            setPassword('');
            Alert.alert('Usuário criado com sucesso!');
            setVisible(false);    
          })}).catch(error => {
              Alert.alert('Erro ao criar um novo usuário!');
              console.log(error)});
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
                <TouchableOpacity onPress={() => setVisible(true)}>
                    <Text style={styles.forgoten}>Crie sua conta</Text>
                </TouchableOpacity>
            </View>

            <Modal onBackdropPress={() => setVisible(false)} isVisible={visible} >
                <View style={{ backgroundColor: '#fff', height: 300 }}>
                <Text style={styles.textModal}>Cadastrar Usuário</Text>

                <TextInput onChangeText={text => setUser(text)}
                    value={user}
                    style={styles.input}
                    placeholder="Usuário" />

                <TextInput onChangeText={text => setPassword(text)}
                    value={password}
                    style={styles.input}
                    placeholder="Senha" />

                <BtnModal
                    buttonStyle={styles.btnModal}
                    title="Salvar"
                    onPress={() => { salvar(); }}
                />
                </View>
            </Modal>

        </ImageBackground>
    );
};



export default LoginScreen;