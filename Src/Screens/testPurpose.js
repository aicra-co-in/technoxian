import { StyleSheet, Text, View,TouchableOpacity,Image,Dimensions,} from 'react-native'
import React,{useState} from 'react'
const screenDimensions = Dimensions.get('screen');
const { height, width } = screenDimensions;

const TestPurpose = () => {
    const [isOnMic, setIsOnMic] = useState(true);

    const toggleMicOn = () => {
        setIsOnMic(!isOnMic);
    };
    
  return (
    <View>
     <TouchableOpacity onPress={() => {
        //toggleMicOn();
        //  leave();
      }}>
       
        <Image source={require('../Assets/Images/logout.png')} style={{height:height*0.05,width:width*0.1}} resizeMode='contain'/>
     </TouchableOpacity>
    </View>
  )
}

export default TestPurpose

const styles = StyleSheet.create({})