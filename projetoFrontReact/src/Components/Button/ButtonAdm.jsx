import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonAdm = ({ iconName, title, onPress }) => {
    return (
        <TouchableOpacity style={[styles.button]} onPress={onPress}>
            <Icon name={iconName} size={50} style={styles.icon} />
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#12132F',
        marginHorizontal: 20,
        marginVertical: 20,
        marginTop: 20,
        width: 150,
        borderRadius: 15,
        borderColor: '#5FD393',
        borderWidth: 1,
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#5FD393',
        marginBottom: 30,
        fontFamily: 'Tahoma',
    },
    icon: {
        alignSelf: 'center',
        color: '#5FD393',
        marginTop: 30,
    },
});

export default ButtonAdm;