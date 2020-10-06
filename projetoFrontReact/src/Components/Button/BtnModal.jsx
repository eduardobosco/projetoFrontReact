import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const BtnModal = ({ buttonStyle, title, onPress }) => {
    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5FD393',
        padding: 15,
        borderRadius: 50,
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 16,
        fontFamily: 'Tahoma',
        color: '#12132F',
    },
});

export default BtnModal;