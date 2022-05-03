import React from 'react';

import {
  View,
  FlatList,
  Text,
  Image
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'menu-expo-cli',
    description: 'Menu criado para agilizar no pro...',
    file: 'Batchfile',
    color: '#c1f02e'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'calcIMC',
    description: 'Calculadora de IMC utilizando Re...',
    file: 'JavaScript',
    color: '#f1e15a'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'phanpy',
    description: 'site feito em php que simula um ...',
    file: 'PHP',
    color: '#687cbb'
  },
];

const Item = ({ title, description, file, color}) => (
  <View style={styles.item}>
    <View style={styles.user}>
      <Image 
        style={styles.avatar} 
        source={require('../../assets/avatar.png')}
      />
      <Text style={styles.name}>kelvinjsus</Text>
    </View>
    <Text style={styles.title}>
      {title}
    </Text>
    <Text style={styles.description}>
      {description}
    </Text>
    <View style={styles.info}>
      <View style={styles.star}>
        <FontAwesome 
          name="star" 
          style={{color: '#ffd64c', fontSize: 16}}
        />
        <Text style={{color: '#9fa1ab', marginLeft: 8, marginRight: 8}}>
          4
        </Text>
      </View>
      <View style={styles.type}>
        <FontAwesome 
          name="circle"
          style={{color: '#f3f', fontSize: 12}}
        />
        <Text style={styles.file}>{file}</Text>
      </View>
    </View>
  </View>
);

export function Repositories() {

  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} file={item.file} color={item.color}/>
  );

  return (
    <View style={styles.container}>
      <View style={styles.pinned}>
        <AntDesign 
          name="pushpino"
          style={styles.icon} 
        />
        <Text style={{color: '#fff', fontSize: 16, fontWeight: '700', marginLeft: 10}}>
          Pinned
        </Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>
      <View style={styles.separator}></View>
    </View>
  );
}