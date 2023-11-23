import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Colors from '../Assets/Theme/Theme';

const data = [
  {
    id: 1,
    img: require('../Assets/Images/Hand.png'),
    match: 'P',
    won: 'W',
    Draw: 'D',
    Lose: 'L',
    points: 'PTS',
  },
  {
    id: 1,
    img: require('../Assets/Images/Hand.png'),
    match: '9',
    won: '9',
    Draw: '0',
  Lose: '0',
    points: '+2.7',
  },
];

const renderItem = ({ item }) => (
  <View style={styles.flatcontainer}>
    <Image source={item.img} style={{height:30,width:30}} resizeMode='contain'/>
    <Text>{item.match}</Text>
    <Text>{item.won}</Text>
    <Text>{item.Draw}</Text>
    <Text>{item.Lose}</Text>
    <Text>{item.points}</Text>
  </View>
);

const Services = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
    gap:15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  flatcontainer:{
justifyContent:"space-between",
flexDirection:'row',
backgroundColor:'red',
padding:5,
borderBottomWidth: 1,
borderBottomColor: Colors.white,
// marginTop:1,
borderWidth:1,
borderColor:'blue'
  }

});
