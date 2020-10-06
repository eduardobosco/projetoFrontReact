import React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const Edit = ({ navigation, route }) => {

    const { nome, cpf } = route.params;
    console.log(nome, cpf)

    function goBack() {
        navigation.navigate('Funcionario')
    }

    const editar = async () => {
        const dados = { nome, cpf };
        console.log(dados)
        api.push('/funcionario', dados)
            .then(() => {
                Alert.alert('Funcionario Atualizado com Sucesso!');
                setName('');
                setCpf('');
            })
            .catch((err) => Alert.alert('Erro ao Atualizar Funcionario!'));
        //Alert.alert('Erro ao Cadastrar Funcionario!')
    }

    return (
        <View>
            <Text>Nome: {nome} </Text>
            <Text>CPF: {cpf} </Text>

            <TouchableOpacity onPress={goBack}>
                <Text>Voltar</Text>
                <TextInput
                    value={nome}
                    onChangeText={value => setNome(value)}
                    value={nome}
                    placeholder='Nome'
                    placeholderTextColor='#5FD393' />
            </TouchableOpacity>
        </View>
    )
}

export default Edit;