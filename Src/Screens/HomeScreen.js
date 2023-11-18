import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../Component/CustomHeader'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContectUs from './ContectUs';
import Servicess from './Servicess';

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: { backgroundColor: '#3F51B5' }, 
      }}
    >
      <Tab.Screen
        name="Servicess"
        component={Servicess}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="home" color={color} size={size} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="ContectUs"
        component={ContectUs}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="bell" color={color} size={size} 
            
            />
          ),
          tabBarBadge: 3,
        }}
      />
     
    </Tab.Navigator>
  );
}
export default HomeScreen

const styles = StyleSheet.create({})