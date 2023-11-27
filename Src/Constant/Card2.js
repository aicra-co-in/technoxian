import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Image, TouchableOpacity, Dimensions,Text } from 'react-native';
import Colors from '../Assets/Theme/Theme';

const { width, height } = Dimensions.get('window');

const data = [
  { id: 1, img: require('../Assets/Images/1.png'),tex:'Trincabotz' ,text1:"Delhi"},
  { id: 2, img: require('../Assets/Images/2.png'),tex:'Trincabotz',text1:"Bangladesgh" },
  { id: 3, img: require('../Assets/Images/1.png'),tex:'Trincabotz',text1:"Delhi" },
  { id: 4, img: require('../Assets/Images/1.png'),tex:'Trincabotz',text1:"Delhi"  },
  { id: 5, img: require('../Assets/Images/2.png') ,tex:'Trincabotz',text1:"Delhi"},
  { id: 6, img: require('../Assets/Images/1.png'),tex:'Trincabotz',text1:"Delhi"  },
  { id: 7, img: require('../Assets/Images/2.png'),tex:'Trincabotz',text1:"Delhi"  },
  { id: 8, img: require('../Assets/Images/1.png') ,tex:'Trincabotz',text1:"Delhi" },
];

const Card2 = ({ horizontal = true, numColumns = 1 }) => {
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
        <View style={{alignItems:'center'}}>

        <Image source={item.img} style={styles.cardImage} resizeMode='contain' />
        <Text style={styles.text}>{item.tex}</Text>
        <Text style={{fontSize:14,color:'white'}}>{item.text1}</Text>
        </View>
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

export default Card2;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    borderRadius: 15,
    overflow: 'hidden',
     padding: 22,
    // alignItems:"center"
  },
  cardImage: {
    width: height * 0.15,
    height: width * 0.15,
    // padding:30
  },
  text:{
    color:Colors.white,
    fontSize:16,
    marginTop:6
  }
});
