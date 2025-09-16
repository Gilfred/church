import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// import { View, Text, StyleSheet, Image } from '../assets/images/';

function Layout() {
  return (
    <View>
      <Text style={styles.container}>  
        nous sommes l'église.
      </Text>
      <Image
        source={require('../assets/images/react-logo.png')}
        style={styles.mon_image}
      /> 
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
});

export default Layout;