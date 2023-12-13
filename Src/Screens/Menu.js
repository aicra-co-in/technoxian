import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import Colors from '../Assets/Theme/Theme';
import CustomHeader from '../Component/CustomHeader';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';

const data = [
    { id: '1', text: "WRC Challenges",screen:'WRCChalanges' },
    { id: '2', text: "Event Calendar" ,screen:'EventCalender'},
    { id: '3', text: "WRC Registration form" ,screen:'WrcChalengesRegistration'},
    { id: '4', text: "Robo Club",screen:'RoboclubRegistration' },
    { id: '5', text: "TX Membership" ,screen:'TxMembership'},
    { id: '6', text: "Workshop" ,screen:'Workshop'},
    { id: '7', text: "Volunteer" ,screen:'Voluenter'},
    { id: '8', text: "Referee",screen:'Reference' },
    { id: '9', text: "TX Shopee",screen:'TxShope' },
    { id: '10', text: "Live Support" ,screen:'LiveSupport'},
    { id: '11', text: "Refer and earn",screen:'ReffferAndEarn' },
    { id: '12', text: "TermAndCondictions",screen:'TermAndCondictions' },
]

const Menu = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{}} onPress={() => handleNavigation(item.screen)}>
      <Text style={styles.listItemText}>{item.text}</Text>
      <View style={styles.separator} />
    </TouchableOpacity>
  );

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setSelectedImage(image.path);
    });
  };
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <CustomHeader back={true} 
      // notification={true} 
      // filter={true} 
      scan={true}  
      source={require('../Assets/Images/Back.png')}
      title={'Menu'}
      onPress={()=>navigation.navigate('Me')}/>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleImagePicker} style={styles.img}>
          {selectedImage ? <Image source={{ uri: selectedImage }} style={styles.selectedImage} />:<Image source={require('../Assets/Images/Robo.png')} style={{height:70,width:70,borderRadius:50}}/>}
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../Assets/Images/Arrow.png')} style={{ height: 15, width: 20 }} resizeMode='contain' />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        // ItemSeparatorComponent={true}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 15,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 5,
  },
  img: { height: 72, width: 72, borderWidth: 1, borderColor: Colors.white, borderRadius: 50, alignItems: 'center' },
  selectedImage: { width: 70, height: 70, resizeMode: 'cover', borderRadius: 50 },
  listItem: { backgroundColor: Colors.white, padding: 10, marginVertical: 5, borderRadius: 10 },
  listItemText: { color: Colors.white, fontSize: 16,fontWeight:'500',padding:5 },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.20)', // You can replace this with your desired color
    marginVertical: 5,
    marginTop:15
  },
});
