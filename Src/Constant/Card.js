import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Image, TouchableOpacity, Dimensions,Text } from 'react-native';
import Colors from '../Assets/Theme/Theme';
import axios from 'axios';
import { wrcChalengesApi } from '../restApi/Apiconfig';
import {useNavigation, useRoute} from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

const data = [
  { id: 1, img: require('../Assets/Images/BotLogo.png'),tex:'Trincabotz' ,text1:"3-Aug to 6-aug-2023"},
  { id: 2, img: require('../Assets/Images/FastlineLogo.png'),tex:'Trincabotz',text1:"3-Aug to 6-aug-2023" },
  { id: 3, img: require('../Assets/Images/DroneLogo.png'),tex:'Trincabotz',text1:"3-Aug to 6-aug-2023" },
  { id: 4, img: require('../Assets/Images/BotLogo.png'),tex:'Trincabotz',text1:"3-Aug to 6-aug-2023"  },
  { id: 5, img: require('../Assets/Images/BotLogo.png') ,tex:'Trincabotz',text1:"3-Aug to 6-aug-2023"},
  { id: 6, img: require('../Assets/Images/FastlineLogo.png'),tex:'Trincabotz',text1:"3-Aug to 6-aug-2023"  },
  { id: 7, img: require('../Assets/Images/DroneLogo.png'),tex:'Trincabotz',text1:"3-Aug to 6-aug-2023"  },
  { id: 8, img: require('../Assets/Images/BotLogo.png') ,tex:'Trincabotz',text1:"3-Aug to 6-aug-2023" },
];

const Card = ({ horizontal = true, numColumns = 1 }) => {
  const imagePath='https://api.technoxian.com/development/document/'
  const navigation=useNavigation()
  const [detail,Setdetail]=useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const handlePress = (id) => {
    setSelectedId(id);
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(wrcChalengesApi);
      console.log(response.data.users);
      Setdetail(response.data.users) ;
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors as needed, e.g., show an error message to the user
    }
  };

  useEffect(() => {
    fetchData();
  }, []);







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

        <Image source={{ uri:imagePath + item.image}} style={styles.cardImage} resizeMode='contain' />
        <Text style={styles.text}>{item.name}</Text>
        <Text style={{fontSize:13,color:'white'}}>{item.date}</Text>
        <Text style={{color:'white',fontSize:13}}>{item.venue}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (numColumns === 1) {
    return (
      <FlatList
        data={detail}
        renderItem={renderItem}
         keyExtractor={(item) => item.id.toString()}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
      />
    );
  } else if (numColumns === 2) {
    return (
      <FlatList
        data={detail}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    );
  } else if (numColumns === 3) {
    return (
      <FlatList
        data={detail}
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
    borderRadius: 15,
    overflow: 'hidden',
     padding: 5,
    // alignItems:"center"
  },
  cardImage: {
    width: 100,
    height:90,
    // padding:30
  },
  text:{
    color:Colors.white,
    fontSize:15,
    marginTop:6
  }
});
