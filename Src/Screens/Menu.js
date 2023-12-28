import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import Colors from '../Assets/Theme/Theme';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../Component/CustomHeader';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [
  {
    id: 1,
   
    leftImage: require('../Assets/Images/left.png'),
    text: 'Robo Club Registration',
   screen: 'RoboclubRegistration',
  },
  {
    id: 2,
    upImage: require('../Assets/Images/arrow-up.png'),
    DownImage: require('../Assets/Images/down-arrow.png'),
    leftImage: require('../Assets/Images/left.png'),
    text: 'WRC challenges',
    subItems: [
      'WRC Innovation Contest',
      'WRC RoboSoccer',
      'WRC BotsCombat',
      'WRC RoboRace',
      'WRC Fast Line Follower',
      'WRC Water Rocket',
      'WRC Water Maze Solver',
      'WRC Rc Craft',
      'Sumo Bots',
      'Drone Soccer',
      'Drone Racing(FPV)',
      'Rc Car Racing',
      'Robo Hockey',
    ],
  },
  {
    id: 3,
    upImage: require('../Assets/Images/arrow-up.png'),
    DownImage: require('../Assets/Images/down-arrow.png'),
    leftImage: require('../Assets/Images/left.png'),
    text: 'Community',
    subItems: [
      'TX Referee',
      'WRC Winner 2023',
      'WRC Winner 2022',
      'TX RoboClub',
      'TX WRC Team',
      'Corporet RoboClub',
      'RoboClub Login',
      'International Committee',
      'Volunteer',
    ],
  },
  {
    id: 4,
    upImage: require('../Assets/Images/arrow-up.png'),
    DownImage: require('../Assets/Images/down-arrow.png'),
    leftImage: require('../Assets/Images/left.png'),
    text: 'Membership',
    subItems: [' TECHNOXIAN MEMBERSHIP PROGRAM', 'TX Basic Membership',],
  },
  {
    id: 5,
    upImage: require('../Assets/Images/arrow-up.png'),
    DownImage: require('../Assets/Images/down-arrow.png'),
    leftImage: require('../Assets/Images/left.png'),
    text: 'Event Calendar',
    screen: 'Event Calendar',
  },
  {
    id: 6,
    
    leftImage: require('../Assets/Images/left.png'),
    text: 'Term And Conditions',
   screen:'Term And Conditions'
  },
  {
    id: 7,
    
    leftImage: require('../Assets/Images/left.png'),
    text: 'Gallery',
    screen:'Gallery'
  },
  {
    id: 8,
    upImage: require('../Assets/Images/arrow-up.png'),
    DownImage: require('../Assets/Images/down-arrow.png'),
    leftImage: require('../Assets/Images/left.png'),
    text: 'More',
    subItems: ['News', 'Store'],
  },
  {
    id: 9,
    upImage: require('../Assets/Images/arrow-up.png'),
    DownImage: require('../Assets/Images/down-arrow.png'),
    leftImage: require('../Assets/Images/left.png'),
    text: 'Tickets',
    screen:'Tickets'
  },
];

const screenMapping = {
  
  'WRC Innovation Contest': 'Club',
  'WRC RoboSoccer': 'Club',
  'WRC BotsCombat': 'Club',
  'WRC RoboRace': 'Club',
  'WRC Fast Line Follower': 'Club',
  'WRC Water Rocket': 'Club',
  'WRC Water Maze Solver': 'Club',
  'WRC Rc Craft': 'Club',
  'Sumo Bots': 'Club',
  'Drone Soccer': 'Club',
  'Drone Racing(FPV)': 'Club',
  'Rc Car Racing': 'Club',
  'Robo Hockey': 'Club',
  'TX Referee': 'TXRefereeScreen',
  'WRC Winner 2023': 'WRCWinner2023Screen',
  'WRC Winner 2022': 'WRCWinner2022Screen',
  'TX RoboClub': 'TXRoboClubScreen',
  'TX WRC Team': 'TXWRCTeamScreen',
  'Corporet RoboClub': 'CorporetRoboClubScreen',
  'RoboClub Login': 'RoboClubLoginScreen',
  'International Committee': 'InternationalCommitteeScreen',
  'Voluenter': 'VoluenterScreen',
  ' Technoxian Membership Program': 'TxMembeshpProgram',
  'TX Basic Membership': 'RegisterForMembership',
  
 
};


const Menu = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [downStates, setDownStates] = useState(data.reduce((acc, item) => ({ ...acc, [item.id]: true }), {}));

  const handleDown = (itemId) => {
    setDownStates((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const handleScreenNavigation = (text, subItem) => {
    const screen = screenMapping[text];
    console.log('Navigating to screen:', screen);
    if (screen) {
      navigation.navigate(screen, { itemName: text, subItemName: subItem });
    }
  };

  useEffect(() => {
    const getImageUrl = async () => {
      try {
        const userImageUri = await AsyncStorage.getItem('userImageUri');
        setImageUrl(userImageUri);
        console.log('image======', userImageUri);
      } catch (error) {
        console.log(error);
      }
    };
    getImageUrl();
  }, []);

  const renderItem = ({ item }) => {
    console.log('Rendering item:', item);
  
    if (item.screen) {
      return (
        <View>
          <TouchableOpacity onPress={() => handleNavigation(item.screen)}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', fontFamily:'Poppins-Regular', }}>{item.text}</Text>
              <Image source={item.leftImage} style={{ height: 18, width: 20 }} tintColor={'white'} />
            </View>
          </TouchableOpacity>
          <View style={styles.separator} />
        </View>
      );
    }
  
    return (
      <View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <TouchableOpacity onPress={() => handleDown(item.id)}>
            <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' , fontFamily:'Poppins-Regular',}}>{item.text}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDown(item.id)}>
            <Image source={downStates[item.id] ? item.DownImage: item.upImage} style={{ height: 18, width: 20 }} tintColor={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        {downStates[item.id] ? null : (
          <View>
            {item.subItems && item.subItems.map((subItem, index) => (
              <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <TouchableOpacity onPress={() => handleScreenNavigation(subItem, subItem)}>
                  <Text style={{ color: 'white', fontSize: 14 }}>{subItem}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation(screenMapping[subItem])}>
                  <Image source={item.leftImage} style={{ height: 18, width: 20 }} tintColor={'white'} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };
  

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setSelectedImage(image.path);
    });
  };

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={{ paddingHorizontal: 15, backgroundColor: Colors.black, flex: 1 }}>
      <CustomHeader
        back={true}
        scan={true}
        source={require('../Assets/Images/Back.png')}
        title={'Menu'}
        onPress={() => navigation.navigate('Me')}
      />
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleImagePicker} style={styles.img}>
          {imageUrl ? (
            <Image source={{ uri: imageUrl }} style={styles.selectedImage} />
          ) : (
            <Image source={require('../Assets/Images/Robo.png')} style={{ height: 70, width: 70, borderRadius: 50 }} />
          )}
        </TouchableOpacity>
        
      </View>
      <View style={styles.separator} />
      <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
    </View>
  );
};


const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 5,
  },
  img: { height: 72, width: 72, borderWidth: 1, borderColor: Colors.white, borderRadius: 50, alignItems: 'center' },
  selectedImage: { width: 70, height: 70, resizeMode: 'cover', borderRadius: 50 },
  listItem: { backgroundColor: Colors.white, padding: 10, marginVertical: 5, borderRadius: 10 },
  listItemText: { color: Colors.white, fontSize: 14,fontWeight:'500',padding:5 },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.20)', // You can replace this with your desired color
    marginVertical: 5,
    marginTop:15
  },
});

export default Menu;




