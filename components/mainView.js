/**
 * mainView.js
 * 
 * Home screen of the app, what the app enters after startup and on back from other tabs.
 * 
 */
import * as React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import appcolors from '../config/appcolors';


export default function MainView({ navigation }) {

  return (
    <View style={styles.background}>
      <Image style={styles.logo} source={require('../assets/SGlogo.png')}></Image>
      <Text style={styles.text}>Style Guide</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#efefef'
  },
  logo: {
    width: 280,
    height: 280,
    marginTop: '25%',
    marginLeft: '10%'
  },
  text: {
    color: 'black',
    flex: 1,
    width: '100%',
    fontSize: 30,
    textAlignVertical: 'center',
    textAlign: 'center',
  }
});