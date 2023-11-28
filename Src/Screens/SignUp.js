import { ScrollView, StyleSheet, Text, View, ImageBackground, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, } from 'react-native';
import React, { useState,useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../Constant/GradientText';
import Colors from '../Assets/Theme/Theme';
import CustomcountryPicker from '../Constant/CustomcountryPicker';
import Feather from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import { UserRegistration } from '../restApi/Apiconfig';
import CountryPicker from 'react-native-country-picker-modal';
import Entypo from 'react-native-vector-icons/Entypo';
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .trim()
    .required('Required')
    .matches(
      /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/,
      'Please Enter Valid Full Name',
    ),
  email: Yup.string().email('Invalid email')
    .trim()
    .min(10)
    .max(25)
    .required('Required')
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please Enter Valid Email'),
    mobile:Yup.string().required('Mobile number is required')
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Invalid mobile number format')
    .min(7, 'Mobile number must be at least 7 Number')
    .max(15, 'Mobile number must be at most 15 Number'),
  password: Yup.string().required('Required').matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    'Password must contain at least one letter, one number, and one special character, and be at least 8 characters long.'
  ),
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),

});

const SignUp = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const initialValues = {
    name: '',
    email: '',
    mobile: '',
    password: '',
  };

  // const [postData, setPostData] = useState({
  //   name: 'Ravi',
  //   email: 'ravi119678@gmail.com',
  //   mobile: '7870561523',
  //   password: '12345',
  //   countrycode:'91',
  // });

  const handlePostRequest = async (values) => {
    console.log("hhhhhhjadjhagd",values)
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('mobile', values.mobile);
      formData.append('countrycode', values.countrycode);
      formData.append('password', values.password);

      const response = await axios.post(
        'https://api.technoxian.com/development/user_Registration.php',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Response:', response.data);
      // Handle the response here
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here
    }
  };

  const handleSubmit = (value,{ resetForm }) => {
    handlePostRequest(value);
    navigation.navigate('Login')
    console.log(value)
    resetForm()
  

  };

  const [countryCode, setCountryCode] = useState('91');
  const [country, setCountry] = useState(null);
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  useEffect(() => {
    setCountry({ cca2: 'IN', name: 'India', callingCode: ['91'] });
  }, []);

  const handleCountryChange = selectedCountry => {
    setCountry(selectedCountry);
    setCountryCode(selectedCountry.callingCode[0]);
    console.log(selectedCountry.callingCode[0])
    setIsPickerVisible(false);
  };

  const togglePicker = () => {
    setIsPickerVisible(!isPickerVisible);
  };

  

  // const PostRegistration = async (values) => {
  //   console.log("data",values);
  //   try {
  //     const response = await axios({
  //       url: UserRegistration,
  //       method: 'post',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       data: {
  //         name: values.name,
  //         email: values.email,
  //         mobile: values.mobile,
  //         countryCode: `+${countryCode}`,
  //         password: values.password,
  //       },
  //     });
  //     console.log("hellooooookhjsfgshgfhgsh",response)
  //     // setCountries(countryNames);
  //     // console.log(response.data[0])
  //   } catch (error) {
  //     console.error('Error fetching countries:', error);
  //   }
  // };
  

  return (


    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: 'black' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors,touched,setFieldTouched ,resetForm}) => (

          <View style={{ flex: 1, }}>
            <View style={{ height: '50%' }}>
              <Image
                source={require('../Assets/Images/Signup.png')}
                style={{ height: "102%", width: "110%", alignSelf: 'center' }}
                resizeMode='cover'
              />
            </View>


            <ScrollView style={styles.signupcontainer}>



              <View style={styles.form}>


                <Text style={styles.heading}>SignUp</Text>


                <CustomInput
                  placeholder="Full Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange('name')}
                  onBlur={handleBlur}
                  error={errors.name}
                />


                <CustomInput
                  placeholder="Email address"
                  name="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur}
                  error={errors.email}
                />

                <View style={{ marginTop: 12 }}>


                <View style={styles.container}>
          <View style={styles.inputContainer}>
            <CountryPicker
              onSelect={handleCountryChange}
              countryCode={country ? country.cca2 : undefined}
              visible={isPickerVisible}
            />
            <TouchableOpacity onPress={togglePicker}>
              <Text style={styles.countryCodeText}>{`+${countryCode}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePicker}>
              <Entypo
                name="chevron-small-down"
                size={20}
                color="black"
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>
            <View style={styles.verticalLine} />
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              value={values.mobile}
              onChangeText={handleChange('mobile')}
              onBlur={() => setFieldTouched('mobile')}
              keyboardType="phone-pad"
              maxLength={15}
              
              
            />
          </View>
          {touched.mobile && errors.mobile && (
            <Text style={styles.validation}>{errors.mobile}</Text>
          )}
        </View>
                  <CustomInput
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange('password')}
                    onBlur={handleBlur}
                    error={errors.password}
                    secureTextEntry={true}
                    rightIcon={true}
                  />
                </View>
                <CustomInput
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  onBlur={handleBlur}
                  error={errors.confirmPassword}
                  secureTextEntry={true}
                  rightIcon={true}
                  
                />
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    tintColor={toggleCheckBox ? 'red' : 'white'}
                    style={{borderWidth:1,borderColor:'white'}}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  />
                   <Text style={styles.text1}>By signup, you accept our  <Text style={{ color: Colors.pink }} onPress={() => navigation.navigate('TermAndCodition')}>Terms and Conditions</Text></Text>
                </View>
                {/* <View style={{ marginVertical: 10 }}>
                  <Text style={styles.text1}>By signing up, you accept our  <Text style={{ color: Colors.pink }} onPress={() => navigation.navigate('TermAndCodition')}>Terms and Conditions</Text></Text>
                </View> */}

                <View style={{ marginTop: 15, bottom: 10 }}>
                  <CustomButton title={'SignUp'}
                    backgroundColor={Colors.pink}
                    paddingVertical={15}
                    onPress={handleSubmit}
                  />
                </View>
                <Text style={styles.text2}>Already have account?   <Text style={{ color: Colors.pink }} onPress={() => navigation.navigate('Login')}>Login in</Text></Text>

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

    // Remove backgroundColor and flex
    // backgroundColor: 'red',
    //   flex: 3,
    //  top: "40%",
    // bottom:40

  },
  heading: {
    color: Colors.white,
    fontSize: 29,
    fontWeight: '800',
    marginTop: 20,
  },
  text1: {
    color: Colors.white,
    fontWeight: '400',
    fontSize: 12,
  },
  signupcontainer: {
    flex: 1,
    backgroundColor: Colors.black,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: '100%',
    marginTop: -90
  },
  text2: {
    color: Colors.white,
    fontSize: 14,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingBottom: 20

  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems:'center'
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  container: {
    marginTop: 7,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor:"white"
  },
  input: {
    flex: 1,
    fontSize: 13,
  },
  countryCodeText: {
    fontSize: 13,
    color: 'black',
  },
  verticalLine: {
    height: 24,
    borderRightWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    marginRight: 10,
  },
  validation: {
    color: '#FF3838',
    fontSize: 12,
    marginTop: 5,
    // paddingLeft:5,
    fontFamily: ' Gilroy-Light',
    lineHeight: 23,
  },
});

export default SignUp;
