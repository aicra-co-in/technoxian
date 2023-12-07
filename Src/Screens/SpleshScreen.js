import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Assets/Theme/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SpleshScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const user_id = await AsyncStorage.getItem('user_id');
        if (user_id) {
          // User is logged in, navigate to HomeScreen
          navigation.navigate('HomeScreen', { user_id });
        } else {
          // User is not logged in, navigate to Splesh1 or Login screen
          navigation.navigate('Splesh1');
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        // Handle error, you might want to navigate to Splesh1 or Login screen by default
        navigation.navigate('Splesh1');
      }
    };

    // Check login status after 2 seconds
    const timer = setTimeout(checkLoginStatus, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.containt}>
        <Image
          source={require('../Assets/Images/SplashScreen.png')}
          resizeMode='cover'
          style={{ height: '100%', width: '100%', alignSelf: 'center' }}
        />
      </View>
    </View>
  );
};

export default SpleshScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  containt: {
    flex: 1,
    alignItems: 'center',
    gap: 30,
    justifyContent: 'center',
  },
});
