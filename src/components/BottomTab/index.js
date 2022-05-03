import React from 'react';

import {
  View,
  Text
} from 'react-native';

import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';

export function BottomTab() {
  return (
    <View style={styles.container}>
      <View style={styles.bottomTab}>
        <View style={styles.item}>
          <Octicons 
            name="home" 
            style={styles.iconItem} 
          />
          <Text style={styles.textItem}>Home</Text>
        </View>
        <View style={styles.item}>
          <Ionicons 
            name="notifications-outline" 
            style={styles.iconItem} 
          />
          <Text style={styles.textItem}>Notifications</Text>
        </View>
        <View style={styles.item}>
          <Octicons 
            name="telescope" 
            style={styles.iconItem} 
          />
          <Text style={styles.textItem}>Explore</Text>
        </View>
        <View style={styles.item}>
          <FontAwesome 
            name="user" 
            style={styles.iconSelected} 
          />
          <Text style={styles.textSelected}>Profile</Text>
        </View>
      </View>
    </View>
  );
}