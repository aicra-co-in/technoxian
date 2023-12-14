import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'
import CustomHeader from '../Component/CustomHeader'
import {useNavigation, useRoute} from '@react-navigation/native';

const removeHtmlTags = (htmlString) => {
  // Regular expression to remove HTML tags, <li>, <ul>, and consecutive spaces and newline characters
  return htmlString.replace(/<[^>]+>/g, ' ') // Remove HTML tags
  .replace(/\s+/g, ' ')      // Replace consecutive spaces with a single space
  .trim(); ;
};

const ViewNews = ({data}) => {
const navigation=useNavigation()
    
    const route = useRoute();
    return (
        <View style={{flex: 1, backgroundColor: '#000',padding:15}}>
         <CustomHeader
                back={true}
                // notification={true}
                // scan={true}
                source={require('../Assets/Images/Back.png')}
                // title={'Wrc Chalanges Registration'}
                onPress={() => navigation.navigate('Me')}
            />


          <Image
           source={{ uri: route.params.data. yoast_head_json.og_image[0].url }}
            style={{ height: 200,borderRadius:30}}
          />
           <Text style={styles.dateText}>{route.params.data.title.rendered}</Text>
          
          
          <ScrollView>
            <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: '#fff',
             
              alignSelf: 'center',
              textAlign:'left',
    
              width: '94%',
             
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
    },
    dateText: {
      fontSize: 16,
      color: Colors.white,
      paddingHorizontal:10,
    marginTop:30,
      fontWeight:'bold',
      padding:2,
    },
})