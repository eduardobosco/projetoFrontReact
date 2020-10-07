import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: null,
    height: null,
  },
  pencet: {
    fontSize: 65,
    color: '#6AC0C9',
    fontFamily: 'Tahoma Bold',
    borderLeftWidth: 1,
    borderLeftColor: '#6Ac0c9',
    paddingLeft: 15,
  },
  logo: {
    display: 'flex',
    width: 70,
    height: 70,
    marginHorizontal: 10,
    alignSelf: 'center',
    marginLeft: 30,
  },
  slogan: {
    fontSize: 20,
    color: '#6AC0C9',
    fontFamily: 'Tahoma',
    marginHorizontal: 35,
    alignSelf: 'center',
    marginTop: 10,
  },
  container: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerLogin: {
    marginHorizontal: 60,
    marginTop: 30,
  },
  loginText: {
    borderBottomWidth: 1,
    borderBottomColor: '#295A83',
    color: '#fff',
    marginTop: 45,
  },
  forgoten: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#5FD393',
    marginTop: 30,
    marginBottom: 50,
  },
});

export {styles};
