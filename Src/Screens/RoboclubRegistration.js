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
    const [state, setstate] = useState([]);
    const [countryid, setcountryid] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectState, setSelectState] = useState(null);
    const [selectCity,setselectCity]=useState(null);
    const [city,setCity]=useState([])

    const navigation = useNavigation()


    const fetchCountry = async () => {
        try {
            const response = await axios.get('https://api.technoxian.com/development/country.php'); 
            // console.log("country data",response)
            const countryNames = response.data.users.map(country => ({
                label: country.name,
                value: country.sortname,
                id: country.id

            }));
            countryNames.forEach(country => {
                // console.log('id:', country.id);
                setcountryid(country.id)
                if (!selectedCountry) {
                    setSelectedCountry(country);
                }
            });

            setCountries(countryNames);
            // console.log(countryNames)
        } catch (error) {
            console.error('Error fetching countries:', error);
        }

    };




    const fetchState = async () => {
        // console.log("countryid",selectedCountry);
        try {
            const response = await axios.get(`https://api.technoxian.com/development/getState.php?id=${selectedCountry.id}`);
            // console.log("State list", response.data);
            const stateNames = response.data.users.map(state => ({
                label: state.statename,
                value: state.countryId,
                id: state.id

            }));
            setstate(stateNames);
     console.log(stateNames)
            
            // stateNames.forEach(state => {
            //      console.log('id:', state.label);
            //     //  setstate(state.label)
                
            // });
        } catch (error) {
            console.log("State list", error.message);
        }
    };


    const fetchCity = async () => {
        try {
          const response = await axios.get(`https://api.technoxian.com/development/getCity.php?id=${1}`);
        //    console.log("City list", response.data);
          const CityNames = response.data.users.map(city => ({
            label: city.cityName,
            value: city.state_id,
            id: city.id
          }));
          setCity(CityNames);
        //  console.log("CityNames----", CityNames);
        } catch (error) {
          console.log("City list", error.message);
        }
      };

    useEffect(() => {
        // fetchCountry();
        //  fetchState();
        // fetchCity();
    }, []);













    const initialValues = {
        name: '',
        institutename: '',
        email: '',
        mobile: '',
        password: '',
        captain: '',
        clubname: '',
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
                        {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldTouched, }) => (
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





                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <View style={{ width: '49%', }}>
                                            <CustomDropDown1
                                                bgcolor={'white'}
                                                placeholder={'Country: *'}
                                                validation={SignupSchema}
                                                field="country"
                                                Country={countries}
                                                onChange={(selectedItem) => {
                                                    //console.log('Selected Country:', selectedItem);
                                                    setSelectedCountry(selectedItem);
                                                    // Call fetchState here
                                                     fetchState();
                                                }}

                                            />
                                        </View>
                                        <View style={{ width: '47%' }}>

                                            <CustomDropDown1
                                                bgcolor={'white'}
                                                placeholder={'State: *'}
                                                validation={SignupSchema}
                                                field="state"
                                                Country={state}
                                                onChange={(selectedItem) => {
                                                    setSelectState(selectedItem)
                                                    console.log("State----->>>", selectedItem)
                                                    fetchCity();
                                                }}
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
                                                Country={city}
                                                onChange={(selectedItem) => {
                                                    setselectCity(selectedItem)
                                                    console.log("countery id", selectedItem)
                                                    
                                                }}
                                                
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

