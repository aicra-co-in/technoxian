import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import Colors from '../Assets/Theme/Theme';
import CustomHeader from '../Component/CustomHeader';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native'
import axios from 'axios';


const User = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  const user_id = route.params?.user_id

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
  const handleApi=async()=>{
    try {
      const formData = new FormData();

      formData.append('user_id', user_id);
      formData.append('Image', selectedImage.path);
      const responce=await axios.post('https://api.technoxian.com/development/user-profile-update.php',
      formData)
      
      console.log(responce)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
// handleApi()
  },[])
  
  return (
    <View style={styles.container}>
      <CustomHeader back={true} 
      notification={true} 
      // filter={true} 
      scan={true}  
      source={require('../Assets/Images/Back.png')}
      title={'Menu'}
      onPress={()=>navigation.navigate('HomeScreen')}/>
      <View style={{width:'89%',backgroundColor:Colors.card,alignSelf:'center',paddingVertical:8,borderRadius:20}}>

      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleImagePicker} style={styles.img}>
          {selectedImage ? <Image source={{ uri: selectedImage }} style={styles.selectedImage} />:<Image source={require('../Assets/Images/Robo.png')} style={{height:70,width:70,borderRadius:50}}/>}
        </TouchableOpacity>
        
      
      </View>
      <Text style={{color:'white',fontSize:16,alignSelf:"center",marginTop:10}}> User Id: {user_id ? user_id : 'Not available'}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:40}}>
        <Text style={{color:'white',fontSize:16,marginTop:10}}>Name:</Text>
        <Text style={{color:'white',fontSize:16,marginTop:10}}>Jamshed</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:40}}>
        <Text style={{color:'white',fontSize:16,marginTop:6}}>Email:</Text>
        <Text style={{color:'white',fontSize:16,marginTop:6}}>Jamshed@gmail.com</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:40}}>
        <Text style={{color:'white',fontSize:16,marginTop:6}}>Mobile:</Text>
        <Text style={{color:'white',fontSize:16,marginTop:6}}>7398877890</Text>
      </View><View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:40}}>
        {/* <Text style={{color:'white',fontSize:16,marginTop:6}}>Dob:</Text>
        <Text style={{color:'white',fontSize:16,marginTop:6}}>Jamshed</Text> */}
      </View>
      </View>
      <View style={styles.separator} />
    
    </View>
  );
};

export default User;

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
    alignSelf:'center',
    // backgroundColor:'red',
    // paddingHorizontal:40

  },
  img: { height: 72, width: 72, borderWidth: 1, borderColor: Colors.white, borderRadius: 50, alignSelf: 'center' },
  selectedImage: { width: 70, height: 70, resizeMode: 'cover', borderRadius: 50,},
  
});




