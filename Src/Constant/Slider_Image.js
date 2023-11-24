import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const SliderImage = () => {
  const [images, setImages] = useState([
    // "https://source.unsplash.com/1024x768/?nature",
    // "https://source.unsplash.com/1024x768/?water",
    // "https://source.unsplash.com/1024x768/?girl",
    // "https://source.unsplash.com/1024x768/?tree",
    require('../Assets/Images/Team.png'),
  ]);

  const handleImagePress = (index) => {
    console.warn(`image ${index} pressed`);
  };

  const renderTouchableImage = (index, imageSource) => (
    <TouchableOpacity key={index} onPress={() => handleImagePress(index)}>
      <ImageBackground
        source={{ uri: imageSource }}
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 15 }}
      >
        <Text style={styles.overlayText}>Your Text Here</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SliderBox
        images={images.map((image, index) =>
          renderTouchableImage(index, image)
        )}
        autoplay
        circleLoop
        resizeMethod="resize"
        resizeMode="cover"
      />
    </View>
  );
};

export default SliderImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
