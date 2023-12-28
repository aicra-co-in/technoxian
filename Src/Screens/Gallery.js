// GalleryGridScreen.js
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import Colors from '../Assets/Theme/Theme';
import CustomHeader from '../Component/CustomHeader';
import { useNavigation } from '@react-navigation/native';

const Gallery = () => {
  const [dataSource, setDataSource] = useState([]);
  const navigation = useNavigation();

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://api.technoxian.com/production/gallery.php');
      const items = response.data.photo_link
        .filter(image => image.images_name && image.images_name !== 'null') // Exclude items with empty or null source
        .map((image, index) => ({
          id: index,
          src: `https://www.technoxian.com/images/gallery/2023/${image.images_name}`,
        }));
      setDataSource(items);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  
  useEffect(() => {
    fetchImages();
  }, []);
  
  

  const handleImagePress = (imageSrc) => {
    navigation.navigate('GalleryImagesGrid', { imageSrc });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal:7}}>


       <CustomHeader
        back={true}
        source={require('../Assets/Images/Back.png')}
        title={'Gallery'}
        onPress={() => navigation.goBack()}
      />
      </View>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <View style={styles.imageContainerStyle}>
            <TouchableOpacity
              key={item.id}
              style={{ flex: 1 }}
              onPress={() => handleImagePress(item.src)}
            >
              <FastImage
                style={styles.imageStyle}
                source={{
                  uri: item.src,
                }}
              />
            </TouchableOpacity>
          </View>
        )}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 5,
  },
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  imageStyle: {
    height: 120,
    width: '100%',
  },
});
;

