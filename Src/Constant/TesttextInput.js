import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TesttextInput = () => {
  const [text, onChangeText] = useState('');

  const getClubId = async () => {
    try {
      const clubId = await AsyncStorage.getItem('Club_id');

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
    } catch (error) {
      console.error('Error fetching captain data:', error);
    }
  };

  useEffect(() => {
    if (text.trim() !== '') {
      getClubId();
    }
  }, [text]);

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Enter Club ID *:"
        style={styles.input}
        onChangeText={(newText) => onChangeText(newText)}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TesttextInput;
