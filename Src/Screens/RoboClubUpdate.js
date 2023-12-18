import { Button, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TextInput, Image, TouchableOpacity ,Alert} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../Constant/GradientText';
import ImagePicker from 'react-native-image-crop-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import CustomDropDown1 from '../Component/CustomDropDown1';
// import Colors from '../Assets/Theme/Theme';
const SignupSchema = Yup.object().shape({
    insttitutename: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    insttitutemail: Yup.string().email('Invalid email')
        .trim()
        .min(10)
        .max(50)
        .required('Required')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please Enter Valid Email'),

    mobile: Yup.string().required('Mobile number is required')
        .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Invalid mobile number format')
        .min(7, 'Mobile number must be at least 7 Number')
        .max(15, 'Mobile number must be at most 15 Number'),
    headinstitutename: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    headinsttitutemail: Yup.string().email('Invalid email')
        .trim()
        .min(10)
        .max(50)
        .required('Required')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please Enter Valid Email'),
    headmobile: Yup.string().required('Mobile number is required')
        .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Invalid mobile number format')
        .min(7, 'Mobile number must be at least 7 Number')
        .max(15, 'Mobile number must be at most 15 Number'),
    address: Yup.string().min(5, 'Too Short').max(8, 'Too Long!').required('Required'),
    clubId: Yup.string().required('required'),
    clubName: Yup.string().required('required'),
    menterName: Yup.string().required('required'),

    menteremail: Yup.string().email('Invalid email')
        .trim()
        .min(10)
        .max(50)
        .required('Required')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please Enter Valid Email'),
        Mentor_Designation:Yup.string().required('required'),
    menteraddress: Yup.string().min(5, 'Too Short').max(8, 'Too Long!').required('Required'),
    captonName: Yup.string().required('required'),
    captonemail: Yup.string().email('Invalid email')
        .trim()
        .min(10)
        .max(50)
        .required('Required')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please Enter Valid Email'),
    captonmobile: Yup.string().required('Mobile number is required')
        .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Invalid mobile number format')
        .min(7, 'Mobile number must be at least 7 Number')
        .max(15, 'Mobile number must be at most 15 Number'),



});
import Colors from '../Assets/Theme/Theme'
import CustomHeader from '../Component/CustomHeader'
import CustomDropDown from '../Component/CustomDropDown';
import CustomDropDown1 from '../Component/CustomDropDown1';
import axios from 'axios';
import { CityApi, StateApi, WrcUpdate, countryapi, roboregistration } from '../restApi/Apiconfig';

