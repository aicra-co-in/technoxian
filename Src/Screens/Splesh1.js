import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import Colors from '../Assets/Theme/Theme';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { NewsApi, upcommingnewsApi } from '../restApi/Apiconfig';
import { date } from 'yup';

const { width, height } = Dimensions.get('window');

const Splesh1 = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [newsText, setNewsText] = useState('');
  const navigation = useNavigation();

  const [news, setNews] = useState([]);

  const renderNewsApi = async () => {
    try {
      const response = await axios.get(upcommingnewsApi);
     
      
         console.log(response.data.map((data)=>data.content.rendered.replace(/<[^>]+>/g, '')
        .replace(/[^\w\s]/gi, '')
        .replace(/\d+/g, '')
        .split(' ')
        .slice(0, 10)
        .join(' ')))
        setNews([
          response.data.map((data) =>
            data.content.rendered
              .replace(/<[^>]+>/g, '') // Remove HTML tags
              .replace(/[^\w\s]/gi, '') // Remove special characters
              .replace(/\d+/g, '')      // Remove numbers
              .split(' ')
              .slice(0, 5)
              .join(' ')
          )
        ]);
        
      
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    renderNewsApi();
  }, []);



  const handlePress = () => {
    setButtonClicked(true);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../Assets/Images/Moy.png')} resizeMode='contain' style={{ height: '40%', width: '100%' }} />
      <ScrollView showsVerticalScrollIndicator={false}>

      
      <Text style={styles.text}> <Text style={{color:Colors.redsecondry}}>Latest</Text> News About All Events</Text>
      <Text style={styles.text1}>
      {news}
      </Text>
      <View style={styles.btncontainer}>
        <View style={{ width: '35%' }}>
          <CustomButton
            title={'SignUp'}
            backgroundColor={Colors.pink}
            paddingVertical={15}
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
      </ScrollView>
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
    lineHeight:45,
    fontFamily:'Poppins-Regular',
  },
  text1: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 15,
    fontFamily:'Poppins-Regular',
  },
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '35%',
  },
});

export default Splesh1;
