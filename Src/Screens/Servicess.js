import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'

const Servicess = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'white',fontSize:20}}>Servicess</Text>
    </View>
  )
}

export default Servicess

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.Primary,
    padding:15,
    alignItems:'center',
    justifyContent:'center'
  }
})