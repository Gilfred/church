import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {stack} from 'expo-router';
import Onglet from './bottom/onglet';

// import { View, Text, StyleSheet, Image } from '../assets/images/';

function Layout() {
  return (
    <View>
      <Text style={styles.container}>  
        nous sommes l'église. je suis le layout.
      </Text>
      <Image
        source={require('../assets/images/react-logo.png')}
        style={styles.mon_image}
      /> 
      <Text style={styles.second_text}>
        Je suis fier de ce que je fais et je suis fier d'être un bon developpeur react native.
        Que voulez-vous de moi?
      </Text>
              
      <Onglet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'green',
    padding: 20, 
    color: 'yellow',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 50,
  },
  mon_image:{
    width: 200,
    height: 200,
    backgroundColor:'white',
    marginLeft: 100,
    marginTop: 50,
  },
  second_text:{
    color:"white",
    backgroundColor:'green',
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: 50,
    marginLeft: 10,
    padding: 20,
    textAlign: 'center',
    transform: [{ rotate: '5deg' }],
    borderWidth: 2,
    // borderColor: 'yellow',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
  }
});

export default Layout;