import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import BtnModal from '../../../Components/Button/BtnModal';
import Header from '../../../Components/Header/Header';


const editFunc = ({ navigation, route }) => {

    const [visible, setVisible] = useState(false);

    const { nome, cpf } = route.params;

    console.log(nome, cpf)

    function goBack() {
        navigation.navigate('Funcionario')
    }

    return (
        <>
            <Header />

            <View style={styles.container}>
                <View style={styles.containerInfo}>
                    <Image style={styles.foto} source={require('../../../Assets/Images/func.png')} />
                    <View style={styles.containerInfoText}>
                        <Text style={styles.infoTextNome}> Nome: {nome}</Text>
                        <Text style={styles.infoText}> CPF: {cpf}</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity onPress={goBack}>
                <Text>Voltar</Text>
            </TouchableOpacity>

            {/* <Modal isVisible={visible}>
                <View style={{ backgroundColor: '#fff', height: 300 }}>
                    <Text style={styles.textModal}>Cadastrar Funcionário</Text>

                    <TextInput onChangeText={text => setName(text)}
                        value={nome}
                        style={styles.input}
                        placeholder="Nome Completo" />

                    <TextInput onChangeText={text => setCpf(text)}
                        value={cpf}
                        style={styles.input}
                        placeholder="CPF" />

                    <BtnModal
                        buttonStyle={styles.btnModal}
                        title="Salvar"
                        onPress={() => { salvar(); }}
                    />
                </View>
            </Modal> */}

        </>
    );
};
const styles = StyleSheet.create({
    header: {

        backgroundColor: '#12132F',
        flexDirection: 'row',
        alignItems: 'center',

    },
    headerText: {
        flex: 1,
        alignItems: 'center',
    },
    headerText1: {
        fontSize: 25,
        color: '#6AC0C9',
        alignItems: 'center',
        marginLeft: 45,
    },
    headerImage: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        alignSelf: 'flex-end',
        marginRight: 10,
        marginVertical: 10,

    },
    container: {
        backgroundColor: '#12132F',
        flex: 1,

    },
    containerInfo: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 20,
        marginTop: 100,
        marginHorizontal: 15,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,

    },
    containerInfoText: {
        marginTop: 115,
    },
    infoTextNome: {
        fontFamily: 'Tahoma',
        fontSize: 19,
        color: '#000',
        marginBottom: 10,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    infoText: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
        marginLeft: 20,
        fontWeight: 'bold',

    },
    footer: {
        height: 80,
        backgroundColor: '#fff',

    },
    foto: {
        alignSelf: 'center',
        position: 'absolute',
        top: -70,
        width: 150,
        height: 150,
    }
});
export default editFunc;