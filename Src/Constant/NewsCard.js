import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import axios from 'axios';
import Colors from '../Assets/Theme/Theme';
import { useNavigation } from '@react-navigation/native';
import { upcommingnewsApi } from '../restApi/Apiconfig';

const NewsCard = ({ scrollDirection }) => {
  const navigation = useNavigation();
  const [news, setNews] = useState([]);
  const [blogImage, setBlogImage] = useState('');

  const images = [
    {
      id: 1,
      url: 'https://futuretech.media/wp-content/uploads/2023/12/Agritech_1699949305.webp',
    },
    {
      id: 2,
      url: 'https://www.technoxian.com/images/logo/TX-shieldlogo.png',
    },
  ];

  const renderNewsApi = async () => {
    try {
      const response = await axios.get(upcommingnewsApi);
      if (response.data && response.data.length > 0) {
        setNews(response.data)
        console.log(response.data.title)
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
      <View style={styles.newsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ViewNews', { data: item })}>
          <View style={{ backgroundColor: Colors.card, width: 300, borderRadius: 20, height: 200, width: 300 }}>
            <Image
              style={{ height: 100, width: 300, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
              source={{ uri: item.yoast_head_json.og_image[0].url }}
            />
            <Text style={styles.dateText}>{truncateText(item.title.rendered)}</Text>
            <Text style={styles.contentText}>
              {truncateText(item.content.rendered)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  
  const truncateText = (text) => {
    const plainText = text.replace(/<[^>]+>/g, ''); // Remove HTML tags
    const cleanedText = plainText.replace(/[^a-zA-Z\s]/g, ''); // Remove special characters and numbers
    const words = cleanedText.split(' ');
    const truncatedWords = words.slice(0, 10);
    return truncatedWords.join(' ') + (words.length > 25 ? ' .....' : ''); // Add ellipsis if more than 30 words
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
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    // marginTop: 16,
  },
  newsContainer: {
    marginLeft: 10,
    // borderRadius: 30, // Updated borderRadius to 30
    overflow: 'hidden',
   
  },
  imageBackground: {
    height: 150,
    width: 250,
    borderRadius: 20,
  },
  dateText: {
    fontSize: 13,
    color: Colors.white,
    paddingHorizontal: 10,
    marginTop:3,
    fontWeight: 'bold',
    fontFamily:'Poppins-Regular',
  },
  contentText: {
    fontSize: 12,
    color: Colors.white,
    padding: 10,
    fontFamily:'Poppins-Regular',
    // Add any other styles for the content text here
  },
});
