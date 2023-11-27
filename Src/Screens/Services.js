import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Colors from '../Assets/Theme/Theme';

const data = [
  {
    id: 1,
    img: require('../Assets/Images/Team.png'),
    match: 'P',
    won: 'W',
    Draw: 'D',
    Lose: 'L',
    points: 'PTS',
  },
  {
    id: 2,
    img: require('../Assets/Images/Hand.png'),
    match: '9',
    won: '9',
    Draw: '0',
  Lose: '0',
    points: '+2.7',
  },
  {
    id: 3,
    img: require('../Assets/Images/Hand.png'),
    match: '9',
    won: '9',
    Draw: '0',
  Lose: '0',
    points: '+2.7',
  },
  {
    id: 4,
    img: require('../Assets/Images/Hand.png'),
    match: '9',
    won: '9',
    Draw: '0',
  Lose: '0',
    points: '+2.7',
  },
  {
    id: 5,
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
    <Image source={item.img} style={{height:30,width:30,tintColor:'white'}} resizeMode='contain'/>
    <Text style={styles.text}>{item.match}</Text>
    <Text style={styles.text}>{item.won}</Text>
    <Text style={styles.text}>{item.Draw}</Text>
    <Text style={styles.text}>{item.Lose}</Text>
    <Text style={styles.text}>{item.points}</Text>
  </View>
);

const Services = () => {
  return (

   
    <View style={styles.container}>
     <Text style={{fontSize:25,color:'white',alignSelf:'center',padding:10}}>Point Table</Text>
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
    // flexDirection: 'row',
    // alignItems: 'center',
    padding: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: Colors.white,
    // gap:15,
    backgroundColor:Colors.black
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  flatcontainer:{
justifyContent:"space-between",
flexDirection:'row',
backgroundColor:Colors.tersery,
// backgroundColor:'red',
padding:5,
borderBottomWidth: 1,
borderBottomColor: Colors.white,
// borderRadius:10,
// marginTop:1,
borderWidth:1,
borderColor:Colors.white,
  },
  text:{
color:Colors.white
  },
  

});
