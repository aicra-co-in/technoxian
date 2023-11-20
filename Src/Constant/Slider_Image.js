import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const SliderImage = () => {
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
      {/* <SliderBox
        images={images}
        onCurrentImagePressed={handleImagePress}
        dotColor="#FFEE58"
  inactiveDotColor="#90A4AE"
  paginationBoxVerticalPadding={20}
  autoplay={false}
  circleLoop={false}
  resizeMethod={'resize'}
  resizeMode={'cover'}
  paginationBoxStyle={{
    position: "absolute",
    // bottom: -20,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 4
  }}
  dotStyle={{
    width: 20,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
     marginTop: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)"
  }}
  ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5,alignSelf:"center",}}
  imageLoadingColor="#2196F3"
      /> */}
      <SliderBox
        images={images}
        onCurrentImagePressed={handleImagePress}
        ImageComponentStyle={{borderRadius: 15, width: '91%', marginTop: 5,right:15}}
      />
    </View>
  );
};

export default SliderImage;

const styles = StyleSheet.create({
  container: {
    // flex: 1
  }
});





