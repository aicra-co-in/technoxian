import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Colors from '../Assets/Theme/Theme';

const data = [
  {
    id: 1,
    img: require('../Assets/Images/Main.png'),
    text: 'TECH SEMINAR',
    text1: "Procession of Countries and States Contingents, Celebration with international bands, icons and performers.",
  },
  {
    id: 2,
    img: require('../Assets/Images/Main.png'),
    text: 'TECH SEMINAR',
    text1: "Procession of Countries and States Contingents, Celebration with international bands, icons and performers.",
  },
];

const NewsCard = () => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.cardContainer}>
        <Image source={item.img} style={styles.image} resizeMode='cover' />
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.text1}>{item.text1}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 16,
  },
  cardContainer: {
    backgroundColor: Colors.card,
    borderRadius: 10,
    width: 300, // Adjust the width as needed
    marginRight: 16,
  },
  image: {
    height: 120,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    paddingHorizontal: 8,
    paddingTop: 5,
  },
  text1: {
    fontSize: 12,
    color: Colors.white,
    paddingHorizontal: 8,
  },
});
