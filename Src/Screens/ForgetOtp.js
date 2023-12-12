import { StyleSheet, Text, View, ScrollView, Image, Dimensions,SafeAreaView } from 'react-native'
import React, {useEffect, useState} from 'react';
import Colors from '../Assets/Theme/Theme';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import CodeInputComponent from '../Component/CodeInputComponent';
const { height, width } = Dimensions.get('window');
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'; 
import axios from 'axios';
import { OtpVarificationApi } from '../restApi/Apiconfig';
import CustomHeader from '../Component/CustomHeader';
const CELL_COUNT = 4;

const ForgetOtp = () => {
  const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
    const navigation=useNavigation();


    const OtpApi = async (value) => {
      try {
        const formData = new FormData();
        formData.append('otpcode', value);
  
        const response = await axios.post(
          OtpVarificationApi,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        if(response.data.error===false){
          navigation.navigate('ResetPassword')
        }
        // console.log('Response:', response);
      } catch (error) {
        console.error('Error:', error);
      }
  
    };

useEffect(()=>{
// OtpApi()
},[])

const handleSubmit = () => {
  // Call the OTP verification API when the Submit button is pressed
  OtpApi(value);
};



  return (
    <ScrollView style={styles.container1}>
         <CustomHeader
        back={true}
        // notification={true}
        // scan={true}
        source={require('../Assets/Images/Back.png')}
        // title={'User'}
        onPress={() => navigation.goBack()}
      />
      <Text style={[styles.heading, { marginTop: 20 }]}><Text style={{color:Colors.pink}}>Reset Password </Text> Varification</Text>
      
      <Image source={require('../Assets/Images/Verification.png')} style={styles.img} resizeMode='contain' />
      <Text style={styles.text
      }>Enter the <Text   style={{color:Colors.pink}}>verification code</Text> we just sent you on your email address.</Text>
       <CodeField
            ref={ref}
            {...props}
           
            value={value}
            onChangeText={(code) => setValue(code)}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor/> : null)}
              </Text>
            )}
          />

      <Text style={styles.text1}>Didn’t receive and code?<Text style={{color:Colors.pink}}> Resend</Text> </Text>
      <View style={{marginTop:20}}>

      <CustomButton title={'Reset Password'}
        backgroundColor={Colors.pink}
        paddingVertical={15}
        
        // borderColor={Colors.white} 
        onPress={handleSubmit}/>
      </View>
    </ScrollView>
  )
}

export default ForgetOtp

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      backgroundColor: Colors.black,
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
      fontSize: 18,
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
    },
    root: {flex: 1, padding:10},
    title: {textAlign: 'center', fontSize: 30,color:Colors.white},
    codeFieldRoot: {marginTop: 20},
    cell: {
      width: 50,
      height: 50,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderColor: Colors.white,
      textAlign: 'center',
      backgroundColor:'white',
      alignItems:'center'
    },
    focusCell: {
      borderColor: Colors.white,
    },
    container:{
         flex:1,
      backgroundColor:'white',
        
         padding:20
            },
            text:{
            fontSize:16,
            color:Colors.white,
            textAlign:'center',
            // padding:20
        }
  })