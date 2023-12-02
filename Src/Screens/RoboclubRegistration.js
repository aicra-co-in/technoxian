import { Button, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../Constant/GradientText';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import CustomDropDown1 from '../Component/CustomDropDown1';
// import Colors from '../Assets/Theme/Theme';
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    institutename: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    mobile: Yup.string().required('Mobile number is required')
        .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Invalid mobile number format')
        .min(7, 'Mobile number must be at least 7 Number')
        .max(15, 'Mobile number must be at most 15 Number'),
    password: Yup.string().min(5, 'Too Short').max(8, 'Too Long!').required('Required'),
    captain: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    clubname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    // profile: Yup.string().required(('Please Select Profile')),


});
import Colors from '../Assets/Theme/Theme'
import CustomHeader from '../Component/CustomHeader'
import CustomDropDown from '../Component/CustomDropDown';
import CustomDropDown1 from '../Component/CustomDropDown1';
import axios from 'axios';
import { countryapi, roboregistration } from '../restApi/Apiconfig';

const RoboclubRegistration = () => {
    const navigation=useNavigation()
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectCity, SetSelectCity] = useState(null);

    useEffect(() => {
        fetchCountries();
        // RegistrationApi();sfdf
    }, []);

    const fetchCountries = async () => {
        try {
            const response = await axios.get(countryapi);
            const countryNames = response.data.users.map(country => ({
                label: country.name,
                value: country.sortname,
                id: country.id,
            }));

            setCountries(countryNames);

            if (countryNames.length > 0) {
                const defaultCountry = countryNames[0];
                // console.log('Selected Country ID:', defaultCountry.id);

                // Set the selected country ID in AsyncStorage
                await AsyncStorage.setItem('CountryId', defaultCountry.id);
                setSelectedCountry(defaultCountry.id);

                // Fetch states based on the default country
                fetchStates(defaultCountry.id);
            }
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };


    const fetchStates = async () => {
        try {
            // Retrieve the country ID from AsyncStorage
            const countryId = await AsyncStorage.getItem('CountryId');

            // Make sure countryId is not null or undefined before proceeding
            if (countryId) {
                const response = await axios.get(`https://api.technoxian.com/development/getState.php?id=${countryId}`);
                // console.log(response)
                const stateNames = response.data.users.map(state => ({
                    label: state.statename,
                    value: state.countryId,
                    id: state.id,
                }));

                setStates(stateNames);
                // console.log("---------->>>>>>>>",stateNames)
                setSelectedState(stateNames);

                if (stateNames.length > 0) {
                    const defaultState = stateNames[0];
                    // console.log(defaultState.id)
                    await AsyncStorage.setItem('stateId', defaultState.id)
                    fetchCities(defaultState.id);
                    setSelectedState(defaultState.id);
                }
            } else {
                console.error('CountryId not found in AsyncStorage');
            }
        } catch (error) {
            console.error('Error fetching states:', error);
        }
    };


    const fetchCities = async (stateId) => {
        try {
            stateId = await AsyncStorage.getItem('stateId')
            if (stateId) {
                const response = await axios.get(`https://api.technoxian.com/development/getCity.php?id=${stateId}`);
                //  console.log(response.data)
                const cityNames = response.data.users.map(city => ({
                    label: city.cityName,
                    value: city.state_id,
                    id: city.id,
                }));

                setCities(cityNames);
                if (cityNames.length > 0) {
                    const defaultCity = cityNames[0];
                    SetSelectCity(defaultCity.id);
                }
            }
            //  console.log(cityNames)
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };





    const RegistrationApi = async (values) => {

        // console.log("My input value", values);
        // console.log("Country=======", selectedCountry.label)
        // console.log("State=======", selectedState.label)
        // console.log("City=======", selectCity.label)


        try {
            const data = new FormData();
            //     data.append('institute', values.name);
            //     data.append('Institute_email', values.institutename);
            //     data.append('Institute_number', values.mobile);
            //     data.append('country',selectedCountry.label);
            //     data.append('state', selectedState.label);
            //     data.append('city',"Abc");
            //     data.append('club_Captain', values.captain);
            //     data.append('club_name', values.clubname);
            //     data.append('txtpassword', values.password);
            data.append('institute', values.name);
            data.append('Institute_email', values.email);
            data.append('Institute_number', values.mobile);
            data.append('country', selectedCountry.label);
            data.append('state', selectedState.label);
            data.append('city', selectCity.label);
            data.append('club_Captain',values.captain);
            data.append('club_name', values.clubname);
            data.append('txtpassword', values.password);


            const responce = await axios.post(roboregistration,

                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
            // console.log('------>>>', responce.data)
            
            if (responce.data.error === 'false') {
            
                navigation.navigate('RoboclubLogin'); 
            }
        } catch (error) {
            console.log(responce.error)
        }
    }



    const initialValues = {
        name: '',
        institutename: '',
        email: '',
        mobile: '',
        password: '',
        captain: '',
        clubname: '',
    };

    const handleSubmit = (values, { resetForm }) => {
        RegistrationApi(values);
        // navigation.navigate('RoboclubLogin')
//  resetForm()
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
                        {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldTouched, resetForm }) => (
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
                                    <CustomInput


                                        placeholder="Institute/College/School Name:*"
                                        name="institutename"
                                        value={values.institutename}
                                        onChange={handleChange('institutename')}
                                        onBlur={handleBlur}
                                        error={errors.institutename}
                                    // secureTextEntry={true}
                                    />

                                    {/* <CustomDropDown1
                                        bgcolor={'white'}
                                        placeholder={'Profile: *'}
                                        validation={SignupSchema}
                                        field="profile"
                                    /> */}


                                    {/* Enter user Email */}
                                    <CustomInput
                                        placeholder="Institute Email address:*"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                        onBlur={handleBlur}
                                        error={errors.email}
                                    />
                                    <CustomInput

                                        placeholder="Institute Mobile Number: *"
                                        name="mobile"
                                        value={values.mobile}
                                        onChange={handleChange('mobile')}
                                        onBlur={handleBlur}
                                        error={errors.mobile}
                                        keyboardType="phone-pad"
                                        maxLength={15}
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

                                        placeholder="Club_Captain: *"
                                        name="captain"
                                        value={values.captain}
                                        onChange={handleChange('captain')}
                                        onBlur={handleBlur}
                                        error={errors.captain}
                                    />



                                    <CustomInput

                                        placeholder="Club Name: *"
                                        name="clubname"
                                        value={values.clubname}
                                        onChange={handleChange('clubname')}
                                        onBlur={handleBlur}
                                        error={errors.clubname}
                                    />





                                    {/* 
                                    <CustomInput

                                        placeholder="DOB: *"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange('name')}
                                        onBlur={handleBlur}
                                        error={errors.name}
                                    /> */}



                                    {/* <CustomInputFcity

                                        placeholder="Mobile Number: *"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange('name')}
                                        onBlur={handleBlur}
                                        error={errors.name}
                                    /> */}





                                        
                                            <CustomDropDown1
                                                bgcolor={'white'}
                                                placeholder={'Country: *'}
                                                // validation={SignupSchema}
                                                // field="country"
                                                Country={countries}
                                                selectedValue={selectedCountry}
                                                onChange={(selectedItem) => {
                                                    setSelectedCountry(selectedItem);
                                                    // console.log('Selected Country ID:', selectedItem.id);

                                                    // Set the selected country ID in AsyncStorage
                                                    AsyncStorage.setItem('CountryId', selectedItem.id);

                                                    // Fetch states based on the selected country
                                                    fetchStates(selectedItem.id);

                                                }}
                                            />
                                        
                                        
                                           
                                        
                                   




                                    {/* Submit button */}



                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <View style={{ width: '49%', }}>
                                        <CustomDropDown1
                                                bgcolor={'white'}
                                                placeholder={'State: *'}
                                                // validation={SignupSchema}
                                                // field="state"
                                                Country={states}
                                                selectedValue={selectedState}
                                                onChange={(selectedItem) => {
                                                    setSelectedState(selectedItem);
                                                    // fetchCities(selectedItem.id);
                                                    AsyncStorage.setItem('stateId', selectedItem.id);
                                                    fetchCities(selectedItem.id)
                                                }}
                                            />
                                        </View>
                                        <View style={{ width: '47%' }}>
                                        <CustomDropDown1
                                                bgcolor={'white'}
                                                placeholder={'City: *'}
                                                // validation={SignupSchema}
                                                // field="city"
                                                Country={cities}
                                                selectedState={selectCity}
                                                onChange={(selectedItem) => {
                                                    SetSelectCity(selectedItem)
                                                }}
                                            />

                                        </View>
                                    </View>


                                    <View style={{ marginTop: 15 }}>

                                        <CustomButton title={'SignUp'}
                                            backgroundColor={Colors.pink}
                                            paddingVertical={15}
                                            onPress={handleSubmit} />
                                    </View>
                                    <Text style={styles.text2}>Already have account?   <Text style={{ color: Colors.pink }} onPress={() => navigation.navigate('RoboclubLogin')}>Login in</Text></Text>
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
    text2: {
        color: Colors.white,
        fontSize: 14,
        alignSelf: 'center',
        paddingVertical: 10,
        paddingBottom: 20

    }
})

export default RoboclubRegistration

