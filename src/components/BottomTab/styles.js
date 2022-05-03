import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#17181c',
    width: '100%',
    height: 60,
    marginTop: 'auto'
  },
  bottomTab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%'
  },
  item: {
    alignItems: 'center'
  },
  iconItem: {
    fontSize: 24,
    color: '#505058'
  },
  iconSelected: {
    fontSize: 24,
    color: '#2a8eff'
  },
  textSelected: {
    fontSize: 14,
    color: '#2a8eff'
  },
  textItem: {
    fontSize: 14,
    color: '#505058'
  }
});