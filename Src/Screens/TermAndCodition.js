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
      Technoxian.com recognizes the importance of protecting the privacy of the personal 
      information collected, especially with respect to children’s privacy. We are committed to safeguarding the 
      online privacy of our users and do not intend to share, rent, or sell event Organizer’s information to any third party.
      This policy does not apply to the practices of companies or organizations that technoxian.com does not own or control or to 
      people that technoxian.com does not manage or employ. This policy also does not apply to sites with which technoxian.com may
       be linked.
       Technoxian.com does not collect personal information about registrants (name, address, email, hobbies) unless they provide
        it to us voluntarily and knowingly. Whenever technoxian.com does collect personal information, we will explicitly notify 
        users that we are doing so. Children (under the age of 13) are not eligible to use the Website unsupervised and if you 
        are under 13, we ask that you do not give any personal information to us. If you are under the age of 13, you may only 
        use this Website under the supervision of your parent or guardian.
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
    fontSize: 14,
    color:Colors.white,
    marginTop:20

  }
})