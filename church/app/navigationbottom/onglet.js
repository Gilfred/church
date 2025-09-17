
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Text } from 'react-native'; 
import { HeaderShownContext } from '@react-navigation/elements';



function EcranFirst() {
    return (
        <View>
            <Text>
                ce texte est pour le home
            </Text>
        </View>
    );
}

function EcranSecond(){
    return(
        <View>
            <Text>
                ce texte est pour le settings
            </Text>
        </View>
    );
}


const Tab = createBottomTabNavigator();


function Onglet(){
    return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={EcranFirst}/>
                <Tab.Screen name="Settings" component={EcranSecond}/>
            </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    onglet:{
        color: 'blue',
        backgroundColor:'red',
        fontSize: 20,
        marginTop: 50,
        textAlign: 'center',
    },
});

export default Onglet;