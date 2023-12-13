import { FlatList, Image, ImageBackground, StyleSheet, Text, Touchable, View ,TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../Assets/Theme/Theme';
import axios from 'axios';
import { ClubImagePath, WrcTeam, WrcTeamApi } from '../restApi/Apiconfig';

const data = [
  {
    id: 1,
    imgbg: require('../Assets/Images/Bg.png'),
    img: require('../Assets/Images/A.png'),
    text: 'Tarun ',
    text1: 'Kumar   ',
    user: require('../Assets/Images/C-Boy.png'),
  },
  {
    id: 2,
    imgbg: require('../Assets/Images/Bg.png'),
    img: require('../Assets/Images/A.png'),
    text: 'Ajay',
    text1: 'srivastva',
    user: require('../Assets/Images/Viraj.png'),
  },
  {
    id: 3,
    imgbg: require('../Assets/Images/Bg.png'),
    img: require('../Assets/Images/A.png'),
    text: 'Tarun ',
    text1: 'Kumar',
    user: require('../Assets/Images/C-Boy.png'),
  },
  // Add more data objects if needed
];





const WinnerCard = () => {
  const imagePath=ClubImagePath

const [information,setInformation]=useState([])
  const getApi = async () => {
    try {
      // Assuming Axios is properly imported and WrcTeam is a valid URL
      const response = await axios.get(WrcTeamApi);
       console.log(response.data.team);
       setInformation(response.data.team)
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    // Call the getApi function when the component mounts
    getApi();
  }, []);
  
  
  const renderItem = ({ item }) => {
    // Check if the image URL is not an empty string
    if (item.Club_img !== '') {
      return (
        <View style={{ marginHorizontal: 5, backgroundColor: Colors.card, borderRadius: 20, padding: 10, flex: 1,width:200 ,alignItems:'center'}}>
          <TouchableOpacity>
            <Image source={{ uri: imagePath + item.Club_img }} style={{ height: 60, width: 60, borderRadius: 30, alignSelf: "center" }} resizeMode='contain' />
            <Text style={styles.text}>{item.captain_name}</Text>
            {/* <Text style={styles.text}>{item.mentor_name}</Text> */}
            <Text style={styles.text}>{item.club_name}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  
    // If Club_img is an empty string, return null (or any other fallback UI)
    return null;
  };
  

  return (
    <View style={{}}>
      <FlatList
        data={information}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
      />
    </View>
  );
};

export default WinnerCard;

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: 18,
    // marginTop: 30,
    alignSelf:'center'
  },
});
