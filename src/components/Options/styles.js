import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#17181c',
    width: '100%',
    height: 180
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%'
  },
  joint: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  areaIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: 36,
    width: 36
  },
  iconItem: {
    fontSize: 20,
    color: '#fff'
  },
  textItem: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10
  },
  varItem: {
    fontSize: 16,
    color: '#9fa1ab'
  },
  repo: {
    backgroundColor: '#41434e'
  },
  org: {
    backgroundColor: '#fd893c'
  },
  starred: {
    backgroundColor: '#fcca19'
  }
});