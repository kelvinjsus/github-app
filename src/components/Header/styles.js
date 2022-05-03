import { StyleSheet } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#17181c',
    width: '100%',
    height: 210
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 50,
    width: '95%'
  },
  icon:{
    color: '#3692f9',
    fontSize: 24,
    marginLeft: 30
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%'
  },
  avatar: {
    width: 64,
    height: 64,
    borderWidth: 2,
    borderRadius: 32
  },
  name: {
    color: '#9fa1ab',
    fontSize: 18,
    marginLeft: 16
  },
  follows: {
    marginTop: 14,
    color: '#e1e1e9',
    fontSize: 16,
    fontWeight: '600'
  },
  num:{
    fontWeight: 'bold',
    color: '#fff'
  }
});