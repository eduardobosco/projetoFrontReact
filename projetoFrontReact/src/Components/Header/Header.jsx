import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>

            <View style={styles.headerText}>
                <Text style={styles.headerText1}>Pencet </Text>
            </View>

            <View>
                <Image style={styles.headerImage} source={require('../../Assets/Images/logo.png')}></Image>
            </View>

        </View>
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
        marginLeft: 55,
    },
    headerImage: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        alignSelf: 'flex-end',
        marginRight: 10,
        marginVertical: 10,
    },
});

export default Header;