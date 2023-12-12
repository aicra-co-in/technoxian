import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import axios from 'axios';
import Colors from '../Assets/Theme/Theme';
import { useNavigation } from '@react-navigation/native';

const NewsCard = () => {
  const navigation = useNavigation();
  const [news, setNews] = useState([]);

  const renderNewsApi = async () => {
    try {
      const response = await axios.get('https://futuretech.media/wp-json/wp/v2/posts/');
      if (response.data && response.data.length > 0) {
        // setNews(response.data);
        console.log(response.data)
        setNews(response.data)
      } else {
        console.error('No news data found');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    renderNewsApi();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <ImageBackground source={{uri:'https://futuretech.media/wp-content/uploads/2023/12/unlocking-the-benefits-of-ai-in-education_-enhancing-learning-for-parents-and-students.png'}}
        style={{height:120,width:'99%'}} >

        <Text style={{fontSize:20,color:'red',paddingHorizontal:40}}>{item.date}</Text>
        <Text style={{fontSize:20,color:'red',paddingHorizontal:40}}>{item.title}</Text>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
      <Text>hihihihi</Text>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  image: {
    width: 300,
    height: 200,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 8,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  text1: {
    color: Colors.white,
    fontSize: 14,
  },
});
