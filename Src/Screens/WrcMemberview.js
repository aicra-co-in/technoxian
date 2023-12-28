import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { ClubImagePath,  } from '../restApi/Apiconfig';
import Colors from '../Assets/Theme/Theme';
import CustomHeader from '../Component/CustomHeader';

const WrcMemberview = () => {
  const imagePath = ClubImagePath
  const route = useRoute();
  const { itemData } = route.params;
  return (
    <View style={styles.container}>
      <CustomHeader
        back={true}
        source={require('../Assets/Images/Back.png')}
        title={'Club Member List'}
        onPress={() => navigation.goBack()}
      />
      <View style={{backgroundColor:Colors.card,padding:20,borderRadius:10}}>
       
      <Image source={{ uri: imagePath + itemData.Club_img }} style={{ height: 100, width: 100, borderRadius: 50, alignSelf: "center" }} resizeMode='contain' />
      <View style={{flexDirection:'row',justifyContent:'center',marginTop:5}}>
        <Text style={styles.text}>Club Name:  </Text>
      <Text style={styles.text}>{itemData.club_name}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
        <Text  style={styles.text}>Captain Name:</Text>
        <Text style={styles.text}>{itemData.captain_name}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text  style={styles.text}>Mentor_Name:</Text>
        <Text style={styles.text}>{itemData.mentor_name}</Text>
      </View>
      
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text  style={styles.text}>Dob:</Text>
        <Text style={styles.text}>{itemData.dob}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text  style={styles.text}>Team:</Text>
        <Text style={[styles.text,{paddingHorizontal:30,left:10}]}>{itemData.participants_name}</Text>
      </View>
      
     
     
     
      </View>
      {/* Display other properties as needed */}
    </View>
  )
}

export default WrcMemberview

const styles = StyleSheet.create({
  container:{
     flex: 1, backgroundColor: 'black' ,padding:15
    
  },
  box:{

  },
  text:{
    color:Colors.white,
    fontSize:16,
    fontFamily: 'Poppins-Regular',
  }
})