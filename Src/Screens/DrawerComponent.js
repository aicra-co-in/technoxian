import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createAppContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import WrcChalanges from './WrcChalanges';
import Community from './Community';

const InnerDrawer = createDrawerNavigator();

const InnerDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <DrawerItem label="Inner Drawer Screen" onPress={() => props.navigation.navigate('InnerDrawerScreen')} />
  </DrawerContentScrollView>
);

const InnerDrawerScreens = () => (
  <InnerDrawer.Navigator drawerContent={(props) => <InnerDrawerContent {...props} />}>
    <InnerDrawer.Screen name="InnerDrawerScreen" component={() => <View><Text>Inner Drawer Screen</Text></View>} />
  </InnerDrawer.Navigator>
);

const DrawerComponent = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HOME SCREEN" component={HomeScreen} />
      {/* <Drawer.Screen name="InnerDrawer" component={InnerDrawerScreens} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerComponent;

const styles = StyleSheet.create({});
