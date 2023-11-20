import React from 'react';
import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity } from 'react-native';
import Colors from '../Assets/Theme/Theme';

const data = [
  {
    img: require('../Assets/Images/BotLogo.png'),
  },
  {
    img: require('../Assets/Images/FastlineLogo.png'),
  },
  {
    img: require('../Assets/Images/DroneLogo.png'),
  },
  {
    img: require('../Assets/Images/BotLogo.png'),
  },
  {
    img: require('../Assets/Images/BotLogo.png'),
  },
  {
    img: require('../Assets/Images/FastlineLogo.png'),
  },
  {
    img: require('../Assets/Images/DroneLogo.png'),
  },
  {
    img: require('../Assets/Images/BotLogo.png'),
  },
];

const Card = ({ horizontal = true, numColumns = 1 }) => {
  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={{}}>
        <Image source={item.img} style={styles.cardImage} />
      </TouchableOpacity>
    </View>
  );

  if (numColumns === 1) {
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={horizontal}
      />
    );
  } else if (numColumns === 2) {
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    );
  } else if (numColumns === 3) {
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
      />
    );
  }

  return null; // Handle other cases if needed
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: Colors.tersery,
    padding: 20,
  },
  cardImage: {
    width: 78,
    height: 90,
  },
});
