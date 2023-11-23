import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import CodeInputComponent from '../Component/CodeInputComponent';
const { height, width } = Dimensions.get('window');

const ForgetOtp = () => {
    const navigation=useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.heading, { marginTop: 20 }]}>Reset Password Varification</Text>
      
      <Image source={require('../Assets/Images/Verification.png')} style={styles.img} resizeMode='contain' />
      <Text style={styles.text
      }>Enter the verification code we just sent you on your email address.</Text>
      <CodeInputComponent/>

      <Text style={styles.text1}>Didn’t receive and code?<Text style={{color:Colors.blue}}> Resend</Text> </Text>
      <View style={{marginTop:20}}>

      <CustomButton title={'Reset Password'}
        backgroundColor={Colors.blue}
        paddingVertical={15}
        
        // borderColor={Colors.white} 
        onPress={()=>navigation.navigate('ResetPassword')}/>
      </View>
    </ScrollView>
  )
}

export default ForgetOtp

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
      fontSize: 20,
      fontWeight: '500',
      fontFamily: 'Poppins-Regular',
      // textAlign: 'center',

      marginTop: 15
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