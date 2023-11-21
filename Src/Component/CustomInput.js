import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomDropDown from './CustomDropDown';

const CustomInput = ({ label, placeholder, name, value, onChange, onBlur, error, secureTextEntry,mxlength }) => {
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
        secureTextEntry={secureTextEntry} 
        
      />
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
    // marginBottom: 8,
  },
  input: {
    height: 48,
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    backgroundColor: 'white',
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  form: {
    margin: 16,
  },
});
