import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Image, TouchableOpacity, Dimensions,Text } from 'react-native';
import Colors from '../Assets/Theme/Theme';
import axios from 'axios';
import { cardImage2, roboClub, wrcChalengesApi } from '../restApi/Apiconfig';
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

const Card2 = ({ horizontal = true, numColumns = 1 }) => {
  const imagePath=cardImage2
  const navigation=useNavigation()
  const [detail,Setdetail]=useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const handlePress = (id) => {
    setSelectedId(id);
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(roboClub);
      console.log(response.data.users.slice(0,20));
      Setdetail(response.data.users.slice(0,20)) ;
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
            backgroundColor: Colors.card
          },
        ]}
      >
        <View style={{alignItems:'center',paddingHorizontal:18}}>

        <Image source={{ uri:imagePath + item.Club_img}} style={styles.cardImage} resizeMode='contain' />
        <Text style={[styles.text,{fontSize:12}]}>{item.Club_Name}</Text>
        <Text style={{fontSize:11,color:'white'}}>{item.State}</Text>
        <Text style={{color:'white',fontSize:10}}>{item.Country}</Text>
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
    marginHorizontal: 5,
    borderRadius: 15,
    overflow: 'hidden',
     padding: 5,
    // alignItems:"center"
  },
  cardImage: {
    width: 100,
    height:75,
    // padding:30
    borderRadius:10
  },
  text:{
    color:Colors.white,
    fontSize:15,
    marginTop:6,
    fontFamily:'Poppins-Regular',
  }
});
