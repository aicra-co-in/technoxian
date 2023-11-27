import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'
import RoboclubRegistration from './RoboclubRegistration'

const Servicess = () => {
  return (
    <View style={styles.container}>
      <RoboclubRegistration/>
    </View>
  )
}

export default Servicess

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.black,
    // padding:15,
    alignItems:'center',
    justifyContent:'center'
  }
})