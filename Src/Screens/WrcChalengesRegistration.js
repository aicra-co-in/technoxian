
import CustomDropDown1 from '../Component/CustomDropDown1';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { Button, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';

import GradientText from '../Constant/GradientText';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { countryapi, roboClubCompitition, roboregistration } from '../restApi/Apiconfig'
import MultipleSelector from '../Component/MultipleSelector';
import Colors from '../Assets/Theme/Theme';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { requireNativeComponent } from 'react-native';
import { Caption } from 'react-native-paper';
import CustomHeader from '../Component/CustomHeader';

const Country = [
    { label: "Innovation Contest", value: "1" },
    { label: "RoboSoccer", value: "2" },
    { label: "WRC Bots Combat", value: "3" },
    { label: "Robo Race", value: "4" },
    { label: "Fastest Line Follower", value: "5" },
    { label: "Water Rocket", value: "6" },
    { label: "Maze Solver", value: "7" },
    { label: "Rc Creaft", value: "8" },
    { label: "Drone Competition", value: "9" },
]

const profile = [
    { label: "Mentor", value: "1" },
    { label: "Coach", value: "2" },
    { label: "Captain", value: "3" },
    { label: "Member", value: "4" },
    { label: "Other", value: "5" },

]



const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    mobile: Yup.string().required('Mobile number is required')
        .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Invalid mobile number format')
        .min(7, 'Mobile number must be at least 7 Number')
        .max(15, 'Mobile number must be at most 15 Number'),
    email: Yup.string().email('Invalid email').required('Required'),
    institutename: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    clubname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const WrcChalengesRegistration = () => {
    const navigation = useNavigation()
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectCity, SetSelectCity] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [compitition, setCompitition] = useState(null)
    const [getProfile, setProfile] = useState(null)
    const [captain, setCaptain] = useState([])
    const [selectCaptain, setSelectCaptain] = useState(null);
    const [list, setList] = useState([])
    const [selectList, setSelectList] = useState(null);
    const [clubid, setclubid] = useState(null)
    const [multipleData, setmultipleData] = useState([]);

    const [text, onChangeText] = useState('');


    const getClubId = async () => {
        try {
            const clubId = await AsyncStorage.getItem('Club_id');
            setclubid(clubId)

            if (clubId !== null) {
                console.log('Club_id:', clubId);

                if (text === clubId) {
                    getCaptain();
                }
            } else {
                console.log('Club_id not found in AsyncStorage');
            }
        } catch (error) {
            console.error('Error retrieving Club_id from AsyncStorage:', error.message);
        }
    };

    const getCaptain = async () => {
        const clubId = await AsyncStorage.getItem('Club_id');
        try {
            const response = await axios.get(
                `https://api.technoxian.com/development/wrc-captain-list?roboclub_id=${clubId}`
            );
            console.log('Captain Data:', response.data);
            const captain_name = response.data.users.map(user => ({
                label: user.Name,
                value: user.id,

            }));
            setCaptain(captain_name)
            setList(captain_name)

            if (captain_name.length > 0) {
                const default_name = captain_name[0];
                // console.log('Selected Country ID:', defaultCountry.id);

                // Set the selected country ID in AsyncStorage

                setSelectCaptain(default_name.id);
                setSelectList(default_name)
                console.log('====', default_name.Name)

                // Fetch states based on the default country

            }



        } catch (error) {
            console.error('Error fetching captain data:', error);
        }
    };

    useEffect(() => {
        if (text.trim() !== '') {
            getClubId();
        }
    }, [text]);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {

        hideDatePicker();

        // Use toLocaleDateString to convert the date to a string
        const formattedDate = date.toLocaleDateString();
        setSelectedDate(formattedDate);
    };

    const initialValues = {
        name: '',
        mobile: '',
        email: '',
        institutename: '',
        clubname: '',
    };



    const RegistrationApi = async (value) => {

        console.log('========>>>>>ppppp', value)



        try {
            const data = new FormData();
            data.append('Club_id', clubid);
            data.append('WRC_Competition', compitition.label);
            data.append('mentor_name', value.name);
            data.append('mentor_profile', profile.label);
            data.append('mentor_email', value.email);
            data.append('mentor_mobile', '');
            data.append('club_name', value.clubname);
            data.append('RoboClub_idcrt', '');
            data.append('city', selectCity.label);
            data.append('state', selectedState.label);
            data.append('country', selectedCountry.label);
            data.append('dob', selectedDate);
            data.append('Seleccategory', multipleData);
            data.append('collage_name', value.institutename);
            data.append('captain_membership', '');
            data.append('captain_name', selectCaptain.label);
            data.append('captain_mobile', value.mobile);
            data.append('captain_email', value.email);


            const responce = await axios.post(roboClubCompitition,
                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
            console.log('signUp------>>>', responce.data)
            console.log('payment', responce.data.event_fee)
            console.log('paymentCountry', responce.data.country)

            console.log('print value', value)

            if (responce.data.message === "WRC Member Add successfully.") {
                navigation.navigate('ShowPaymentOptions', { value: value, wrcId: responce.data.wrcid, payment: responce.data.event_fee, country: responce.data.country })
            }

        } catch (error) {
            console.log(responce.error)
        }
    }







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

    useEffect((values) => {
        fetchCountries();

        // If there is a match, proceed with the API call
        // captain_detail()

        //  RegistrationApi();
        getClubId()

    }, []);

    const handleSubmit = async (values, { resetForm }) => {
        console.log('value', values)
        RegistrationApi(values)
    };
    const handleSelectionChange = (selectedItems) => {
        // Do something with the selected items, for example, send them to the server using Axios
        console.log('Selected Items:', selectedItems);
        setmultipleData(selectedItems)
    };
    return (
        <View style={{ flex: 1, backgroundColor: Colors.black, padding: 15, }}>
            <CustomHeader
                back={true}
                // notification={true}
                // scan={true}
                source={require('../Assets/Images/Back.png')}
                title={'Wrc Chalanges Registration'}
                onPress={() => navigation.goBack()}
            />

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={SignupSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldTouched, resetForm }) => (
                    <View style={{}}>
                        <ScrollView showsVerticalScrollIndicator={false}>

                            <CustomDropDown1
                                bgcolor={'white'}
                                placeholder={'WRC Competition:*'}
                                validation={SignupSchema}
                                field="profile"
                                Country={Country}
                                onChange={(selectedItem) => {
                                    setCompitition(selectedItem)
                                }}
                            />


                            <CustomInput

                                placeholder="Applicant Name: *"
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
                            <CustomInput

                                placeholder="Mobile Number: *"
                                name="mobile"
                                value={values.mobile}
                                onChange={handleChange('mobile')}
                                onBlur={handleBlur}
                                error={errors.mobile}
                                keyboardType="phone-pad"
                                maxLength={15}
                            />





                            {/* Enter user Email */}
                            <CustomInput
                                placeholder="Email address:*"
                                name="email"
                                value={values.email}
                                onChange={handleChange('email')}
                                onBlur={handleBlur}
                                error={errors.email}
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

                            {/* For Password */}
                            <TextInput
                                placeholder="Enter Club ID *:"
                                style={styles.input}
                                onChangeText={(newText) => onChangeText(newText)}
                                value={text}
                            />


                            <CustomInput

                                placeholder="Club Name: *"
                                name="clubname"
                                value={values.clubname}
                                onChange={handleChange('clubname')}
                                onBlur={handleBlur}
                                error={errors.clubname}
                            />




                            {/* {Date Picker } */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderWidth: 1,
                                    borderRadius: 15,
                                    borderColor: 'rgba(0, 0, 0, 0.25)',
                                    paddingHorizontal: 16,
                                    paddingVertical: 13,
                                    marginTop: 10,
                                    backgroundColor: 'white'
                                }}>
                                <Text
                                    style={{
                                        flex: 1,
                                        fontFamily: 'Gilroy-Regular',

                                        paddingLeft: 6,
                                    }}>
                                    {selectedDate ? selectedDate : 'Select Date of Birth'}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => setDatePickerVisibility(true)}>
                                    <Image
                                        style={{ width: 20, height: 20 }}
                                        source={require('../Assets/Images/calendar.png')}
                                    />
                                </TouchableOpacity>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />

                            </View>


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

                            <CustomDropDown1
                                bgcolor={'white'}
                                placeholder={'Select Captain:*'}
                                validation={SignupSchema}
                                Country={captain}
                                selectedValue={selectCaptain}
                                onChange={(selectedItem) => {
                                    setSelectCaptain(selectedItem);


                                }}

                            />


                            <MultipleSelector Country={list} onSelectionChange={handleSelectionChange} />




                            <View style={{ marginTop: 25, marginBottom: 80 }}>
                                <CustomButton title={'SignUp'}
                                    backgroundColor={Colors.pink}
                                    paddingVertical={15}
                                    borderColor={'white'}
                                    onPress={handleSubmit}
                                />
                            </View>




                        </ScrollView>
                    </View>
                )}
            </Formik>

        </View>
    )
}

export default WrcChalengesRegistration

const styles = StyleSheet.create({
    input: {
        height: 48,
        marginTop: 12,
        borderWidth: 1,
        // padding: 10,
        backgroundColor: 'white',
        borderRadius: 10

    },
})