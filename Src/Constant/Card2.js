import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Colors from '../Assets/Theme/Theme';

const data = [
  {
    id: 1,
    text1: 'Technoxian 8',
    text2: 'Match 15',
    img: require('../Assets/Images/1.png'),
    text3: 'Trincabotz',
    text4: '      ',
    text5: ' 13h 15min',
    img1: require('../Assets/Images/2.png'),
    text6: 'Texnoxian',
  },
  {
    id: 2,
    text1: 'Technoxian 8',
    text2: 'Match 15',
    img: require('../Assets/Images/1.png'),
    text3: 'Trincabotz',
    text4: '      ',
    text5: ' 13h 15min',
    img1: require('../Assets/Images/2.png'),
    text6: 'Texnoxian',
  },
  // Add more items to your data array if needed
];

const Card2 = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={[styles.item,{}]}>
          <Text style={styles.text}>{item.text1}</Text>
          {/* <Text style={styles.text1}>{item.text2}</Text> */}
          <Image source={item.img} style={{height:50,width:50,marginTop:9}} resizeMode='contain' />
          <Text style={[styles.text,{color:Colors.white}]}>{item.text3}</Text>
        </View>
        <Text style={{fontSize:50,color:Colors.white,marginTop:30,fontWeight:'bold'}}>{item.text4}</Text>
        <View>
          <View style={[styles.item,{}]}>
            <View style={{flexDirection:"row"}}>
             
            {/* <Text style={styles.text}>(<Text style={{color:"red",}}>.</Text>)</Text> */}
            <Text style={[styles.text,{color:'#4C5053'}]} >{item.text5}</Text>
            </View>
            <Image source={item.img1}  style={{height:50,width:50,marginTop:20}} resizeMode='contain'/>
            <Text  style={[styles.text,{color:Colors.white}]}>{item.text6}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{}}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Card2;

const styles = StyleSheet.create({
  container:{
   
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:'#2B3038',
     padding:10,
    borderRadius:15,
    // marginHorizontal:20
    //  paddingHorizontal:30,
     marginHorizontal:10
   
  },
  item:{
    alignItems:'center',
    // left:20

  },
  text:{
    fontSize:18,
    color:Colors.white,
    fontWeight:'bold'
  },
  text1:{
    fontSize:12,
    color:Colors.white
  }
});
