import React from 'react';
import { StyleSheet, Text, View, FlatList, Image ,Dimensions} from 'react-native';
import Colors from '../Assets/Theme/Theme';
const {width, height} = Dimensions.get('window');
const data = [
  {
    img: require('../Assets/Images/india.png'),
  },
  {
    img: require('../Assets/Images/ghana.png'),
  },
  {
    img: require('../Assets/Images/bangladesh.png'),
  },
  {
    img: require('../Assets/Images/india.png'),
  },
];

const Card1 = () => {
  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
        <View style={{}}>

      <Image source={item.img} style={styles.cardImage} />
        </View>
    </View>
  );

  return (
    <View>
    
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
         horizontal 
        // numColumns={2}
      />
    </View>
  );
};

export default Card1;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    // columnGap:10,
    // borderRadius: 8,
    overflow: 'hidden',
    // backgroundColor:Colors.tersery,
    //  padding:20
  },
  cardImage: {
    width: width*0.27, 
    height: height*0.12, 
borderRadius:10,
    // paddingHorizontal:10
    
  },
});
