import { ScrollView, StyleSheet, Text, View, ImageBackground ,Image,KeyboardAvoidingView} from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../Constant/GradientText';
import Colors from '../Assets/Theme/Theme';

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
  password: Yup.string().required('Required').matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    'Password must contain at least one letter, one number, and one special character, and be at least 8 characters long.'
  ),
  phone: Yup.string().email('Invalid email')
    .trim()
    .min(10)
    .max(10).required('required'),
});

const SignUp = () => {
  const navigation = useNavigation();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    phone: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

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
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
           
           <View style={{flex:1 ,}}>
           <View style={{height:'50%'}}>
             <Image
               source={require('../Assets/Images/Signup.png')}
               style={{ height: "102%", width:"110%",alignSelf:'center'}}
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

              <CustomInput
                placeholder="Phone"
                name="phone"
                value={values.phone}
                onChange={handleChange('phone')}
                onBlur={handleBlur}
                error={errors.phone}
              />

              <CustomInput
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange('password')}
                onBlur={handleBlur}
                error={errors.password}
                secureTextEntry={true}
              />

              <CustomInput
                placeholder="Confirm Password"
                name="password"
                value={values.password}
                onChange={handleChange('password')}
                onBlur={handleBlur}
                error={errors.password}
                secureTextEntry={true}
              />

              <View style={{ marginVertical: 10 }}>
                <Text style={styles.text1}>By signing up, you accept our  <Text style={{ color: Colors.pink }} onPress={() => navigation.navigate('TermAndCodition')}>Terms and Conditions</Text></Text>
              </View>

              <View style={{ marginTop: 15 ,bottom:10}}>
                <CustomButton title={'SignUp'}
                  backgroundColor={Colors.pink}
                  paddingVertical={15}
                  onPress={handleSubmit}
                />
              </View>
              <Text style={styles.text2}>Already have account?   <Text style={{color:Colors.pink}} onPress={()=>navigation.navigate('Login')}>Login in</Text></Text>
           
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
  signupcontainer:{
    flex: 1,
    backgroundColor:Colors.black,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    height:'100%',
    marginTop:-90
  },
  text2:{
    color:Colors.white,
    fontSize:14,
    alignSelf:'center',
    paddingVertical:10,
    paddingBottom:20

  }
});

export default SignUp;
