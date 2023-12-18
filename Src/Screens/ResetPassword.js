import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ResetPassApi } from '../restApi/Apiconfig';
import CustomHeader from '../Component/CustomHeader';
const SignupSchema = Yup.object().shape({



  password: Yup.string().required('Required').matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/,
    'Password must contain at least one letter, one number, and one special character, and be at least 8 characters long.'
  ),
  resetpassword: Yup.string().required('Required').matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/,
    'Password must contain at least one letter, one number, and one special character, and be at least 8 characters long.'
  ),
});

const ResetPassword = () => {
  const navigation = useNavigation()
  const initialValues = {


    password: '',
    resetpassword: '',
    // Define your initial form values here
    // For example:
    // fieldName: '',
  };


  const handleLoginRequest = async (values) => {
    console.log("jhgdjhsgdhsghg", values)
    try {
      const formData = new FormData();

      formData.append('password', values.password);
      formData.append('confirm_password', values.resetpassword);

      const response = await axios.post(
        ResetPassApi,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Response:', response);
      if (response.data.error === false) {
        navigation.navigate('Login')
      }
      // Handle the response here
    } catch (error) {
      console.error('Error:', error.response?.data || 'Something went wrong');
      // Handle errors here
    }
  };


  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission here
    // console.log(values);
    // if(values.data.error===false){

    //     navigation.navigate('HomeScreen');
    // }

    handleLoginRequest(values)
    // resetForm();
  };
  return (


    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, resetForm }) => (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
           <CustomHeader
        back={true}
         notification={true}
         scan={true}
        source={require('../Assets/Images/Back.png')}
        // title={'User'}
        onPress={() => navigation.goBack()}
      />
          <Text style={[styles.heading, { marginTop: 10 }]}> <Text style={{ color: Colors.pink }}> Reset</Text> Password
          </Text>


          <Image source={require('../Assets/Images/ForgetPassword.png')} style={styles.img} />
          <Text style={styles.text
          }>Try creating a simple <Text style={{ color: Colors.pink }}>Password </Text>  that you can remember. </Text>
          <CustomInput
            placeholder="Reset Password"
            name="password"
            value={values.password}
            onChange={handleChange('password')}
            onBlur={handleBlur}
            error={errors.password}
          />



          <CustomInput
            placeholder=" Confirm Reset Password"
            name="resetpassword"
            value={values.resetpassword}
            onChange={handleChange('resetpassword')}
            onBlur={handleBlur}
            error={errors.resetpassword}

          />
          <View style={{ marginTop: 20 }}>


            <CustomButton title={'Reset Password'}
              backgroundColor={Colors.pink}
              paddingVertical={15}
              onPress={handleSubmit}

            />
          </View>

        </ScrollView>
      )}
    </Formik>
  )
}

export default ResetPassword

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
    // textAlign: 'center',
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