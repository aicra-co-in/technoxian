import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'
import CustomHeader from '../Component/CustomHeader'
import {useRoute} from '@react-navigation/native';

const removeHtmlTags = (htmlString) => {
  // Regular expression to remove HTML tags, <li>, <ul>, and consecutive spaces and newline characters
  return htmlString.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>|<li>|<\/li>|<ul>|<\/ul>|\s+/gmi, ' ').trim();
};

const ViewNews = ({data}) => {

    imagepath="https://futuretech.media/wp-content/uploads/";
    const route = useRoute();
    return (
        <View style={{flex: 1, backgroundColor: '#000'}}>
          <Image
           source={{ uri: imagepath + route.params.data.featured_image_url }}
            style={{width: '100%', height: 200}}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '800',
              color: '#fff',
              marginTop: 10,
              alignSelf: 'center',
    
              width: '94%',
            }}>
            {route.params.data.post_title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#fff',
              marginTop: 10,
              alignSelf: 'center',
    
              width: '94%',
            }}>
            {route.params.data.post_date}
          </Text>
          <ScrollView>
            <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: '#fff',
              marginTop: 10,
              alignSelf: 'center',
              textAlign:'left',
    
              width: '94%',
            }}>
            {removeHtmlTags(route.params.data.post_content)}
          </Text>
          </ScrollView>
          {/* <Text
            style={{
              fontSize: 10,
              fontWeight: '600',
              color: '#fff',
              marginTop: 10,
              alignSelf: 'center',
    
              width: '94%',
            }}>
            {route.params.data.publishedAt}
          </Text> */}
{/*     
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#fff',
              marginTop: 10,
              alignSelf: 'center',
    
              width: '94%',
            }}>
            {route.params.data.content}
          </Text> */}
        </View>
      );
}

export default ViewNews

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        padding: 20
    },
    text: {
        fontSize: 16,
        color: Colors.white
    }
})