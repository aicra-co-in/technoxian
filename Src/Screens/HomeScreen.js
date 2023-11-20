import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import CustomHeader from '../Component/CustomHeader'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContectUs from './ContectUs';
import Servicess from './Servicess';
import Colors from '../Assets/Theme/Theme';
import Me from './Me';

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: { backgroundColor: Colors.tersery ,height:70}, 
        tabBarLabelStyle: { fontSize: 18 },
        tabBarIconStyle: { },
        headerShown:false
     
      }}
    >
       <Tab.Screen
        name="Me"
        component={Me}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../Assets/Images/me.png')}
              resizeMode='contain'
              style={{ width: size, height: size, tintColor: color }}
            />
            //  <MaterialCommunityIcons name="home" color={color} size={size} 
            // />
          ),
        }}
      />
      <Tab.Screen
        name="Servicess"
        component={Servicess}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../Assets/Images/me.png')}
              resizeMode='contain'
              style={{ width: size, height: size, tintColor: color }}
            />
            //  <MaterialCommunityIcons name="home" color={color} size={size} 
            // />
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