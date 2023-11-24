import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Colors from '../Assets/Theme/Theme';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Splesh1 = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    setButtonClicked(true);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../Assets/Images/Boy.png')} resizeMode='contain' style={{ height: '40%', width: '100%' }} />
      <Text style={styles.text}> <Text style={{color:Colors.pink}}>Latest</Text> News About All Events</Text>
      <Text style={styles.text1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,
      </Text>
      <View style={styles.btncontainer}>
        <View style={{ width: '35%' }}>
          <CustomButton
            title={'SignUp'}
            backgroundColor={Colors.pink}
            paddingVertical={18}
            borderColor={Colors.black}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
        <View style={{ width: '35%' }}>
          <CustomButton
            title={'Login'}
            backgroundColor={ Colors.black}
            paddingVertical={15}
            borderColor={Colors.black}
            onPress={handlePress}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.black,
  },
  text: {
    fontSize: 40,
    color: Colors.white,
    lineHeight: 36,
    fontWeight: '600',
    marginTop: 40,
    paddingRight: 50,
    lineHeight:45
  },
  text1: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 15,
  },
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '35%',
  },
});

export default Splesh1;
