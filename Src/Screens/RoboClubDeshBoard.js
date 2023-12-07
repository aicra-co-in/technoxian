import React from 'react';
import { StyleSheet, Text, View, FlatList, Image ,TouchableOpacity} from 'react-native';
import Colors from '../Assets/Theme/Theme';
import CustomHeader from '../Component/CustomHeader';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id:1,
    img: require('../Assets/Images/Mgroup.png'),
    text: 'Update Club Detail',
    screen:'RoboClubUpdate'
  },
  {
    id:2,
    img: require('../Assets/Images/Mgroup.png'),
    text: 'Add Club Member',
    screen:'TestList'
  },
  {
    id:3,
    img: require('../Assets/Images/Mgroup.png'),
    text: 'Club Member List',
    screen:'ClubMemberList'
  },
  {
    id:4,
    img: require('../Assets/Images/Mgroup.png'),
    text: 'Apply Wrc Compitition',
    screen:'WrcChalengesRegistration'
  },
  {
    id:5,
    img: require('../Assets/Images/Mgroup.png'),
    text: 'Blog List',
    screen:'Bloglist'
  },
  // Add more data items if needed
];

const RoboClubDeshBoard = ({ route }) => {


  const userId = route.params?.userId || 'DefaultUserId';
    const navigation=useNavigation()
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={()=>navigation.navigate(item.screen, { userId })}>
        <Image source={item.img} style={styles.cardImage} tintColor={'white'}/>
        <Text style={styles.cardText}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader back={true}
                // notification={true}
                //   filter={true} 
                // scan={true}
                source={require('../Assets/Images/Back.png')}
                title={'Deshboard    '}
                onPress={() => navigation.navigate('RoboclubLogin')} />

                <Text style={{color:'white',fontSize:22,padding:10}}>{userId}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
     padding: 20,
    backgroundColor:Colors.black
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
     padding: 8,
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor:Colors.card
  },
  cardImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'white'
  },
});

export default RoboClubDeshBoard;
