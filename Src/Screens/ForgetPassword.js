import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../Assets/Theme/Theme';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { ForgetpassApi, forgrtPassword } from '../restApi/Apiconfig';

import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomHeader from '../Component/CustomHeader';
const SignupSchema = Yup.object().shape({


  email: Yup.string().email('Invalid email').trim()
    .min(10)
    .max(25)
    .required('Required')
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please Enter Valid Email'),

});

const ForgetPassword = () => {
  const initialValues = {
    email: '',
  };

  const navigation = useNavigation();

  // const ForgetApi = async (value) => {
  //   console.log("jhgdjhsgdhsghg", value.email);
  //   try {
  //     const data = value.email;
  //     console.log('data',data)


  //     const response = await axios.post(
  //       'https://api.technoxian.com/development/Forgot_Password.php',

  //     data,
  //       {
  //         // headers: {
  //         //   ...data.getHeaders(),
  //         // },
  //       }
  //     );


  //     console.log(response);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };


  const ForgetApi = async (value) => {
    try {
      const formData = new FormData();
      formData.append('Email',value.Email);

      const response = await axios.post(
       ForgetpassApi,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if(response.data.error===false){
        navigation.navigate('ForgetOtp')
      }
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }

  };



  const handleSubmit = (values) => {
    console.log(values);
    ForgetApi(values);
    // navigation.navigate('ForgetOtp')
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <ScrollView style={styles.container}>
          <CustomHeader
        back={true}
        // notification={true}
        // scan={true}
        source={require('../Assets/Images/Back.png')}
        // title={'User'}
        onPress={() => navigation.goBack()}
      />
          <Text style={[styles.heading, { marginTop: 20 }]}>Forget Password?</Text>
          <Image source={require('../Assets/Images/ForgetPassword.png')} style={styles.img} />
          <Text style={styles.text}>Input the email associated with your account.</Text>
          <CustomInput
            placeholder="Email address"
            name="email"
            value={values.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            error={errors.email}
          />
          <View style={{ marginTop: 20 }}>
            <CustomButton
              title={'Forget Password'}
              backgroundColor={Colors.pink}
              paddingVertical={15}
              onPress={handleSubmit}
            />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  container: {
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
  img: {
    height: 210, width: 210, alignSelf: "center", marginTop: 15
  },
  text: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginTop: 15
  },
});

export default ForgetPassword;
