import { Button, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Image, CheckBox } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../Constant/GradientText';
import Colors from '../Assets/Theme/Theme';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserLoginApi } from '../restApi/Apiconfig';

const SignupSchema = Yup.object().shape({


    email: Yup.string().email('Invalid email').trim()
        .min(10)
        .max(25)
        .required('Required')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please Enter Valid Email'),
    password: Yup.string().required('Required').matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Password must contain at least one letter, one number, and one special character, and be at least 8 characters long.'
    ),
});
const Login = () => {
    const navigation = useNavigation()
    const initialValues = {

        email: '',
        password: ''
        // Define your initial form values here
        // For example:
        // fieldName: '',
    };


    const handleLoginRequest = async (values) => {
        console.log("jhgdjhsgdhsghg", values)
        try {
            const formData = new FormData();

            formData.append('email', values.email);
            formData.append('password', values.password);

            const response = await axios.post(
                UserLoginApi,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log('Response:', response.data.message);
            if (response.data.error === false) {
                await AsyncStorage.setItem('user_id', response.data.message.user_id);
                await AsyncStorage.setItem('user_Name', response.data.message.name);
                await AsyncStorage.setItem('user_Email', response.data.message.email);
                await AsyncStorage.setItem('user_Phone', response.data.message.mobile_no);
                navigation.navigate('HomeScreen', {
                    user_id: response.data.message,
                }
                )
            }

        } catch (error) {
            console.error('Error:', error.response?.data || 'Something went wrong');
            // Handle errors here
        }
    };


    const handleSubmit = (values, { resetForm }) => {
        // Handle form submission here
        console.log(values);
        // if(values.data.error===false){

        //     navigation.navigate('HomeScreen');
        // }

        handleLoginRequest(values)
        // resetForm();
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
                {({ handleChange, handleBlur, handleSubmit, values, errors, resetForm }) => (

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


                                <Text style={styles.heading}>WelCome</Text>





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
                                    rightIcon={true}
                                />


                                <View style={{ marginVertical: 10, alignItems: 'flex-end' }}>
                                    <Text style={styles.text1} onPress={() => navigation.navigate('ForgetPassword')}>Forget Password</Text>
                                </View>
                                {/* Submit button */}
                                <View style={{ marginTop: 15 }}>

                                    <CustomButton title={'Login'}
                                        backgroundColor={Colors.pink}
                                        paddingVertical={15}
                                        onPress={handleSubmit}

                                    />
                                </View>
                                <View style={styles.linecontainer}>
                                    <View style={styles.line}></View>
                                    <Text style={styles.text1}>OR</Text>
                                    <View style={styles.line}></View>
                                    <View></View>
                                </View>

                                <View style={{ marginTop: 25 }}>

                                    <CustomButton title={'Guest Login'}
                                        backgroundColor={Colors.black}
                                        paddingVertical={15}
                                        // image={require('../Assets/Images/Google.png')}
                                        borderColor={Colors.white}
                                        onPress={() => navigation.navigate("HomeScreen", { user_id: null })} />

                                </View>
                                <Text style={styles.text2}>Don’t have an account? <Text style={{ color: Colors.pink }} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text></Text>
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
        fontSize: 29,
        fontWeight: '800',
        marginTop: 20,
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

    }
});



export default Login

