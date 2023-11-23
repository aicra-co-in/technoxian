import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'

const TxStore = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'white',fontSize:20}}>TxStore Working On it</Text>
    </View>
  )
}

export default TxStore

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.Primary,
    padding:15,
    alignItems:'center',
    justifyContent:'center'
  }
})