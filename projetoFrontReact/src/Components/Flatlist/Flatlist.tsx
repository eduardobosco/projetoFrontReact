import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const Item = ({ id, nome, cpf, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress}>

            <View style={styles.item}>
                <View style={styles.viewimg}>
                    <Image style={styles.logo} source={require('../../Assets/Images/logo.png')}></Image>
                </View>
                <View style={styles.viewtxt}>
                    <Text style={styles.nome}>Nome: {nome}</Text>
                    <Text style={styles.cargo}>CPF: {cpf}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
};

export default Item;