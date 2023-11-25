import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import Entypo from 'react-native-vector-icons/Entypo';
// import {COLORS, SIZES} from '../constants/theme';
import {Formik} from 'formik';
import * as Yup from 'yup';

const PhoneSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .trim()
    .matches(/^\+?[1-9]\d{0,9}$/, 'Please enter valid number')
    .required('Number is required'),
});
const CustomcountryPicker = () => {
  const [countryCode, setCountryCode] = useState('91');
  const [country, setCountry] = useState(null);
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  useEffect(() => {
    setCountry({cca2: 'IN', name: 'India', callingCode: ['91']});
  }, []);

  const handleCountryChange = selectedCountry => {
    setCountry(selectedCountry);
    console.log(selectedCountry);
    setCountryCode(selectedCountry.callingCode[0]);
    console.log(selectedCountry.callingCode[0]);
    setIsPickerVisible(false);
  };
  const togglePicker = () => {
    setIsPickerVisible(!isPickerVisible);
  };

  return (
    <Formik initialValues={{phoneNumber: ''}} validationSchema={PhoneSchema}>
      {({values, errors, touched, setFieldTouched, handleChange}) => (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <CountryPicker
              onSelect={handleCountryChange}
              countryCode={country ? country.cca2 : undefined}
              visible={isPickerVisible}
            />
            <TouchableOpacity onPress={togglePicker}>
              <Text style={styles.countryCodeText}>{`+${countryCode}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePicker}>
              <Entypo
                name="chevron-small-down"
                size={20}
                color="black"
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>
            <View style={styles.verticalLine} />
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              value={values.phoneNumber}
              onChangeText={handleChange('phoneNumber')}
              onBlur={() => setFieldTouched('phoneNumber')}
              keyboardType="phone-pad"
              maxLength={15}
            />
          </View>
          {touched.phoneNumber && errors.phoneNumber && (
            <Text style={styles.validation}>{errors.phoneNumber}</Text>
          )}
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor:"white"
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  countryCodeText: {
    fontSize: 14,
    color: 'black',
  },
  verticalLine: {
    height: 24,
    borderRightWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    marginRight: 10,
  },
  validation: {
    color: '#FF3838',
    fontSize: 12,
    marginTop: 5,
    // paddingLeft:5,
    fontFamily: ' Gilroy-Light',
    lineHeight: 23,
  },
});

export default CustomcountryPicker;