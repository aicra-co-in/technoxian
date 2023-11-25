import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../Assets/Theme/Theme';

const { width, height } = Dimensions.get('window');

const data = [
  { id: 1, img: require('../Assets/Images/BotLogo.png') },
  { id: 2, img: require('../Assets/Images/FastlineLogo.png') },
  { id: 3, img: require('../Assets/Images/DroneLogo.png') },
  { id: 4, img: require('../Assets/Images/BotLogo.png') },
  { id: 5, img: require('../Assets/Images/BotLogo.png') },
  { id: 6, img: require('../Assets/Images/FastlineLogo.png') },
  { id: 7, img: require('../Assets/Images/DroneLogo.png') },
  { id: 8, img: require('../Assets/Images/BotLogo.png') },
];

const Card = ({ horizontal = true, numColumns = 1 }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handlePress = (id) => {
    setSelectedId(id);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <View
        style={[
          styles.cardContainer,
          {
            backgroundColor: selectedId === item.id ? '#f96342' : '#2B3038',
          },
        ]}
      >
        <Image source={item.img} style={styles.cardImage} resizeMode='contain' />
      </View>
    </TouchableOpacity>
  );

  if (numColumns === 1) {
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
      />
    );
  } else if (numColumns === 2) {
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    );
  } else if (numColumns === 3) {
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    );
  }

  return null;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
    padding: 20,
  },
  cardImage: {
    width: height * 0.05,
    height: width * 0.1,
    padding:30
  },
});
