import { Button, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Colors from '../Assets/Theme/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import CustomDropDown1 from '../Component/CustomDropDown1';
// import Colors from '../Assets/Theme/Theme';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    mobile: Yup.string().required('Mobile number is required')
        .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Invalid mobile number format')
        .min(7, 'Mobile number must be at least 7 Number')
        .max(15, 'Mobile number must be at most 15 Number'),
    classOfStudying: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    institutename: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    zip: Yup.string().min(2, 'Too Short').required('Required')


});

import CustomHeader from '../Component/CustomHeader'
import CustomDropDown from '../Component/CustomDropDown';
import CustomDropDown1 from '../Component/CustomDropDown1';
import axios from 'axios';
import { CityApi, MemberShipApi, StateApi, countryapi, roboregistration } from '../restApi/Apiconfig';
import { useNavigation } from '@react-navigation/native';


const TicketRegistration = ({ route }) => {
    const navigation = useNavigation()
    const { ticketData } = route.params;
    const initialValues = {
        name: '',
        email: '',
        mobile: '',
        classOfStudying: '',
        institutename: '',
        zip: '',

    };

    const handleSubmit = (values, { resetForm }) => {
        // RegistrationApi(values);
        // navigation.navigate('RoboclubLogin')
        //  resetForm()

    };

    // Now you have access to the passed data in the ticketData variable

    return (
        <View style={styles.container}>
            <CustomHeader back={true}
                // notification={true} 
                // filter={true} 
                //   scan={true}  
                source={require('../Assets/Images/Back.png')}
                title={'Pass Registration'}
                onPress={() => navigation.goBack()} />
            <Text style={styles.heading}>Welcome to the TechnoXian {ticketData.text} Registration!</Text>
            <Text style={styles.text}>All India Council for Robotics & Automation is delighted to invite you to the 8.0th Edition of TechnoXian - World Robotics Championship.</Text>
            <Text style={[styles.heading, { marginTop: 10 }]}>{ticketData.text} Registration 8.0th Edition</Text>
            <Text>{ticketData.text}</Text>
            <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                <KeyboardAvoidingView>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={SignupSchema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldTouched, resetForm }) => (
                            <View style={{ flex: 1, backgroundColor: Colors.black }}>
                                <View style={styles.form}>


                                    <CustomInput

                                        placeholder="Name: *"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange('name')}
                                        onBlur={handleBlur}
                                        error={errors.name}
                                    />


                                    {/* Enter user Email */}
                                    <CustomInput
                                        placeholder="Email *"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                        onBlur={handleBlur}
                                        error={errors.email}
                                    />
                                    <CustomInput
                                        placeholder="Phone*"
                                        name="mobile"
                                        value={values.mobile}
                                        onChange={handleChange('mobile')}
                                        onBlur={handleBlur}
                                        error={errors.mobile}
                                        maxlength={15}
                                    />
                                    <CustomInput

                                        placeholder="Organization*"
                                        name="classOfStudying"
                                        value={values.classOfStudying}
                                        onChange={handleChange('classOfStudying')}
                                        onBlur={handleBlur}
                                        error={errors.classOfStudying}
                                    />


                                    <CustomInput

                                        placeholder="Designation"
                                        name="institutename"
                                        value={values.institutename}
                                        onChange={handleChange('institutename')}
                                        onBlur={handleBlur}
                                        error={errors.institutename}
                                    />




                                </View>

                                {/* <Text style={{ color: 'white', marginTop: 10 }}>Membership Fee INR 500+18% GST ( 10 US Dollar )</Text> */}
                                <View style={{ marginTop: 15 }}>

                                    <CustomButton title={'SUBMIT'}
                                        backgroundColor={Colors.pink}
                                        paddingVertical={15}
                                        onPress={handleSubmit} />
                                </View>

                            </View>

                        )}
                    </Formik>
                </KeyboardAvoidingView>
            </ScrollView>
            {/* Display other properties as needed */}
        </View>
    );
};


export default TicketRegistration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        padding: 15
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.white,
        fontFamily:'Poppins-Regular',
    },
    text: {
        fontSize: 14,
        color: Colors.white,
        fontFamily:'Poppins-Regular',
    }
})