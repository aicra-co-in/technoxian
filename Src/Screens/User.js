import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Colors from '../Assets/Theme/Theme';
import CustomHeader from '../Component/CustomHeader';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const User = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [useId, setUserId] = useState('');
  const [name, getName] = useState('');
  const [Email, getEmail] = useState('');
  const [Phone, getPhone] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const user_id = route.params?.user_id;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user_id1 = await AsyncStorage.getItem('user_id');
        const user_Name = await AsyncStorage.getItem('user_Name');
        const user_Email = await AsyncStorage.getItem('user_Email');
        const User_phone = await AsyncStorage.getItem('user_Phone');
        const userImageUri = await AsyncStorage.getItem('userImageUri');

        console.log(user_id1);
        setUserId(user_id1);
        getName(user_Name);
        getEmail(user_Email);
        getPhone(User_phone);
        setSelectedImage(userImageUri);
        console.log('Selected Image URI:', userImageUri);


       

      } catch (error) {
        console.error('Error getting user data:', error);
      }
    };

    getUserData();
  }, []);

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('--------->>>',image.path);
      setSelectedImage(image.path);

      AsyncStorage.setItem('userImageUri', image.path);
    });
  };

  // const handleApi = async () => {
  //   try {
  //     if (!selectedImage) {
  //       console.log('Please select an image');
  //       return;
  //     }

  //     const formData = new FormData();
  //     formData.append('profile_image', {
  //       uri: selectedImage,
  //       type: 'image/jpeg',
  //       name: 'profile.jpg',
  //     });

  //     const response = await axios.post(
  //       'https://api.technoxian.com/development/user-profile-update.php',
  //       formData,
  //       {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       }
  //     );

  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <CustomHeader
        back={true}
        notification={true}
        scan={true}
        source={require('../Assets/Images/Back.png')}
        title={'Menu'}
        onPress={() => navigation.goBack()}
      />
      <View style={{ width: '89%', backgroundColor: Colors.card, alignSelf: 'center', paddingVertical: 8, borderRadius: 20 }}>
        <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleImagePicker} style={styles.img}>
  {(selectedImage && useId) ? (
    // Show the selected image permanently for the specific user_id
    <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
  ) : (
    // Show a default image for other user_ids or when no image is selected
    <Image source={require('../Assets/Images/Robo.png')} style={{ height: 70, width: 70, borderRadius: 50 }} />
  )}
</TouchableOpacity>

        </View>
        <Text style={{ color: 'white', fontSize: 16, alignSelf: 'center', marginTop: 10 }}>
          User Id: {useId}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40 }}>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>Name:</Text>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>{name}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40 }}>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 6 }}>Email:</Text>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 6 }}>{Email}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40 }}>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 6 }}>Mobile:</Text>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 6 }}>
            {Phone}
          </Text>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 15,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  img: { height: 72, width: 72, borderWidth: 1, borderColor: Colors.white, borderRadius: 50, alignSelf: 'center' },
  selectedImage: { width: 70, height: 70, resizeMode: 'cover', borderRadius: 50 },
  separator: {
    height: 1,
    backgroundColor: Colors.white,
    marginVertical: 20,
  },
});
