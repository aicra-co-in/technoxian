import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../Assets/Theme/Theme';

const data = [
  {
    id: 1,
    imgbg: require('../Assets/Images/Bg.png'),
    img: require('../Assets/Images/A.png'),
    text: 'Tarun ',
    text1: 'Kumar',
    user: require('../Assets/Images/C-Boy.png'),
  },
  {
    id: 2,
    imgbg: require('../Assets/Images/Bg.png'),
    img: require('../Assets/Images/A.png'),
    text: 'Viraj',
    text1: 'srivastva ',
    user: require('../Assets/Images/Viraj.png'),
  },
  // Add more data objects if needed
];

const WinnerCard = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={{ marginHorizontal: 5 ,backgroundColor:'red',borderRadius:20,}}>
        <ImageBackground source={item.imgbg} style={{ height: 120, width: 160,  }} resizeMode='contain'>
          <View style={{ flexDirection: 'row',justifyContent:'space-between', flex:1}}>
            <View>
              <Image source={item.img} resizeMode='contain' style={{ height: 37, width: 37 }} />
              <Text style={[styles.text,{marginTop:30}]}>{item.text}</Text>
              <Text style={styles.text}>{item.text1}</Text> 
            </View>
            <Image source={item.user} resizeMode='contain' style={{ height: 130, width: 120, }} />
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={{}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
      />
    </View>
  );
};

export default WinnerCard;

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: 18,
    // marginTop: 30,
  },
});
