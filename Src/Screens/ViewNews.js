import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import Colors from '../Assets/Theme/Theme';
import CustomHeader from '../Component/CustomHeader';
import { useNavigation, useRoute } from '@react-navigation/native';

const removeHtmlTags = (htmlString) => {
  // Regular expression to remove HTML tags, <li>, <ul>, and consecutive spaces and newline characters
  return htmlString.replace(/<[^>]+>/g, ' ') // Remove HTML tags
    .replace(/\s+/g, ' ')      // Replace consecutive spaces with a single space
    .trim();
};

const ViewNews = ({ data }) => {
  const navigation = useNavigation();
  const truncateText = (text) => {
    const plainText = text.replace(/<[^>]+>/g, ''); // Remove HTML tags
    const cleanedText = plainText.replace(/[^a-zA-Z\s]/g, ''); // Remove special characters and numbers
    const words = cleanedText.split(' ');
    const truncatedWords = words.slice(0, 10);
    return truncatedWords.join(' ') + (words.length > 25 ? ' .....' : ''); // Add ellipsis if more than 30 words
  };

  const route = useRoute();
  return (
    <View style={{ flex: 1, backgroundColor: '#000', padding: 15 }}>
      <CustomHeader
        back={true}
        source={require('../Assets/Images/Back.png')}
        onPress={() => navigation.goBack()}
        title={'News'}
      />

      <Image
        source={{ uri: route.params.data.yoast_head_json.og_image[0].url }}
        style={{ height: 200, borderRadius: 30 }}
      />
      <Text style={styles.dateText}>{truncateText(route.params.data.title.rendered)}</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: 13,
            color: '#fff',
            fontFamily: 'Poppins-Regular',
            marginTop:10,
            lineHeight:20
            // padding: 10,
            // textAlign:'center'
          }}>
          {removeHtmlTags(route.params.data.content.rendered
            .replace(/<[^>]+>/g, '')
            .replace(/[^\w\s]/gi, '')
            .replace(/\d+/g, '')
            .split(' ')
            .slice(0, 1000)
            .join(' '))}
        </Text>
      </ScrollView>
    </View>
  );
};

export default ViewNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 20,
  },
  text: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: 'Poppins-Regular',
    marginTop:10
  },
  dateText: {
    fontSize: 16,
    color: Colors.white,
    // paddingHorizontal: 10,
    marginTop: 30,
    fontWeight: 'bold',
    // padding: 2,
    fontFamily: 'Poppins-Regular',
    lineHeight: 20,
  },
});
