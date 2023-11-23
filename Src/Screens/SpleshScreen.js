import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Colors from '../Assets/Theme/Theme'
const SpleshScreen = () => {
    const navigation=useNavigation()
    useEffect(() => {
        // Navigate to the next screen after 2 seconds
        const timer = setTimeout(() => {
          navigation.navigate('Splesh1'); 
        }, 2000);
    
        return () => clearTimeout(timer);
      }, [navigation]);
    
  return (
    <View style={styles.container}>
      <View style={styles.containt}>
      {/* <Image source={require('../Assets/Images/Logo.png')} resizeMode='contain' style={{height:186,width:189}}/>
      <Image source={require('../Assets/Images/TX-Logo.png')} resizeMode='contain' style={{height:65,width:323}}/> */}
      <Image source={require('../Assets/Images/SplashScreen.png')} resizeMode='cover' style={{height:'100%',width:"100%",alignSelf:'center'}}/>
    </View>
     </View>
  )
}

export default SpleshScreen

const styles = StyleSheet.create({
    container:{
         flex:1,
         backgroundColor:Colors.Primary,
       


    },
    containt:{
      flex:1,
      alignItems:'center',
      gap:30,
      justifyContent:'center',
      // marginTop:30,
    }
})