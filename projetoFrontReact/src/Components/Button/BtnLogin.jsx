import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const ButtonLogin = ({ title }) => {
    return (
        <TouchableOpacity style={[styles.button]}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5FD393',
        marginHorizontal: 20,
        marginVertical: 20,
        marginTop: 20,
        width: 180,
        borderRadius: 50,
        alignSelf: 'center',
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#12132F',
        marginBottom: 7.5,
        marginTop: 7.5,
        fontWeight: 'bold',
    },
});

export default ButtonLogin;