import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#12132F',
    flex: 1,
  },
  title: {
    fontSize: 26,
    color: '#5FD393',
    alignSelf: 'center',
    padding: 20,
    fontFamily: 'Tahoma'
  },
  flat: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5FD393',
    color: '#fff',
  },
  button: {
    backgroundColor: '#5FD393',
    borderRadius: 50,
    width: 300,
    marginVertical: 20,
    alignSelf: 'center',
  },
  buttonText: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#12132F',
    alignSelf: 'center',
    fontFamily: 'Tahoma',
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
    fontSize: 25,
    marginHorizontal: 20,
    marginTop: 20,
  },

  btnModal: {
    backgroundColor: '#5FD393',
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 80,
    marginTop: 30,
  },
  textBtnModal: {
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Tahoma',
    color: '#12132F',
  },
});

export { styles };
