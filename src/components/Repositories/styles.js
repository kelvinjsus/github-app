import { StyleSheet } from 'react-native';
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#17181c',
    width: '100%',
    marginTop: 16,
    paddingTop: 20
  },
  pinned:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '90%'
  },
  icon: {
    fontSize: 22,
    color: '#bdc0c6'
  },
  list:{
    alignSelf: 'flex-end',
    width: '97%',
    paddingTop: 10,
    paddingBottom: 10
  },
  item: {
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#201f24',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    height: 150,
    width: 320
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 18,
    height: 18,
    borderRadius: 9
  },
  name: {
    fontSize: 18,
    color: '#9fa1ab',
    marginLeft: 8
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fdfdfd'
  },
  description: {
    color: '#dededf',
    fontSize: 18
  },
  info: {
    flexDirection: 'row',
    marginTop: 24
  },
  star:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  type:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  file:{
    fontSize: 16,
    color: '#9fa1ab',
    marginLeft: 8
  },
  separator: {
    borderBottomWidth: 1, 
    borderBottomColor: '#1e1f23',
    width: '100%'
  }
});