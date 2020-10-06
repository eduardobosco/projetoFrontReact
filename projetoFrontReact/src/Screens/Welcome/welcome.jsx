import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const Welcome = () => {
    return (

        <ImageBackground style={styles.imageBackground}
            resizeMode='cover'
            source={require('../../Assets/Images/background.png')}>

            <View style={styles.container}>

                <Image source={require('../../Assets/Images/logo.png')}
                    style={styles.logo}
                    resizeMode='contain' />

                <Text style={styles.pencet}>Pencet</Text>

            </View>

            <View>
                <Text style={styles.slogan}>Tecnologia que facilita a vida!</Text>
            </View>

        </ImageBackground>

    );
};

const styles = StyleSheet.create({

    imageBackground: {
        flex: 1,
        width: null,
        height: null,
    },

    container: {
        marginTop: 250,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        display: 'flex',
        width: 70,
        height: 70,
        marginHorizontal: 10,
        alignSelf: 'center',
        marginLeft: 30,
    },
    pencet: {
        fontSize: 65,
        color: '#6AC0C9',
        fontFamily: 'Tahoma Bold',
        borderLeftWidth: 1,
        borderLeftColor: '#6Ac0c9',
        paddingLeft: 15,


    },
    slogan: {
        fontSize: 22,
        color: '#6AC0C9',
        fontFamily: 'Tahoma',
        marginHorizontal: 35,
        alignSelf: 'center',
        marginTop: 10,
    }

});

export default Welcome