const RoboClubUpdate = () => {
    const [selectedImage, setSelectedImage] = useState(null);

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
                const response = await axios.get(StateApi+`/getState.php?id=${countryId}`);
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
                const response = await axios.get(CityApi+`/getCity.php?id=${stateId}`);
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





    const RegistrationApi = async (values) => {

        // console.log("My input value", values);
        // console.log("Country=======", selectedCountry.label)
        // console.log("State=======", selectedState.label)
        // console.log("City=======", selectCity.label)


        try {
            const data = new FormData();
            data.append('Club_Id', values.clubId);
            data.append('Institute_Name', values.insttitutename);
            data.append('Institute_Email', values.insttitutemail);
            data.append('Institute_Mobile', values.mobile);
            data.append('City', selectCity.label);
            data.append('State', selectedState.label);
            data.append('Country', selectedCountry.label);
            data.append('Head_of_Organization_Name', values.headinstitutename);
            data.append('Head_of_Organization_Email', values.headinsttitutemail);
            data.append('Head_of_Organization_Mobile', values.headmobile);
            data.append('Address', values.address);
            data.append('WRC_Competition', 'Innovation Challenge');
            data.append('Club_Name', values.clubName);
            data.append('clublogo', selectedImage);
            data.append('captainlogo', selectedImage);
            data.append('Mentor_Name', values.menterName);
            data.append('Mentor_Email', values.menteremail);
            data.append('Mentor_Designation', values.Mentor_Designation);
            data.append('Mentor_Mobile', '7870561525');
            data.append('Captain_Name', values.captonName);
            data.append('Captain_Email', values.captonemail);
            data.append('Captain_Mob_Number', values.captonmobile);


            const responce = await axios.post(WrcUpdate,

                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
            console.log('------>>>', responce)

            if (responce.data.message=== "Club Information Successfully Updated") {

                navigation.navigate('RoboClubDeshBoard'); 
                Alert.alert('Success', 'Update  Successfully!');
            }
        } catch (error) {
            console.log(responce.error)
        }
    }

    useEffect(() => {
        RegistrationApi()
    }, [])



    const initialValues = {
        insttitutename: "",
        insttitutemail: "",
        mobile: "",
        headinstitutename: "",
        headinsttitutemail: '',
        headmobile: '',
        address: "",
        clubId: '',
        clubName: '',
        menterName: "",
        menteremail: '',
        Mentor_Designation:'',
        menteraddress: '',
        captonName: '',
        captonemail: '',
        captonmobile: '',

        // Define your initial form values here
        // For example:
        // fieldName: '',
    };

    const handleSubmit = (values) => {
        RegistrationApi(values)
        console.log(values);
    };




    const handleImagePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setSelectedImage(image.path);
        });
    };
    return (
        <View style={styles.container}>
            <CustomHeader back={true}
                // notification={true}
                //   filter={true} 
                scan={true}
                source={require('../Assets/Images/Back.png')}
                title={'Update Club Profile'}
                onPress={() => navigation.goBack()} />

            <ScrollView style={{ flex: 1, backgroundColor: Colors.Primary }} showsVerticalScrollIndicator={false}>
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
                                    <View>
                                        <Text style={{ fontSize: 18, color: Colors.white }}>Organization Details</Text>
                                        <CustomInput


                                            placeholder="Institute/College/School Name:*"
                                            name="insttitutename"
                                            value={values.insttitutename}
                                            onChange={handleChange('insttitutename')}
                                            onBlur={handleBlur}
                                            error={errors.insttitutename}

                                        />
                                        <CustomInput


                                            placeholder="Institute/College/School Email:*"
                                            name="insttitutemail"
                                            value={values.insttitutemail}
                                            onChange={handleChange('insttitutemail')}
                                            onBlur={handleBlur}
                                            error={errors.insttitutemail}

                                        />
                                        <CustomInput

                                            placeholder="Mobile Number: *"
                                            name="mobile"
                                            value={values.mobile}
                                            onChange={handleChange('mobile')}
                                            onBlur={handleBlur}
                                            error={errors.mobile}
                                        />
                                        <View style={{ gap: 10 }}>


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


                                        </View>



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
                                        <CustomInput

                                            placeholder="Head of Organization Name *"
                                            name="headinstitutename"
                                            value={values.headinstitutename}
                                            onChange={handleChange('headinstitutename')}
                                            onBlur={handleBlur}
                                            error={errors.headinstitutename}
                                        />
                                        <CustomInput

                                            placeholder="Head of Organization Email *"
                                            name="headinsttitutemail"
                                            value={values.headinsttitutemail}
                                            onChange={handleChange('headinsttitutemail')}
                                            onBlur={handleBlur}
                                            error={errors.headinsttitutemail}
                                        />
                                        <CustomInput

                                            placeholder="Head of Organization No *"
                                            name="headmobile"
                                            value={values.headmobile}
                                            onChange={handleChange('headmobile')}
                                            onBlur={handleBlur}
                                            error={errors.headmobile}
                                            keyboardType="phone-pad"

                                        />
                                        <CustomInput

                                            placeholder="Address *"
                                            name="address"
                                            value={values.address}
                                            onChange={handleChange('address')}
                                            onBlur={handleBlur}
                                            error={errors.address}
                                        />

                                    </View>










                                    <View>
                                        <Text style={{ fontSize: 18, color: Colors.white, marginTop: 25 }}>Club Details</Text>

                                        <CustomInput

                                            placeholder="Club Id: *"
                                            name="clubId"
                                            value={values.clubId}
                                            onChange={handleChange('clubId')}
                                            onBlur={handleBlur}
                                            error={errors.clubId}
                                        />


                                        <CustomInput

                                            placeholder="Club Name: *"
                                            name="clubName"
                                            value={values.clubName}
                                            onChange={handleChange('clubName')}
                                            onBlur={handleBlur}
                                            error={errors.clubName}
                                        />

                                    </View>


                                    <View style={{ height: 70, width: '100%', backgroundColor: Colors.wheat, marginTop: 20, borderRadius: 15, alignItems: "center", justifyContent: 'center' }}>
                                        <TouchableOpacity onPress={handleImagePicker}>
                                            <Text>UPLOAD IMAGE(jpg,jpeg,png)</Text>
                                            <Image source={require('../Assets/Images/Add.png')} style={{ height: 30, width: 30, alignSelf: 'center' }} resizeMode='contain' />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ height: 70, width: '100%', backgroundColor: Colors.wheat, marginTop: 20, borderRadius: 15, alignItems: "center", justifyContent: 'center' }}>
                                        <TouchableOpacity onPress={handleImagePicker}>
                                            <Text>UPLOAD CAPTON IMAGE(jpg,jpeg,png)</Text>
                                            <Image source={require('../Assets/Images/Add.png')} style={{ height: 30, width: 30, alignSelf: 'center' }} resizeMode='contain' />
                                        </TouchableOpacity>
                                    </View>





                                    <View>
                                        <Text style={{ fontSize: 18, color: Colors.white, marginTop: 25 }}>Mentor (Faculty/HR/Admin)</Text>

                                        <CustomInput

                                            placeholder="Mentor Name: *"
                                            name="menterName"
                                            value={values.menterName}
                                            onChange={handleChange('menterName')}
                                            onBlur={handleBlur}
                                            error={errors.menterName}
                                        />


                                        <CustomInput

                                            placeholder="Email: *"
                                            name="menteremail"
                                            value={values.menteremail}
                                            onChange={handleChange('menteremail')}
                                            onBlur={handleBlur}
                                            error={errors.menteremail}
                                        />
                                        <CustomInput

                                            placeholder="Mentor_Designation *"
                                            name="Mentor_Designation"
                                            value={values.Mentor_Designation}
                                            onChange={handleChange('Mentor_Designation')}
                                            onBlur={handleBlur}
                                            error={errors.Mentor_Designation}
                                        />
                                        <CustomInput

                                            placeholder="Address *"
                                            name="menteraddress"
                                            value={values.menteraddress}
                                            onChange={handleChange('menteraddress')}
                                            onBlur={handleBlur}
                                            error={errors.menteraddress}
                                        />
                                    </View>



                                    {/* Enter user Email */}















                                    {/* Submit button */}




                                    <View>
                                        <Text style={{ fontSize: 18, color: Colors.white, marginTop: 25 }}>Club Captain Details</Text>

                                        <CustomInput

                                            placeholder="Name: *"
                                            name="captonName"
                                            value={values.captonName}
                                            onChange={handleChange('captonName')}
                                            onBlur={handleBlur}
                                            error={errors.captonName}
                                        />


                                        <CustomInput

                                            placeholder="Email: *"
                                            name="captonemail"
                                            value={values.captonemail}
                                            onChange={handleChange('captonemail')}
                                            onBlur={handleBlur}
                                            error={errors.captonemail}
                                        />
                                        <CustomInput

                                            placeholder="Mobile No*"
                                            name="captonmobile"
                                            value={values.captonmobile}
                                            onChange={handleChange('captonmobile')}
                                            onBlur={handleBlur}
                                            error={errors.captonmobile}
                                        />
                                        {/* <View style={{ height: 70, width: '100%', backgroundColor: Colors.wheat, marginTop: 20, borderRadius: 15, alignItems: "center", justifyContent: 'center' }}>
                                            <TouchableOpacity onPress={handleImagePicker}>
                                                <Image source={require('../Assets/Images/Add.png')} style={{ height: 30, width: 30, }} resizeMode='contain' />
                                            </TouchableOpacity>
                                        </View> */}
                                    </View>

                                    <View style={{ marginTop: 15 }}>

                                        <CustomButton title={'Update Club'}
                                            backgroundColor={Colors.red}
                                            paddingVertical={15}
                                            onPress={handleSubmit} />
                                    </View>
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
})
export default RoboClubUpdate

