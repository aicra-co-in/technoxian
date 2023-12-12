import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';
import Colors from '../Assets/Theme/Theme';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../Component/CustomHeader';
import axios from 'axios';
import CustomButton from '../Component/CustomButton';
import { AddListApi } from '../restApi/Apiconfig';

const TestList = ({ route }) => {
  const navigation = useNavigation();
  const userId = route.params?.userId || 'DefaultUserId';
  const [userData, setUserData] = useState([{ name: '', email: '', mobile: '' }]);

  useEffect(() => {
    // You can remove the API call from useEffect if it's not intended to be called on component mount
    // postApiAddlist();
  }, []);

  const postApiAddlist = async (value) => {
    try {
      const data = new FormData();
      data.append('Club_id', userId);
      data.append('Team_Name', value.name);
      data.append('Team_Mobile', value.mobile);
      data.append('Team_Email', value.email);
      data.append('Institute_Name', 'AICRA');
      data.append('City', 'Delhi');
      data.append('State', 'Delhi');
      data.append('Country', 'India');

      const res = await axios.post(AddListApi, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data.message)
      if(res.data.message==="Club Member Add successfully."){
        Alert.alert('Club Member Add successfully.')
      }else{
        Alert.alert(' Member Already Registered.')
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNameChange = (text, index) => {
    const newData = [...userData];
    newData[index].name = text;
    setUserData(newData);
  };

  const handleEmailChange = (text, index) => {
    const newData = [...userData];
    newData[index].email = text;
    setUserData(newData);
  };

  const handleMobileChange = (text, index) => {
    const newData = [...userData];
    newData[index].mobile = text;
    setUserData(newData);
  };

  const handleAddMore = () => {
    setUserData([...userData, { name: '', email: '', mobile: '' }]);
  };

  const handleSubmit = () => {
    // Call the API when the Submit button is pressed
    if (userData.length > 0) {
      postApiAddlist(userData[0]);
    }
    // You can add additional logic here if needed
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={item.name}
        onChangeText={(text) => handleNameChange(text, index)}
        placeholderTextColor={'gray'}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={item.email}
        onChangeText={(text) => handleEmailChange(text, index)}
        placeholderTextColor={'gray'}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile"
        value={item.mobile}
        onChangeText={(text) => handleMobileChange(text, index)}
        placeholderTextColor={'gray'}
        keyboardType="numeric"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomHeader
        back={true}
        title={'Dashboard    '}
        source={require('../Assets/Images/Back.png')}
        onPress={() => navigation.goBack()}
      />
      <FlatList
        data={userData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <CustomButton title={'Add More'}
        backgroundColor={Colors.pink}
        paddingVertical={15}
        onPress={handleAddMore}

      />
      <View style={{marginBottom:5}}>

      </View>
       <CustomButton title={'Submit'}
        backgroundColor={Colors.pink}
        paddingVertical={15}
        onPress={handleSubmit}

      />
     
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Colors.black,
    flex: 1,
  },
  itemContainer: {
    marginBottom: 12,
    marginTop:10
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
   color:"black",
    borderRadius: 15,
    backgroundColor:'white'
  },
});

export default TestList;
