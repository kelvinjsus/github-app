import React from 'react';

import {
  View,
  StatusBar
} from 'react-native';

import { Header } from '../../components/Header';
import { Repositories } from '../../components/Repositories';
import { BottomTab } from '../../components/BottomTab';
import { Options } from '../../components/Options';

import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#17181c"
        // translucent={true}
      />
      <Header />
      <Repositories />
      <Options />
      <BottomTab />
    </View>
  );
}