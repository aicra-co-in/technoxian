import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'
import CustomHeader from '../Component/CustomHeader'
import { useNavigation } from '@react-navigation/native';

const User = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      
      <CustomHeader back={true} 
      notification={true} 
      // filter={true} 
      scan={true}  
      source={require('../Assets/Images/Back.png')}
      // title={'Home'}
      onPress={()=>navigation.navigate('HomeScreen')}/>
      <Text style={{fontSize:20,color:'white',alignSelf:'center'}}>Hi, Well Come</Text>
      <View style={styles.userContainer}>
     <View style={{}}>
      <TouchableOpacity>

      <Image source={require('../Assets/Images/Boy.png')}  style={{height:90,width:90,borderRadius:50,alignSelf:'center'}}/>
      </TouchableOpacity>
     <View>

     
      <Text style={[styles.text,{marginTop:8}]}>
        Name:Abc,
        </Text>
        <Text style={styles.text}>
        Email:abc@gnmail.com
      </Text>
      <Text style={styles.text}>
        Phone:1234567890
      </Text>
      </View>
     </View>
      </View>
    </View>
  )
}

export default User;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.black,
    padding:15,
    // alignItems:'center',
    // justifyContent:'center'
  },
  userContainer:{
    // height:'30%',
    // width:'95%',
    backgroundColor:Colors.tersery,
    alignItems:'center',
    borderRadius:15,
    marginTop:20,
     padding:20
  },
  text:{
    fontSize:16,
    color:'white',
    // alignSelf:'center'
  }
})