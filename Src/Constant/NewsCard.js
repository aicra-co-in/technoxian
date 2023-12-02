import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ImageBackground, Linking, Alert } from 'react-native';
import Colors from '../Assets/Theme/Theme';
import axios from 'axios';
import { NewsApi } from '../restApi/Apiconfig';
import { useNavigation } from '@react-navigation/native';

const NewsCard = () => {
  const imagepath="https://futuretech.media/wp-content/uploads/";
  const navigation = useNavigation();
  const [news, setNews] = useState([]);

  const renderNewsApi = async () => {
    try {
      const response = await axios.get(NewsApi);
      console.log("-------->>>>", response.data.users);
      // console.log(imagepath+response.data.users.featured_image_url)
      console.log('Image URL:', imagepath + response.data.users.featured_image_url);

      setNews([response.data.users]); // Wrap the single news object in an array
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    renderNewsApi();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => navigation.navigate('ViewNews', { data: item })}
      >
        <ImageBackground
          source={{ uri:imagepath + item.featured_image_url }}
          style={styles.image}
          resizeMode='cover'
          onError={(error) => console.error('Image load error:', error.nativeEvent.error)}
          >
          {console.log('its path===',imagepath + item.featured_image_url)}
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.post_slug}</Text>
            <Text style={styles.text1}>{item.post_title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item) => item.ID.toString()}
        showsHorizontalScrollIndicator={false}
      />
     
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  cardContainer: {
    backgroundColor: Colors.card,
    borderRadius: 20,
    width: 300,
    marginRight: 16,
    overflow: 'hidden',
  },
  image: {
    height: 150,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 8,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text1: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
});
