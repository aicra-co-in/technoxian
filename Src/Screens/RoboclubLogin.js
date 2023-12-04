import React,{useEffect} from 'react';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView ,Text} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Assets/Theme/Theme';
import CustomHeader from '../Component/CustomHeader';
import axios from 'axios';

const SignupSchema = Yup.object().shape({
  userId: Yup.string().min(10).max(25).required('Required'),
  Password: Yup.string()
    .required('Required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must contain at least one letter, one number, and one special character, and be at least 8 characters long.'
    ),
});

const RoboclubLogin = () => {
  const navigation = useNavigation();

  const handleLoginRequest = async (values) => {
    console.log(values)
    try {
      const formData = new FormData();
      formData.append('userId', values.userId);
      formData.append('Password', values.Password);

      const response = await axios.post(
        'https://api.technoxian.com/development/login.php',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Response:', response.data);
      if (response.data.error === false) {
        navigation.navigate('RoboClubDeshBoard', {
            userId: values.userId,
          });
      } else {
        console.error('Login Error:', response.data.message);
        // You might want to display an error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const initialValues = {
    userId: '',
    Password: '',
  };

useEffect(()=>{
handleLoginRequest()
},[])


  const handleSubmit = (values) => {
     handleLoginRequest(values);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: 'red' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={{ flex: 1 }}>
            <ScrollView style={styles.signupcontainer}>
              <View style={styles.form}>
                <CustomHeader
                  back={true}
                  source={require('../Assets/Images/Back.png')}
                  title={'TECHNOXIAN ROBOCLUB LOGIN'}
                  onPress={() => navigation.navigate('HomeScreen')}
                />

                <CustomInput
                  placeholder="Email address"
                  name="userId"
                  value={values.userId}
                  onChange={handleChange('userId')}
                  onBlur={handleBlur}
                  error={errors.userId}
                />

                <CustomInput
                  placeholder="Password"
                  name="Password"
                  value={values.Password}
                  onChange={handleChange('Password')}
                  onBlur={handleBlur}
                  error={errors.Password}
                  secureTextEntry={true}
                />

                <View style={{ marginTop: 15 }}>
                  <CustomButton
                    title={'Login'}
                    backgroundColor={Colors.pink}
                    paddingVertical={15}
                    onPress={handleSubmit}
                  />
                </View>

                <Text style={styles.text2}>
                  Don’t have an account?{' '}
                  <Text style={{ color: Colors.pink }} onPress={() => navigation.navigate('RoboclubRegistration')}>
                    Sign Up
                  </Text>
                </Text>
              </View>
            </ScrollView>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 20,
  },
  signupcontainer: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  text2: {
    color: Colors.white,
    fontSize: 14,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingBottom: 20,
  },
});

export default RoboclubLogin;
