import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'

const ShowSuccesspayment = () => {
  return (
      
    <View style={styles.container}>
      <Image source={require('../Assets/Images/success.png')} style={{height:70,width:70}}/>
      <Text style={{color:'white',fontSize:25,fontWeight:'bold',marginTop:10}}>Payment SuccessFul!</Text>
    </View>
  )
}

export default ShowSuccesspayment

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.black,
        alignItems:'center',
        justifyContent:'center'
    }
})