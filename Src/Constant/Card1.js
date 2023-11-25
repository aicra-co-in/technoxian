import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import Colors from '../Assets/Theme/Theme';

const data = [
  {
    id: 1,
    img: require('../Assets/Images/india.png'),
    text: 'Team A',
    Point: '4 - 5',
    img1: require('../Assets/Images/ghana.png'),
    text1: 'Team B',
  },
  {
    id: 2,
    img: require('../Assets/Images/india.png'),
    text: 'Team A',
    Point: '3 - 5',
    img1: require('../Assets/Images/ghana.png'),
    text1: 'Team B',
  },
];

const Card1 = () => {
  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <View style={styles.teamContainer}>
        <Image source={item.img} style={[styles.image,{right:20}]} />
        <Text style={[styles.teamText,{right:20}]}>{item.text}</Text>
      </View>
      <Text style={[styles.score,{}]}>{item.Point}</Text>
      <View style={styles.teamContainer}>
        <Image source={item.img1} style={[styles.image,{left:20}]} />
        <Text style={[styles.teamText,{left:20}]}>{item.text1}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Card1;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#2B3038',
    // padding: 10,
     paddingHorizontal:20,
    borderRadius:15,
     marginLeft:10,
    // marginHorizontal:35,
    padding:13,
    
  },
  teamContainer: {
     paddingHorizontal: 10,
     marginHorizontal:15,
     padding:10
    //  gap:10
    // width:''
  },
  image: {
    width: 65,
    height: 45,
    // right:20
    // padding:20
  },
  teamText: {
    fontSize: 14,
    color: 'white',
    alignSelf: 'center',
  },
  score: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
