import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import Modal from 'react-native-modal';
import { TypesFunc } from './types';
import { styles } from './styles';
import api from '../../Api/api';
import Item from '../../Components/Flatlist/Flatlist';
import BtnModal from '../../Components/Button/BtnModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Components/Header/Header';
import NetInfo from "@react-native-community/netinfo";
import FuncionarioOff from '../../Schemas/funcionario'


const Funcionario = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [funcionarios, setFuncionarios] = useState<TypesFunc[]>([]);
  const [nome, setName] = useState('');
  const [cpf, setCpf] = useState('');
  // const [online, setOnline] = useState(false);

  const unsubscribe = navigation.addListener('focus', () => {
    getFromApi();
  });

  useEffect(() => {
    getFromApi();
  }, []);

  const getFromApi = async () => {

    const testeNet = NetInfo.addEventListener(async (state) => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);

      if (state.isConnected) {
        try {
          const response = await api
            .get('/funcionario')

          const funcionariosAPI = response.data

          setFuncionarios(response.data);


          console.log('log:', funcionariosAPI)

          Realm.open({ schema: [FuncionarioOff] }).then(
            realm => {
              realm.write(() => {
                realm.delete(realm.objects('Funcionario'))
              });
            });


          Realm.open({ schema: [FuncionarioOff] }).then(
            realm => {
              realm.write(() => {
                funcionariosAPI.map((funcionario) => {
                  realm.create('Funcionario', {
                    id: funcionario.id,
                    nome: funcionario.nome,
                    cpf: funcionario.cpf,
                  })
                })
              })
            });
          Realm.open({ schema: [FuncionarioOff] }).then(
            realm => {
              const dados = realm.objects('Funcionario')
              console.log("OFF", dados);
            });

        } catch (err) {
          console.log(err)
        }
      } else {
        Realm.open({ schema: [FuncionarioOff] }).then(
          realm => {
            const dados = realm.objects('Funcionario');

            setFuncionarios(dados);
          });
      }
    });
    testeNet();
  };

  const salvar = async () => {
    const dados = { nome, cpf };

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
  const novoFuncionario = () => {
    const testeNet = NetInfo.addEventListener(state => {

      if (state.isConnected) {
        setVisible(true);
      } else {
        Alert.alert('Mensagem', 'Esta ação necessita de conexão com a internet');
      }
    });
    testeNet();
  };

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
          onPress={novoFuncionario}>Novo Funcionário
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
