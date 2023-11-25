import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'
import CustomHeader from '../Component/CustomHeader'
import { useNavigation } from '@react-navigation/native'
const TermAndCodition = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
       
       <CustomHeader back={true} 
      // notification={true} 
      // filter={true} 
      // scan={true}  
      source={require('../Assets/Images/Back.png')}
       title={'Term And Conditions'}
      onPress={()=>navigation.navigate('SignUp')}/>
      {/* <Text style={{alignSelf:'center',fontSize:20,color:Colors.white}}>Term And Conditions</Text> */}
      <Text style={styles.text}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
         piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard 
         McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the 
         more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the 
         cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      </Text>
    </View>
  )
}

export default TermAndCodition

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:Colors.black,
    flex:1

  },
  text: {
    fontSize: 16,
    color:Colors.white,
    marginTop:20

  }
})