import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { styles } from './styles';

var followers = 11;
var following = 19;

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.button}>
        <AntDesign 
          name="sharealt" 
          style={styles.icon} 
        />
        <Icon 
          name="settings" 
          style={styles.icon} 
        />
      </View>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={require('../../assets/avatar.png')}
        />
        <Text style={styles.name}>kelvinjsus</Text>
      </View>
      <View style={styles.profile}>
        <Text style={styles.follows}>
          <AntDesign 
            name="user" 
            style={{color: '#9fa1ab', fontSize: 18}}
          />
          <Text style={styles.num}> {followers}</Text>
          <Text> followers •</Text>
          <Text style={styles.num}> {following}</Text>
          <Text> following </Text>
        </Text>
      </View>
    </View>
  );
}