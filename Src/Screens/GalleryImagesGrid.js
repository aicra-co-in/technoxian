// GalleryZoomScreen.js
import React from 'react';
import { SafeAreaView, StyleSheet, Modal, TouchableOpacity, Dimensions, View } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import FastImage from 'react-native-fast-image';
import Colors from '../Assets/Theme/Theme';
import CustomHeader from '../Component/CustomHeader';
import { useNavigation, useRoute } from '@react-navigation/native';

const GalleryImagesGrid = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { imageSrc } = route.params;

  const handleZoomStateChange = (state) => {
    if (!state.zooming) {
      // If zooming is false, it means the user has zoomed out
      // Navigate back to the grid screen
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <Modal
        transparent={false}
        animationType={'fade'}
        visible={true}
      >

        <View style={styles.modelStyle}>
          
<View style={{marginTop:10,paddingHorizontal:1}}>

            <CustomHeader
              back={true}
              source={require('../Assets/Images/Back.png')}
              title={'Gallery'}
              onPress={() => navigation.goBack()}
            />
</View>
         
          <ImageZoom
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={Dimensions.get('window').width}
            imageHeight={Dimensions.get('window').height}
            onZoomStateChange={handleZoomStateChange}
          >
            <FastImage
              style={styles.fullImageStyle}
              source={{ uri: route.params.imageSrc }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </ImageZoom>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.closeButtonStyle}
            onPress={() => navigation.goBack()}
          >
            {/* Your close button component goes here */}
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default GalleryImagesGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
   
  },
  modelStyle: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.black,
    
  
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 50,
    right: 20,
    position: 'absolute',
  },
});

