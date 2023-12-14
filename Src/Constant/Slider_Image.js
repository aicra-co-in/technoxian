import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { SliderImage, Sliderimg } from "../restApi/Apiconfig";

const Slider_Image = () => {
  const imagePath=SliderImage;
  
  const [images, setImages] = useState([]);

  const handleImagePress = (index) => {
    // console.warn(`image ${index} pressed`);
    console.log('imagePresed')
  };

const sliderApi=async()=>{
  try {
  const res=await axios.get(Sliderimg)
  const imageBaseUrl = SliderImage;
  const mySliderData = res.data.users.map(item => `${imageBaseUrl}${item.image}`);
  // console.log("my slider data",mySliderData);
  setImages(mySliderData)
    
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
sliderApi()
},[])



  return (
    <View style={styles.container}>
      <SliderBox images={images} onCurrentImagePressed={handleImagePress} 
      ImageComponentStyle={{borderRadius: 15, width: '92%', marginTop: 5,right:15}}
      autoplay
  circleLoop/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



export default Slider_Image


