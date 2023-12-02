import { Button, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Image } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../Constant/GradientText';
import Colors from '../Assets/Theme/Theme';
import CustomHeader from '../Component/CustomHeader';
import axios from 'axios';
import { roboclublogin } from '../restApi/Apiconfig';
const SignupSchema = Yup.object().shape({


    email: Yup.string().email('Invalid email').trim()
        .min(10)
        .max(25)
        .required('Required')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please Enter Valid Email'),
    password: Yup.string().min(5, 'Too Short').required('Required').max(8, 'Too Long!').matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Password must contain at least one letter, one number, and one special character, and be at least 8 characters long.'
    ),
});
const RoboclubLogin = () => {
    const navigation = useNavigation()


// {*******================Apiconfig======***********}


const LoginApiClub = async (values) => {
    console.log("jhgdjhsgdhsghg",values)
     try {
         const formData = new FormData();
  
   formData.append('email', values.email);
   formData.append('password', values.password);

       const response = await axios.post(
         roboclublogin,
         formData,
         {
           headers: {
             'Content-Type': 'multipart/form-data',
           },
         }
       );
       console.log('Response:', response);
       if(response.data.error==='false'){
navigation.navigate('HomeScreen')
       }
       // Handle the response here
     } catch (error) {
       console.error('Error:', error.response?.data || 'Something went wrong');
       // Handle errors here
     }
   };
   

//  const handleSubmit = (values,{ resetForm }) => {
//      // Handle form submission here
//      console.log(values);
//      // if(values.data.error===false){

//      //     navigation.navigate('HomeScreen');
//      // }
     
//      handleLoginRequest(values)
//      resetForm();
//  };






    const initialValues = {

        email: '',
        password: ''
        // Define your initial form values here
        // For example:
        // fieldName: '',
    };

    const handleSubmit = (values,{ resetForm }) => {
        // Handle form submission here
        console.log(values);
        // if(values.data.error===false){

        //     navigation.navigate('HomeScreen');
        // }
        
        LoginApiClub(values)
        resetForm();
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

                    <View style={{ flex: 1, }}>
                       


                        <ScrollView style={styles.signupcontainer}>



                            <View style={styles.form}>
                            <CustomHeader back={true}
                // notification={true}
                //   filter={true} 
                // scan={true}
                source={require('../Assets/Images/Back.png')}
                title={'TECHNOXIAN ROBOCLUB LOGIN'}
                onPress={() => navigation.navigate('HomeScreen')} />

                                {/* <Text style={styles.heading}>TECHNOXIAN ROBOCLUB LOGIN</Text> */}





                                <CustomInput
                                    placeholder="Email address"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    onBlur={handleBlur}
                                    error={errors.email}
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


                                {/* <View style={{ marginVertical: 10, alignItems: 'flex-end' }}>
                                    <Text style={styles.text1} onPress={() => navigation.navigate('ForgetPassword')}>Forget Password</Text>
                                </View> */}
                                {/* Submit button */}
                                <View style={{ marginTop: 15 }}>

                                    <CustomButton title={'Login'}
                                        backgroundColor={Colors.pink}
                                        paddingVertical={15}
                                        onPress={handleSubmit}

                                    />
                                </View>
                                {/* <View style={styles.linecontainer}>
                                    <View style={styles.line}></View>
                                    <Text style={styles.text1}>OR</Text>
                                    <View style={styles.line}></View>
                                    <View></View>
                                </View> */}
{/* 
                                <View style={{ marginTop: 25 }}>

                                    <CustomButton title={'Continue with Google'}
                                        backgroundColor={Colors.black}
                                        paddingVertical={15}
                                        image={require('../Assets/Images/Google.png')}
                                        borderColor={Colors.white} />
                                </View> */}
                                <Text style={styles.text2}>Don’t have an account? <Text style={{color:Colors.pink}} onPress={()=>navigation.navigate('RoboclubRegistration')}>Sign Up</Text></Text>
                            </View>
                        </ScrollView>
                    </View>

                )}
            </Formik>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
    },
    error: {
        color: Colors.red,
        fontSize: 12,
    },
    form: {
        // margin: 16,
        paddingHorizontal: 20,
        // marginTop: "30%",

    },
    text: {
        fontSize: 46,
        fontWeight: '400',
        color: '#FF3D00'
    },
    heading: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: '800',
        marginTop: 20,
        alignSelf:'center'
    },
    text1: {
        color: Colors.pink,
        fontWeight: '400',
        fontSize: 14,
    },
    line: {
        height: 3,
        width: '42%',
        backgroundColor: 'white',

    },
    linecontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18,
        gap: 15
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    keyboardAvoidingView: {
        // flex: 1,


    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    signupcontainer: {
        flex: 1,
        backgroundColor: Colors.black,
        // borderTopRightRadius: 30,
        // borderTopLeftRadius: 30,
        // height: '100%',
        // marginTop: -90
    },
    text2:{
        color:Colors.white,
        fontSize:14,
        alignSelf:'center',
        paddingVertical:10,
        paddingBottom:20
    
      }
});







export default RoboclubLogin

