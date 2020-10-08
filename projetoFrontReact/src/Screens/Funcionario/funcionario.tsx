import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert, 
} from 'react-native';
import Modal from 'react-native-modal';
import { TypesFunc } from './types';
import { styles } from './styles';
import api from '../../Api/api';
import Item from '../../Components/Flatlist/Flatlist';
import BtnModal from '../../Components/Button/BtnModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Components/Header/Header';



const Funcionario = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [funcionarios, setFuncionarios] = useState<TypesFunc[]>([]);
  const [nome, setName] = useState('');
  const [cpf, setCpf] = useState('');

const unsubscribe = navigation.addListener('focus', () => {
    getFromApi();
    });

  useEffect(() => {
    getFromApi();
  }, []);

  const getFromApi = async() => {
    api
      .get('/funcionario')
      .then((response) => {
        setFuncionarios(response.data);
      })
      .catch(() => Alert.alert('Erro ao listar os Funcionarios!'));
  };

  const salvar = async () => {
    const dados = { nome, cpf };
    console.log(dados)
    api.post('/funcionario', dados)
      .then(() => {
        Alert.alert('Funcionario Cadastrado com Sucesso!');
        setName('');
        setCpf('');
      })
      .catch((err) => Alert.alert('Erro ao Cadastrar Funcionario!'));
    
      setVisible(false);
      getFromApi();
  }

  const edit = (item) => {
    console.log(item)
    navigation.navigate('EditarFuncionario', { id: item.id, nome: item.nome, cpf: item.cpf })
  }

  const renderItem = ({ item }) => <Item id={item.id} nome={item.nome} cpf={item.cpf} onPress={() => edit(item)} />;

  return (
    <SafeAreaView style={styles.container}>

      <Header />

      <Text style={styles.title}>Funcionários</Text>

      <FlatList
        data={funcionarios}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshing={true}

      />

      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => setVisible(true)}>Novo Funcionário
        </Text>
      </TouchableOpacity>

      <Modal onBackdropPress={() => setVisible(false)} isVisible={visible} >
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
      </Modal>
    </SafeAreaView>
  );
};

export default Funcionario;
