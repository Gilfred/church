import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Onglet from './navigationbottom/onglet';
import { NavigationContainer } from '@react-navigation/native';

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
      
        <Onglet/>
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'blue',
    padding: 20, 
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 50,
  },
  mon_image:{
    width: 200,
    height: 200,
    backgroundColor:'black',
    marginLeft: 100,
    marginTop: 50,
  },
  second_text:{
    color:"white",
    backgroundColor:'green',
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: 70,
    marginLeft: 30,
    padding: 40,
    textAlign: 'center',
    transform: [{ rotate: '5deg' }],
    borderWidth: 2,
    // borderColor: 'yellow',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
  }
});

export default Layout;