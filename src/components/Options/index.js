import React from 'react';

import {
  View,
  Text
} from 'react-native';

import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';

let repo = 5;
let org = 1;
let starred = 76;

export function Options() {
  return (
    <View style={styles.container}>

      <View style={styles.item}>
        <View style={styles.joint}>
          <View style={[styles.areaIcon, styles.repo]}>
            <Octicons 
              name="repo"
              style={styles.iconItem}
            />
          </View>
          <Text style={styles.textItem}>Repositories</Text>
        </View>
        <Text style={styles.varItem}>{repo}</Text>
      </View>

      <View style={styles.item}>
        <View style={styles.joint}>
          <View style={[styles.areaIcon, styles.org]} >
            <Octicons
              name="organization"
              style={styles.iconItem}
            />
          </View>
          <Text style={styles.textItem}>Organizations</Text>
        </View>
        <Text style={styles.varItem}>{org}</Text>
      </View>
      
      <View style={styles.item}>
        <View style={styles.joint}>
          <View style={[styles.areaIcon, styles.starred]}>
            <FontAwesome 
              name="star-o"
              style={styles.iconItem}
            />
          </View>
          <Text style={styles.textItem}>Starred</Text>
        </View>
        <Text style={styles.varItem}>{starred}</Text>
      </View>
    </View>
  );
}