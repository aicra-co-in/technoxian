import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'

const ApplyWrcCompitition = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'white'}}>Comming Soon</Text>
    </View>
  )
}

export default ApplyWrcCompitition

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.black,
        alignItems:'center',
        justifyContent:'center'
    }
})