import { StyleSheet, Text, View, ScrollView, Image ,TextInput} from 'react-native'
import React, { useEffect } from 'react'
import Colors from '../Assets/Theme/Theme';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { forgrtPassword } from '../restApi/Apiconfig';
import { useUser } from '../../UserContext';
import { Formik } from 'formik';
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
 
  email: Yup.string().email('Invalid email')
    .trim()
    .min(10)
    .max(25)
    .required('Required')
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please Enter Valid Email'),})
    
  
  
  const ForgetPassword = () => {
  const initialValues = {
    email: '',};

  const { email } = useUser();
  const navigation = useNavigation();

  const ForgetApi = async (enteredEmail) => {
    try {
      const formData = new FormData();
      formData.append('email', 'test1@mailinator.com');

      const response = await axios.post(
        'https://api.technoxian.com/development/Forgot_Password.php',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response)
      console.log('emailis--',email)
      if (enteredEmail === email) {
        console.log('Emails match!');
       
        navigation.navigate('ForgetOtp');
      } else {
        console.log('Emails do not match!');
        // Handle the case where the entered email doesn't match the global email
      }
    } catch (error) {
      console.error('Error:', error.response?.data || 'Something went wrong');
    }
  };

  useEffect(() => {
    ForgetApi()
  }, []);

  const handleSubmit = (value) => {
   
    // navigation.navigate('Login')
    console.log(value)
   
  

  };

  return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors,touched,setFieldTouched ,resetForm}) => (
    <ScrollView style={styles.container}>
      <Text style={[styles.heading, { marginTop: 20 }]}>Forget Password?</Text>
      <Image source={require('../Assets/Images/ForgetPassword.png')} style={styles.img} />
      <Text style={styles.text}>Input the email associated with your account.</Text>
      <CustomInput
                  placeholder="Email address"
                  name="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur}
                  error={errors.email}
                />
      <View style={{ marginTop: 20 }}>
        <CustomButton
          title={'Forget Password'}
          backgroundColor={Colors.pink}
          paddingVertical={15}
          // onPress={() => navigation.navigate('ForgetOtp')}
        />
      </View>
    </ScrollView>
       )}
       </Formik>
  );
}

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
