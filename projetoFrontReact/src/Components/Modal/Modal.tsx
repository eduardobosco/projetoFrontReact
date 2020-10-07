import React from 'react';
import Modal from 'react-native-modal';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import BtnModal from '../Button/BtnModal';


const CustomModal = ({ setNome, setCpf, setVisible, isVisible, nome, cpf, buttonStyle, title, onPress, text }) => {

    return (
        <Modal onBackdropPress={() => setVisible(false)} isVisible={isVisible}>
            <View style={{ backgroundColor: '#fff', height: 300 }}>


                <Text style={styles.textModal}>{text}</Text>

                <TextInput onChangeText={setNome}
                    value={nome}
                    style={styles.input}
                />

                <TextInput onChangeText={setCpf}
                    value={cpf}
                    style={styles.input}
                />

                <TouchableOpacity style={[styles.btnModal, buttonStyle]} onPress={onPress}>
                    <Text style={styles.buttonText}>{title}</Text>
                </TouchableOpacity>

            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
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
    textModal: {
        fontSize: 24,
        fontFamily: 'Tahoma',
        color: '#12132F',
        alignSelf: 'center',
        marginTop: 15,
    },
    btnModal: {
        backgroundColor: '#5FD393',
        padding: 10,
        borderRadius: 50,
        marginHorizontal: 80,
        marginTop: 30,
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 16,
        fontFamily: 'Tahoma',
        color: '#12132F',
    },
});

export default CustomModal