import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
const SpleshScreen = () => {
    const navigation=useNavigation()
    useEffect(() => {
        // Navigate to the next screen after 2 seconds
        const timer = setTimeout(() => {
          navigation.navigate('Login'); 
        }, 2000);
    
        return () => clearTimeout(timer);
      }, [navigation]);
    
  return (
    <View style={styles.container}>
      <Image source={require('../Assets/Images/splashscreen.png')} resizeMode='cover' style={{height:'100%',width:"100%",alignSelf:'center'}}/>
    </View>
  )
}

export default SpleshScreen

const styles = StyleSheet.create({
    container:{
         flex:1,


    }
})