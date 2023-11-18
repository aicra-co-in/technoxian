import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');

const ForgetPassword = () => {
  const navigation=useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.heading, { marginTop: 30 }]}>Forget </Text>
      <Text style={styles.heading1}>Password ?</Text>
      <Image source={require('../Assets/Images/ForgetPassword.png')} style={styles.img} />
      <Text style={styles.text
      }>Input the email associated with
        your account.</Text>
      <Text style={styles.text1}>
        We will email you a code to reset your
        password.
      </Text>

      <CustomInput placeholder={'Enter Email Address'} />
      <View style={{marginTop:25}}>

      <CustomButton title={'Forget Password'}
        backgroundColor={Colors.black}
        paddingVertical={15}
        
        borderColor={Colors.white} 
        onPress={()=>navigation.navigate('ForgetOtp')}/>
      </View>

    </ScrollView>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
    padding: 30,

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
    height: 220, width: 220, alignSelf: "center", marginTop: 25
  },
  text: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginTop: 25
  },
  text1: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    // marginTop:30,
    padding: 20
  }
})