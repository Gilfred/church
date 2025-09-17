
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native'; // On a ajouté 'StyleSheet' ici


// On crée un composant d'écran simple
// Normalement, ceci serait dans un fichier séparé
function EcranFirst() {
    return (
        <View style={styles.container}>
            <Text>Ceci est l'écran d'accueil</Text>
        </View>
    );
}


const Tab = createBottomTabNavigator();


function Onglet(){
    return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={EcranFirst}/>
            </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        height: '100%', // Utiliser un pourcentage pour la hauteur est une bonne pratique
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Onglet;