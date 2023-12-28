import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity } from 'react-native';
import Calender from '../Constant/Calender';
import Colors from '../Assets/Theme/Theme';
import { useNavigation } from '@react-navigation/native'
import CustomHeader from '../Component/CustomHeader';
import { EventCalenderImage, wrcChalengesApi } from '../restApi/Apiconfig';
import axios from 'axios';

const data = [
  {
    id: 1,
    img: require('../Assets/Images/BotLogo.png'),
    heading: 'FASTEST LINE FOLLOWER',
    date: 'Agust 3, 2024 - August 6, 2024',
  },
  {
    id: 2,
    img: require('../Assets/Images/DroneLogo.png'),
    heading: 'FASTEST LINE FOLLOWER',
    date: 'Agust 3, 2024 - August 6, 2024',
  },
  {
    id: 3,
    img: require('../Assets/Images/ghana.png'),
    heading: 'FASTEST LINE FOLLOWER',
    date: 'Agust 3, 2024 - August 6, 2024',
  },
  {
    id: 4,
    img: require('../Assets/Images/india.png'),
    heading: 'FASTEST LINE FOLLOWER',
    date: 'Agust 3, 2024 - August 6, 2024',
  },
  {
    id: 5,
    img: require('../Assets/Images/bangladesh.png'),
    heading: 'FASTEST LINE FOLLOWER',
    date: 'Agust 3, 2024 - August 6, 2024',
  },
  {
    id: 6,
    img: require('../Assets/Images/ghana.png'),
    heading: 'FASTEST LINE FOLLOWER',
    date: 'Agust 3, 2024 - August 6, 2024',
  },
  {
    id: 7,
    img: require('../Assets/Images/india.png'),
    heading: 'FASTEST LINE FOLLOWER',
    date: 'Agust 3, 2024 - August 6, 2024',
  },
  {
    id: 8,
    img: require('../Assets/Images/bangladesh.png'),
    heading: 'FASTEST LINE FOLLOWER',
    date: 'Agust 3, 2024 - August 6, 2024',
  },
];

const EventCalender = () => {
  const imagePath=EventCalenderImage
  const [detail,Setdetail]=useState([]);

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




  const navigation=useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.itemContainer,]}>
      <Image source={{ uri:imagePath + item.image}}  style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{item.name}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex:1,backgroundColor:Colors.black,padding:15}}>
        <CustomHeader
        back={true} 
        // notification={true}
        //  filter={true} 
         scan={true}  
         source={require('../Assets/Images/Back.png')}
         onPress={()=>navigation.goBack()}
         />
     
      <FlatList
        data={detail}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default EventCalender;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
    gap:15,
    // borderRadius:10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
    fontFamily:'Poppins-Regular',
  },
  date: {
    fontSize: 16,
    color: Colors.white,
    fontFamily:'Poppins-Regular',
  },
});
