import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 10
  },
  viewimg: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5FD393',
    width: 90,
    height: 90,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 20
  },
  logo: {
    width: 30,
    height: 50,
    resizeMode: 'stretch',
  },
  viewtxt: {
    paddingVertical: 30,
  },
  nome: {
    fontSize: 20,
    width: 230,
  },
  cargo: {
    fontSize: 16,
  },
});

export { styles };