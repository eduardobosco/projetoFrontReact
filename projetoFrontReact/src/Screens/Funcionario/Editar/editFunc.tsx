import React, { useState, useEffect } from 'react';
import { Alert, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BtnModal from '../../../Components/Button/BtnModal';
import Header from '../../../Components/Header/Header';
import { TextInput } from 'react-native-gesture-handler';
import api from '../../../Api/api';
import CustomModal from '../../../Components/Modal/Modal';
import { styles } from './styles';
import NetInfo from "@react-native-community/netinfo";



const editFunc = ({ navigation, route }) => {
    const { id, nome, cpf } = route.params;
    const [visible, setVisible] = useState(false);

    const [novoNome, setNovoNome] = useState(nome);
    const [novoCpf, setNovoCpf] = useState(cpf);

    const deleteFunc = async () => {
        const testeNet = NetInfo.addEventListener(state => {
            if (state.isConnected) {
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
            else{
                Alert.alert('Esta ação necessita de conexão com a internet')
            }
        });
        testeNet();
    }

    const atualizar = async () => {
        
                let nome = novoNome
                let cpf = novoCpf
                console.log(nome, cpf)
                api.put(`/funcionario/${id}`, { cpf: novoCpf, nome: novoNome })
                    .then(() => {
                        Alert.alert('Mensagem:', 'Funcionario Atualizado com Sucesso!');
                        goBack();
                    })
                    .catch((err) => console.log(err));
            }        
    

    const editarFuncionario = () => {
        const testeNet = NetInfo.addEventListener(state => {
    
          if (state.isConnected) {
            setVisible(true);
          } else {
            Alert.alert('Esta ação necessita de conexão com a internet');
          }
        });
        testeNet();
      };

    
    function goBack() {
        navigation.navigate('Funcionario');
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

                <TouchableOpacity onPress={editarFuncionario} >
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

export default editFunc;