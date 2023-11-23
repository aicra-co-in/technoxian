import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import CustomHeader from '../Component/CustomHeader'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import ContectUs from './User';
import Servicess from './Servicess';
import Colors from '../Assets/Theme/Theme';
import Me from './Me';
import TxStore from './TxStore';
import Services from './Services';
import User from './User';

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor:Colors.white,
        tabBarStyle: { backgroundColor: Colors.tersery ,height:60}, 
        tabBarLabelStyle: { fontSize: 13,bottom:5 },
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
              source={require('../Assets/Images/Home.png')}
              resizeMode='contain'
              style={{ width: 20, height: 20, tintColor: Colors.white }}
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
          tabBarLabel: 'RoboClub',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../Assets/Images/8.png')}
              resizeMode='contain'
              style={{ width: 20, height: 20, tintColor: Colors.white }}
            />
            //  <MaterialCommunityIcons name="home" color={color} size={size} 
            // />
          ),
        }}
      />

<Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../Assets/Images/search1.png')}
              resizeMode='contain'
              style={{ width: 25, height: 25, tintColor: Colors.white }}
            />
            //  <MaterialCommunityIcons name="home" color={color} size={size} 
            // />
          ),
        }}
      />
       <Tab.Screen
        name="TxStore"
        component={TxStore}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../Assets/Images/Hand.png')}
              resizeMode='contain'
              style={{ width: 20, height: 20, tintColor: Colors.white }}
            />
            //  <MaterialCommunityIcons name="home" color={color} size={size} 
            // />
          ),
        }}
      />
      

      
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../Assets/Images/me.png')}
              resizeMode='contain'
              style={{ width: 20, height: 20, tintColor: Colors.white }}
            />
            //  <MaterialCommunityIcons name="home" color={color} size={size} 
            // />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
}
export default HomeScreen

const styles = StyleSheet.create({})