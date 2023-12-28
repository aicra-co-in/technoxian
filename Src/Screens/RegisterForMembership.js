import { Button, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TextInput, Alert } from 'react-native'
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
import Colors from '../Assets/Theme/Theme'
import CustomHeader from '../Component/CustomHeader'
import CustomDropDown from '../Component/CustomDropDown';
import CustomDropDown1 from '../Component/CustomDropDown1';
import axios from 'axios';
import { CityApi, MemberShipApi, StateApi, countryapi, roboregistration } from '../restApi/Apiconfig';


const profile = [
    { label: "Mentor", value: "1" },
    { label: "Coach", value: "2" },
    { label: "Captain", value: "3" },
    { label: "Member", value: "4" },
    { label: "Other", value: "5" },

]
const MemberShip = [
    { label: "Basic Membership Programs", value: "1" },
    { label: "Premium Membership Programs", value: "2" },
]


const RegisterForMembership = () => {
    const navigation = useNavigation()
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectCity, SetSelectCity] = useState(null);
    const [getProfile, setProfile] = useState([])
    const [memberShip, setMembership] = useState([])


    useEffect(() => {
        fetchCountries();
      

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
                const response = await axios.get(StateApi + `/getState.php?id=${countryId}`);
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
                const response = await axios.get(CityApi + `/getCity.php?id=${stateId}`);
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
        console.log('values=========', values)
        // console.log("My input value", values);
        // console.log("Country=======", selectedCountry.label)
        // console.log("State=======", selectedState.label)
        // console.log("City=======", selectCity.label)
        if (!selectedCountry || !memberShip) {
            // Add an alert or handle the case when selectedCountry or memberShip is not selected
            Alert.alert('Please select a country and membership type.');
            return;
        }

        try {
            const data = new FormData();

            // data.append('membership_type', memberShip.label);
            // data.append('your-name', values.name);
            // data.append('your-email', values.email);
            // data.append('your-mobile', values.mobile);
            // data.append('your-dob', '');
            // data.append('your-school', values.institutename);
            // data.append('your-city', selectCity.label);
            // data.append('your-state', selectedState.label);
            // data.append('your-country', selectedCountry.label);
            // data.append('your-pin', values.zip);
            // data.append('your-designation',getProfile.label);
            data.append('membership_type', memberShip.label);
            data.append('your-name', values.name);
            data.append('your-email', values.email);
            data.append('your-mobile', values.mobile);
            data.append('your-dob', '12-10-1996');
            data.append('your-school', values.institutename);
            data.append('your-city', selectCity.label);
            data.append('your-state', selectedState.label);
            data.append('your-country', selectedCountry.label);
            data.append('your-pin', values.zip);
            data.append('your-designation', getProfile.label);


            const responce = await axios.post(MemberShipApi,
                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                console.log("responce",responce.data)
                console.log('selectedCountry.label:', selectedCountry.label);
                console.log('memberShip.label:', memberShip.label);
                
                if (responce.data.message === 'Successfully Submited.' && selectedCountry.label && memberShip.label) {
                    console.log('Navigating...');
                    navigation.navigate('MembershipPaymentOption', { value: values, Country: selectedCountry.label, Profile: getProfile.label, Membership: memberShip.label, Payment: responce.data.membership_fee, membership_id: responce.data.membershipid });
                    Alert.alert('Success! Club registration has been completed successfully.');
                } 
                else if (responce.data.message === 'Email Id already exists') {
                    Alert.alert('You Are Already Registered');
                } else {
                    Alert.alert('Please select a country and membership type.');
                }
        } catch (error) {
            console.log(responce.error)
        }
    }



    const initialValues = {
        name: '',
        email: '',
        mobile: '',
        classOfStudying: '',
        institutename: '',
        zip: '',

    };

    const handleSubmit = (values, { resetForm }) => {
        RegistrationApi(values);
        // navigation.navigate('RoboclubLogin')
        //  resetForm()
        console.log('janasns', values)
        console.log(memberShip.label)
    };

    return (
        <View style={styles.container}>
            <CustomHeader back={true}
                // notification={true}
                //   filter={true} 
                // scan={true}
                source={require('../Assets/Images/Back.png')}
                title={'Apply for Technoxian  Membership Programs'}
                onPress={() => navigation.goBack()} />

            <ScrollView style={{ flex: 1, backgroundColor: Colors.Primary }} showsVerticalScrollIndicator={false}>
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

                                        placeholder="Name: *"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange('name')}
                                        onBlur={handleBlur}
                                        error={errors.name}
                                    />
                                    <CustomDropDown1
                                        bgcolor={'white'}
                                        placeholder={'Profile:*'}
                                        validation={SignupSchema}
                                        field="profile"
                                        Country={profile}
                                        onChange={(selectedItem) => {
                                            setProfile(selectedItem)
                                        }}
                                    />



                                    {/* <CustomDropDown1
                                        bgcolor={'white'}
                                        placeholder={'Profile: *'}
                                        validation={SignupSchema}
                                        field="profile"
                                    /> */}


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

                                        placeholder="Class Studying:*"
                                        name="classOfStudying"
                                        value={values.classOfStudying}
                                        onChange={handleChange('classOfStudying')}
                                        onBlur={handleBlur}
                                        error={errors.classOfStudying}
                                    />


                                    <CustomInput

                                        placeholder="Name of Institute Studying"
                                        name="institutename"
                                        value={values.institutename}
                                        onChange={handleChange('institutename')}
                                        onBlur={handleBlur}
                                        error={errors.institutename}
                                    />

                                    {/* For Password */}


                                    <CustomDropDown1
                                        bgcolor={'white'}
                                        placeholder={'Membership_type*'}
                                        validation={SignupSchema}
                                        field="membership_type"
                                        Country={MemberShip}
                                        onChange={(selectedItem) => {
                                            setMembership(selectedItem)
                                        }}
                                    />









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

                                    <CustomInput

                                        placeholder="ZIP/PIN: *"
                                        name="zip"
                                        value={values.zip}
                                        onChange={handleChange('zip')}
                                        onBlur={handleBlur}
                                        error={errors.zip}
                                        keyboardType="phone-pad"
                                        maxLength={6}
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
        paddingBottom: 20,
        fontFamily:'Poppins-Regular',

    }
})

export default RegisterForMembership



