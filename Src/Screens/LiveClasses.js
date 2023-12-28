import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Colors from '../Assets/Theme/Theme';
import CustomHeader from '../Component/CustomHeader';
import Feather from 'react-native-vector-icons/Feather';
import { SliderBox } from "react-native-image-slider-box";
import Share from 'react-native-share';
const screenDimensions = Dimensions.get('screen');
const { height, width } = screenDimensions;

const data = [
  {
    id: 1,
    img: require('../Assets/Images/Signup.png'),
    text: 'Explore',
    whatsapp: require('../Assets/Images/whatsapp.png')
  },
  {
    id: 2,
    img: require('../Assets/Images/Signup.png'),
    text: 'Explore',
    whatsapp: require('../Assets/Images/whatsapp.png')
  },
  {
    id: 3,
    img: require('../Assets/Images/Signup.png'),
    text: 'Explore',
    whatsapp: require('../Assets/Images/whatsapp.png')
  },
  {
    id: 4,
    img: require('../Assets/Images/Signup.png'),
    text: 'Explore',
    whatsapp: require('../Assets/Images/whatsapp.png')
  },
];

const LiveClasses = () => {
  const [text, onChangeText] = useState('');
  const [images, setImages] = useState([
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ]);

  const handleImagePress = (index) => {
    console.warn(`image ${index} pressed`);
  };


  const handleWhatsappImagePress = () => {
    const options = {
      title: 'Share via',
      message: 'Some message to share',
      url: 'https://www.example.com',
      // social: Share.Social.WHATSAPP,
      // whatsAppNumber: "123456",  // Specify the number without '+' and country code
    };

    Share.open(options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);
      });
  };

  const RenderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={item.img}
          style={styles.itemImage}
          resizeMode='stretch'
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.buttonText}>{item.text}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleWhatsappImagePress}>
            <Image source={item.whatsapp} style={styles.whatsappIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        back={true}
        source={require('../Assets/Images/Back.png')}
        title={'Batches'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.textContainer}>
        <TextInput
          placeholder='Search'
          placeholderTextColor={Colors.black}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TouchableOpacity style={styles.rightIconContainer}>
          <Feather name={'search'} size={24} color={Colors.black} />
        </TouchableOpacity>
      </View>

      {/* Slider */}
      <SliderBox
        images={images}
        onCurrentImagePressed={handleImagePress}
        dotColor="#FFEE58"
        ImageComponentStyle={styles.sliderImage}
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay={false}
        circleLoop={false}
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxStyle={styles.sliderPagination}
      />

      <Text style={styles.topClassesText}>Top Strategy Classes</Text>

      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 15,
  },
  textContainer: {
    height: 45,
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginVertical: 10,
    fontFamily:'Poppins-Regular',
  },
  rightIconContainer: {
    position: 'absolute',
    top: 10,
    right: 12,
  },
  input: {
    padding: 15,
    color: Colors.black,
    fontFamily:'Poppins-Regular',
  },
  itemContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginTop:20
  },
  itemImage: {
    height: height * 0.15,
    width: width * 0.93,
     borderTopLeftRadius: 10,
     borderTopRightRadius:10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  exploreButton: {
    backgroundColor: Colors.blue,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    paddingHorizontal: 30,
    color:Colors.white,
    fontWeight:'bold',
    fontFamily:'Poppins-Regular',
  },
  whatsappIcon: {
    height: 40,
    width: 40,
  },
  sliderImage: {
    borderRadius: 15,
    width: '92%',
    marginTop: 5,
    right: 15,
    marginBottom: 15,
    height: 150,
  },
  sliderPagination: {
    position: 'absolute',
    bottom: 20,
    padding: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  topClassesText: {
    color: Colors.white,
    fontSize: 20,
    paddingVertical:5
  },
});

export default LiveClasses;
