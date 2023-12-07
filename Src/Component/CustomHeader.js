
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react'
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window');
export default function CustomHeader({
  title,
  filter,
  scan,
  notification,
  bgColor,
  back,
  profile,
  source,
  onPress,
}) {
  const pointsTo = useNavigation();
  const [userImageUri, setUserImageUri] = useState('');
  useEffect(() => {
    const fetchUserImageUri = async () => {
      try {
        // Retrieve user image URL from AsyncStorage
        const imageUri = await AsyncStorage.getItem('userImageUri');

        // Update the state with the retrieved image URL
        setUserImageUri(imageUri);
      } catch (error) {
        console.error('Error retrieving user image URL:', error);
      }
    };

    // Call the function to fetch user image URL
    fetchUserImageUri();
  }, []); //
  return (
    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
      <View style={{ flex: 2 }}>
        {back && (
          <TouchableOpacity onPress={onPress}>


            <Image
              source={source}
              resizeMode="contain"
              style={{ width: 20, height: 17, tintColor: 'white' }}
            />
          </TouchableOpacity>
        )}
        {profile && (
          <TouchableOpacity onPress={() => pointsTo.navigate('Profile')}>
            {(userImageUri) ? (
              // Show the selected image permanently for the specific user_id
              <Image source={{ uri: userImageUri }} style={styles.selectedImage} />
            ) : (
              // Show a default image for other user_ids or when no image is selected
              <Image
                source={require('../Assets/Images/Search.png')}
                resizeMode="contain"
                style={{ width: 30, height: 30 }}
              />
            )}

          </TouchableOpacity>
        )}
      </View>
      <Text
        style={[
          styles.headText,
          { flex: 5, marginBottom: Platform.OS === 'ios' ? 0 : -3 },
        ]}>
        {title}
      </Text>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          columnGap: 14,
        }}>
        {filter && (
          <TouchableOpacity onPress={filter}>
            <Image
              source={require('../Assets/Images/Search.png')}
              resizeMode="contain"
              style={{ width: 22, height: 22 }}
            />
          </TouchableOpacity>
        )}
        {notification && (
          <TouchableOpacity onPress={() => pointsTo.navigate('Notification')}>
            <Image
              source={require('../Assets/Images/Notification.png')}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        )}
        {scan && (
          <TouchableOpacity onPress={() => pointsTo.navigate('User')}>
            <Image
              source={require('../Assets/Images/Profile.png')}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headBackbtn: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 8,
    textAlign: 'center',
    width: width * 0.09,
    paddingVertical: 8,
    overflow: 'hidden',
  },
  headIconRest: {
    textAlign: 'right',
    flex: 3.3,
  },
  headText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'Poppins-SemiBold',
  },
  headerContainer: {
    flexDirection: 'row',
    // paddingHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 10,
  },
  selectedImage: {
    width: 30, height: 30,
    resizeMode: 'cover',
    borderRadius: 50
  },
});