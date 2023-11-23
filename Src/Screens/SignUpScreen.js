import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'
import SignUp from './SignUp'


const SignUpScreen = () => {
  return (
    <View  style={styles.container}>
      {/* <Text>SignUpScreen</Text> */}
      <Image source={require('../Assets/Images/Signup.png')} resizeMode='contain' style={{height:'49%',width:'100%',bottom:5}}/>
      <View style={{flex:1}}> 
      <SignUp/>

      </View>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container:{
     flex:2,
    backgroundColor:Colors.white,
  }
})