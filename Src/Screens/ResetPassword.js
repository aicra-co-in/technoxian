import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');

const ResetPassword = () => {
  return (

    
    <ScrollView style={styles.container}>
      <Text style={[styles.heading, { marginTop: 10 }]}>Reset Password
 </Text>
      

      <Image source={require('../Assets/Images/ForgetPassword.png')} style={styles.img} />
      <Text style={styles.text
      }>Try creating a simple password that you can reember. and complicated for someone to guess.</Text>
      <CustomInput placeholder={'Enter New Password'} />
      <CustomInput placeholder={'Confirm Password'} />
      <View style={{marginTop:20}}>

      <CustomButton title={'Forget Password'}
        backgroundColor={Colors.blue}
        paddingVertical={15}
        
        // borderColor={Colors.white} 
       />
      </View>

    </ScrollView>
   
  )
}

export default ResetPassword

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.Primary,
      padding: 20,
  
    },
    heading: {
      color: Colors.white,
      fontSize: 32,
      fontWeight: '400',
      fontFamily: 'Poppins-Regular',
    },
    heading1: {
      color: Colors.white,
      fontSize: 40,
      fontWeight: '500',
      fontFamily: 'Poppins-Regular',
    },
    img: {
      height: 210, width: 210, alignSelf: "center", 
    },
    text: {
      color: Colors.white,
      fontSize: 16,
      fontWeight: '500',
      fontFamily: 'Poppins-Regular',
      textAlign: 'center',
      marginTop: 10
    },
    text1: {
      color: Colors.white,
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'Poppins-Regular',
      textAlign: 'center',
      // marginTop:30,
      padding: 15
    }
  })