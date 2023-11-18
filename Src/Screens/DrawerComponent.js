import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
const DrawerComponent = () => {
  const Drawer=createDrawerNavigator();
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    {/* <Drawer.Screen name="Article" component={Article} /> */}
  </Drawer.Navigator>
  )
}

export default DrawerComponent

const styles = StyleSheet.create({})