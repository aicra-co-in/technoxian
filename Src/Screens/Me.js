import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'
import CustomHeader from '../Component/CustomHeader'
import Card from '../Constant/Card'
import SliderImage from '../Constant/Slider_Image'
import Card1 from '../Constant/Card1'
import { useNavigation } from '@react-navigation/native'
import Card3 from '../Constant/Card3'
import Card2 from '../Constant/Card2'
import WinnerCard from '../Constant/WinnerCard'
import NewsCard from '../Constant/NewsCard'


const Me = () => {
  const navigation=useNavigation();
  return (
  
    <View style={styles.container}>

      
      <CustomHeader back={true} 
      // notification={true} 
      // filter={true} 
      scan={true}  
      source={require('../Assets/Images/Menu.png')}
      // title={'Home'}
      onPress={()=>navigation.navigate('Menu')}/>
    <ScrollView showsVerticalScrollIndicator={false} >
<SliderImage/>
      <Text style={styles.Text_heading}>WRC Challenges</Text>
      {/* <Card3/> */}
      {/* <Text style={styles.Text_heading}>Upcoming Matches</Text> */}
      {/* <Card2/> */}
      <Card numColumns={1} />
      <Text style={styles.Text_heading}>WRC Team</Text>
      <WinnerCard />
      {/* <Text style={styles.Text_heading}>Trending Team</Text>
      <Card1 /> */}
      {/* <Text style={styles.Text_heading}>Technoxian News</Text> */}
      {/* <Card /> */}
      <Text style={styles.Text_heading}>TX Robo Club</Text>
      <Card2 />
      <Text style={styles.Text_heading}>Trending News</Text>
     <View style={{marginBottom:10}}>

      <NewsCard/>
      {/* <WinnerCard /> */}
     </View>

      </ScrollView>
    </View>
 
  )
}

export default Me

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.black,
        paddingHorizontal:15,
        // gap:15
    },
    Text_heading:{
        color:Colors.white,
        fontFamily:'Poppins-Regular',
        fontSize:18,
        fontWeight:'500',
        marginTop:20
    }
})