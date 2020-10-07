import React, { useState, useEffect } from 'react';
import { Alert, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BtnModal from '../../../Components/Button/BtnModal';
import Header from '../../../Components/Header/Header';
import { TextInput } from 'react-native-gesture-handler';
import api from '../../../Api/api';
import CustomModal from '../../../Components/Modal/Modal';



const editFunc = ({ navigation, route }) => {
    const { id, nome, cpf } = route.params;
    const [visible, setVisible] = useState(false);

    const [novoNome, setNovoNome] = useState(nome);
    const [novoCpf, setNovoCpf] = useState(cpf);

    console.log('Editar', id, nome, cpf)

    const deleteFunc = async () => {
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja excluir este item?",
            [
                {
                    text: "Não",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Sim",
                    onPress: () => {
                        api.delete(`/funcionario/${id}`)
                            .then(() => {
                                Alert.alert('Mensagem:', 'Funcionario Excluido com Sucesso!')
                                goBack();
                            })
                            .catch((err) => Alert.alert('Mensagem:', 'Erro ao Excluir Funcionario!'));
                    }
                }
            ],
            { cancelable: false }
        );
    }

    const atualizar = async () => {

        let nome = novoNome
        let cpf = novoCpf
        console.log(nome, cpf)
        api.put(`/funcionario/${id}`, { cpf: novoCpf, nome: novoNome })
            .then(() => {
                Alert.alert('Mensagem:', 'Funcionario Atualizado com Sucesso!')

                goBack();
            })
            .catch((err) => console.log(err));
    }

    function goBack() {
        navigation.navigate('Funcionario')
    }

    return (
        <>
            <Header />

            <View>
                <CustomModal
                    cpf={novoCpf}
                    nome={novoNome}
                    isVisible={visible}
                    setNome={setNovoNome}
                    setCpf={setNovoCpf}
                    setVisible={setVisible}
                    text='Atualizar Dados'
                    buttonStyle={styles.btnModal}
                    title="Salvar"
                    onPress={atualizar}
                />
            </View>

            <View style={styles.container}>
                <View style={styles.containerInfo}>
                    <Image style={styles.foto} source={require('../../../Assets/Images/func.png')} />
                    <View style={styles.containerInfoText}>
                        <TextInput style={styles.infoTextNome}> Nome: {nome}</TextInput>
                        <Text style={styles.infoText}> CPF: {cpf} </Text>
                    </View>
                </View>
            </View>

            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={goBack} >
                    <View >
                        <Icon
                            name='arrow-left-bold-circle-outline'
                            size={35}
                            color='#6AC0C9'
                            style={styles.btnIcon} />

                        <Text style={styles.footerText}>Voltar</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setVisible(true)} >
                    <View>
                        <Icon
                            name='account-edit-outline'
                            size={35}
                            color='#6AC0C9'
                            style={styles.btnIcon} />

                        <Text style={styles.footerText}>Editar</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={deleteFunc} >
                    <View>
                        <Icon
                            name='trash-can-outline'
                            size={35}
                            color='#6AC0C9'
                            style={styles.btnIcon} />

                        <Text style={styles.footerText}>Excluir</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
    },
    footerText: {
        fontFamily: 'Tahoma',
        fontSize: 19,
        marginHorizontal: 30,
        color: '#fff',
        marginTop: 5,
        marginBottom: 10,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#12132F'
    },
    btnIcon: {
        alignSelf: 'center',
        marginHorizontal: 30,
    },
    textModal: {
        fontSize: 24,
        fontFamily: 'Tahoma',
        color: '#12132F',
        alignSelf: 'center',
        marginTop: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 2,
        padding: 5,
        marginVertical: 10,
        fontSize: 16,
        marginHorizontal: 20,
        marginTop: 20,
    },
});
export default editFunc;