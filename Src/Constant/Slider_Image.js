import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const Slider_Image = () => {
  const [images, setImages] = useState([
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
    // require('./assets/images/girl.jpg'),
  ]);

  const handleImagePress = (index) => {
    console.warn(`image ${index} pressed`);
  };

  return (
    <View style={styles.container}>
      <SliderBox images={images} onCurrentImagePressed={handleImagePress} 
      ImageComponentStyle={{borderRadius: 15, width: '92%', marginTop: 5,right:15}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



export default Slider_Image


