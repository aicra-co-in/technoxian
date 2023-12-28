import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FlashMessage, { showMessage } from 'react-native-flash-message';

const ShowMessageNotification = ({message}) => {
  const fetchData = () => {
   
    showMessage({
      message: message,
      type: 'info',
      autoHide: true,
      duration: 2000, 
    });
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={fetchData}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Click Me</Text>
        </View>
      </TouchableOpacity>
      <FlashMessage position="top" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Set your preferred background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333', 
    fontFamily:'Poppins-Regular',// Set your preferred text color
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily:'Poppins-Regular',
  },
});

export default ShowMessageNotification;
