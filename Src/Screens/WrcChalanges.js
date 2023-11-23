import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'
import CustomHeader from '../Component/CustomHeader'
import SliderImage from '../Constant/Slider_Image'
import Card from '../Constant/Card'
import Card1 from '../Constant/Card1'
import CustomDropDown from '../Component/CustomDropDown'
import { useNavigation } from '@react-navigation/native'

const WrcChalanges = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
         <CustomHeader back={true} 
         notification={true} 
        //  filter={true} 
         scan={true} 
         source={require('../Assets/Images/Back.png')}
         title={'Wrc Chalanges    '}
         onPress={()=>navigation.navigate('HomeScreen')}/>
         <ScrollView showsVerticalScrollIndicator={false}>
      <SliderImage />
      <Text style={styles.Text_heading}>WRC Challenges</Text>
      <Card numColumns={3} />
      <Text style={styles.Text_heading}>WRC Rule Book</Text>
      <View style={{marginBottom:20}}>

     <CustomDropDown 
     bgcolor={Colors.tersery} 
     colors={Colors.white}/> 
      </View>
      </ScrollView>
      
    </View>
  )
}

export default WrcChalanges

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.Primary,
        paddingHorizontal:15,
    },
    Text_heading:{
        color:Colors.white,
        fontFamily:'Poppins-Regular',
        fontSize:20,
        fontWeight:'500',
        marginTop:15,
    }
})