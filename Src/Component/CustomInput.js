import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const CustomInput = ({ label, placeholder, name, value, onChange, onBlur, error, secureTextEntry, rightIcon, maxlength }) => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        onBlur={() => onBlur(name)}
        value={value}
        name={name}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        // maxLength={maxlength} // Note: 'mxlength' in your code was likely a typo, changed it to 'maxLength'
      />
      {rightIcon && (
        <TouchableOpacity style={styles.rightIconContainer} onPress={togglePasswordVisibility}>
          <Feather name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="black" />
        </TouchableOpacity>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    // marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontFamily:'Poppins-Regular',
    // marginBottom: 8,
  },
  input: {
    height: 48,
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    backgroundColor: 'white',
    fontFamily: 'Poppins-Regular', 
  },
  rightIconContainer: {
    position: 'absolute',
    top: 35, // Adjust as needed based on your design
    right: 12, // Adjust as needed based on your design
  },
  error: {
    color: 'red',
    fontSize: 12,
    fontFamily:'Poppins-Regular',
  },
  form: {
    margin: 16,
  },
});
