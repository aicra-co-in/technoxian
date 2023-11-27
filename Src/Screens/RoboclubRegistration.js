import { Button, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../Constant/GradientText';
// import CustomDropDown1 from '../Component/CustomDropDown1';
// import Colors from '../Assets/Theme/Theme';
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(5, 'Too Short').max(8, 'Too Long!').required('Required'),
    competition: Yup.string().required(('Please Select Completition')),
    profile: Yup.string().required(('Please Select Profile')),
    country: Yup.string().required(('Please Select Country')),
    state: Yup.string().required(('Please Select State')),
    city: Yup.string().required(('Please Select City')),

});
import Colors from '../Assets/Theme/Theme'
import CustomHeader from '../Component/CustomHeader'
import CustomDropDown from '../Component/CustomDropDown';
import CustomDropDown1 from '../Component/CustomDropDown1';
import axios from 'axios';

const RoboclubRegistration = () => {
    const [countries, setCountries] = useState([]);

    const navigation = useNavigation()


//    const fetchCountry = async () => {
//         try {
//             const response = await axios.get('https://restcountries.com/v3.1/independent?status=true');

//             const countryNames = response.data.map(item => item.name.common);
//             // console.log('Country API Response:', countryNames);
//             //  setCountries(countryNames);
//             // console.log(response.data[0])
//         } catch (error) {
//             console.error('Error fetching countries:', error);
//         }
//     };

//     useEffect(() => {
//         fetchCountry()
//     }, [])

    const initialValues = {
        name: '',
        email: '',
        password: '',
        profile: '',
        competition: '',
        country: '',
        state: '',
        city: '',
        // Define your initial form values here
        // For example:
        // fieldName: '',
    };

    const handleSubmit = (values) => {
        // Handle form submission here
        console.log(values);
    };
    return (
        <View style={styles.container}>
            <CustomHeader back={true}
                // notification={true}
                //   filter={true} 
                // scan={true}
                source={require('../Assets/Images/Back.png')}
                title={'Technoxian Club Registration'}
                onPress={() => navigation.navigate('Menu')} />

            <ScrollView style={{ flex: 1, backgroundColor: Colors.Primary }}>
                <KeyboardAvoidingView>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={SignupSchema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldTouched }) => (
                            <View style={{ flex: 1, backgroundColor: Colors.black }}>
                                <View style={styles.form}>
                                    {/* UserName CustomInput */}

                                    {/* <CustomDropDown bgcolor={'white'}
                                        placeholder={'Select Competition: *'}
                                    /> */}
                                    {/* <CustomDropDown1
                                        bgcolor={'white'}
                                        placeholder={'Select Competition: *'}
                                        validation={SignupSchema}
                                        field="competition"
                                    /> */}

                                    <CustomInput

                                        placeholder="Applicant Name: *"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange('name')}
                                        onBlur={handleBlur}
                                        error={errors.name}
                                    />
                                    {/* <CustomDropDown1
                                        bgcolor={'white'}
                                        placeholder={'Profile: *'}
                                        validation={SignupSchema}
                                        field="profile"
                                    /> */}


                                    {/* Enter user Email */}
                                    <CustomInput
                                        placeholder="Email address:*"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                        onBlur={handleBlur}
                                        error={errors.email}
                                    />
                                    {/* For Password */}
                                    <CustomInput


                                        placeholder="Minimum 8 characters"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        onBlur={handleBlur}
                                        error={errors.password}
                                        secureTextEntry={true}
                                    />
                                    <CustomInput


                                        placeholder="Institute/College/School Name:*"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        onBlur={handleBlur}
                                        error={errors.password}
                                        secureTextEntry={true}
                                    />
                                   
                                       

                                            <CustomInput

                                                placeholder="RoboClub Id: *"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange('name')}
                                                onBlur={handleBlur}
                                                error={errors.name}
                                            />
                                       
                                        

                                            <CustomInput

                                                placeholder="RoboClub Name: *"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange('name')}
                                                onBlur={handleBlur}
                                                error={errors.name}
                                            />
                                       
                                 


                                   

                                            <CustomInput

                                                placeholder="DOB: *"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange('name')}
                                                onBlur={handleBlur}
                                                error={errors.name}
                                            />
                                       
                                       

                                            <CustomInput

                                                placeholder="Mobile Number: *"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange('name')}
                                                onBlur={handleBlur}
                                                error={errors.name}
                                            />
                                      




                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <View style={{ width: '49%', }}>
                                            <CustomDropDown1
                                                bgcolor={'white'}
                                                placeholder={'Country: *'}
                                                validation={SignupSchema}
                                                field="country"
                                                // data={countries}

                                            />
                                        </View>
                                        <View style={{ width: '47%' }}>

                                            <CustomDropDown1
                                                bgcolor={'white'}
                                                placeholder={'State: *'}
                                                validation={SignupSchema}
                                                field="state"
                                            />
                                        </View>
                                    </View>




                                    {/* Submit button */}



                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <View style={{ width: '49%', }}>
                                            <CustomDropDown1
                                                bgcolor={'white'}
                                                placeholder={'City: *'}
                                                validation={SignupSchema}
                                                field="city"
                                            />
                                        </View>
                                        <View style={{ width: '47%' }}>


                                        </View>
                                    </View>


                                    <View style={{ marginTop: 15 }}>

                                        <CustomButton title={'SignUp'}
                                            backgroundColor={Colors.pink}
                                            paddingVertical={15}
                                            onPress={handleSubmit} />
                                    </View>
                                    <Text style={styles.text2}>Already have account?   <Text style={{color:Colors.pink}} onPress={()=>navigation.navigate('RoboclubLogin')}>Login in</Text></Text>
                                </View>
                            </View>
                        )}
                    </Formik>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        padding: 15

    },
    heading: {
        color: Colors.white,
        fontSize: 17,
        fontWeight: '600',
        marginTop: 20,

    },
    text2:{
        color:Colors.white,
        fontSize:14,
        alignSelf:'center',
        paddingVertical:10,
        paddingBottom:20
    
      }
})

export default RoboclubRegistration

