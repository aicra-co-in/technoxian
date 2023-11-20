import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from '../Assets/Theme/Theme';

const CustomInput1 = ({ label, placeholder, name, value, onChange, onBlur, error, secureTextEntry,maxLength ,bgColor}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, { color: Colors.white,backgroundColor:bgColor }]}
        placeholder={placeholder}
        placeholderTextColor={Colors.white}
        
        onChangeText={onChange}
        onBlur={() => onBlur(name)}
        value={value}
        name={name}
        secureTextEntry={secureTextEntry} 
        multiline={maxLength}
    
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default CustomInput1;

const styles = StyleSheet.create({
  container: {
    // marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color:Colors.white
  },
  input: {
    height: 48,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    
    // borderRadius: 10,
    padding: 8,
    
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  form: {
    margin: 16,
  },
});
