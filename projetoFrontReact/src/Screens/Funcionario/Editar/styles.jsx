import { StyleSheet } from 'react-native';

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
        marginLeft: 45,
    },
    headerImage: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        alignSelf: 'flex-end',
        marginRight: 10,
        marginVertical: 10,
    },
    container: {
        backgroundColor: '#12132F',
        flex: 1,
    },
    containerInfo: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 20,
        marginTop: 100,
        marginHorizontal: 15,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },
    containerInfoText: {
        marginTop: 115,
    },
    infoTextNome: {
        fontFamily: 'Tahoma',
        fontSize: 19,
        color: '#000',
        marginBottom: 10,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    infoText: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    footer: {
        height: 80,
        backgroundColor: '#fff',
    },
    foto: {
        alignSelf: 'center',
        position: 'absolute',
        top: -70,
        width: 150,
        height: 150,
    },
    footerText: {
        fontFamily: 'Tahoma',
        fontSize: 19,
        marginHorizontal: 30,
        color: '#fff',
        marginTop: 5,
        marginBottom: 10,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#12132F'
    },
    btnIcon: {
        alignSelf: 'center',
        marginHorizontal: 30,
    },
    textModal: {
        fontSize: 24,
        fontFamily: 'Tahoma',
        color: '#12132F',
        alignSelf: 'center',
        marginTop: 15,
    },
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
});

export { styles };