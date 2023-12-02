import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'
import CustomHeader from '../Component/CustomHeader'
import { useNavigation } from '@react-navigation/native';

const User = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <CustomHeader back={true}
        notification={true}
        // filter={true} 
        // scan={true}
        source={require('../Assets/Images/Back.png')}
        // title={'Home'}
        onPress={() => navigation.goBack()} />
      <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center' }}>Hi, WellCome</Text>
      <View style={styles.userContainer}>

        <TouchableOpacity>

          <Image source={require('../Assets/Images/Boy.png')} style={{ height: 90, width: 90, borderRadius: 50, alignSelf: 'center' }} />
        </TouchableOpacity>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20,marginTop:5 }}>

          <Text style={[styles.text, {color:'red'}]}>
            Username,
          </Text>
          <Text style={styles.text}>
            Rahul Singh
          </Text>
        </View>



        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20,marginTop:5 }}>

          <Text style={[styles.text, {color:'red'}]}>
            Email,
          </Text>
          <Text style={styles.text}>

            Email:abc@gnmail.com
          </Text>
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20,marginTop:5 }}>

          <Text style={[styles.text, {color:'red'}]}>
            Phone No,
          </Text>
          <Text style={styles.text}>
            985 2565 665
          </Text>
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20,marginTop:5 }}>

          <Text style={[styles.text, {marginBottom:20,color:'red'}]}>
            UserID,
          </Text>
          <Text style={styles.text}>
            5444665655
          </Text>
        </View>
      </View>
    </View>


  )
}

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 15,
    // alignItems:'center',
    // justifyContent:'center'
    
  },
  userContainer: {
    // height:'30%',
    // width:'95%',
    backgroundColor: Colors.tersery,
    // alignItems:'center',
    borderRadius: 15,
    marginTop: 20,
    width: '90%',
    alignSelf: "center",
    padding:10
  },
  text: {
    fontSize: 16,
    color: 'white',
    // alignSelf:'center'
  }
})