import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'
import CustomHeader from '../Component/CustomHeader'
import { useNavigation } from '@react-navigation/native'


const TermAndCondictions = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <CustomHeader back={true}
        // notification={true} 
        // filter={true} 
        // scan={true}  
        source={require('../Assets/Images/Back.png')}
        title={'Term And Conditions'}
        onPress={() => navigation.navigate('Menu')} />
        <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.heading}>Information</Text>
      <Text style={styles.text}>These Terms of Service apply to your use of the Technoxian website (https://www.technoxian.com/) and any linked services.

        You agree to adhere by these Terms of Service and to comply with all relevant laws and regulations by visiting https://www.technoxian.com/. If you do not agree to these Terms of Service, you are not permitted to use or access this website or any of technoxian’s other services.

        Technoxian reserve the right to review and amend any of these Terms of Service at our sole discretion. Upon doing so, we will update this page. Any changes to these Terms of Service will take effect immediately from the date of publication</Text>

      <Text style={styles.heading}>Limitation of use</Text>
      <Text style={styles.text}>By using this website, you warrant on behalf of yourself, your users, and other parties you represent that you will not:

        Modify, copy, prepare derivative works of, decompile any information contained in the website.

        Transfer the materials to another person or “mirror” the materials on any other server; remove any copyright or other proprietary notations on this website;

        Use this website or any of its linked services in a way that abuses or disrupts our networks, whether intentionally or unintentionally.

        use this website or its connected services to send or publish harassing, indecent, obscene, fraudulent, or unlawful content;

        infringe on any applicable laws or regulations by using this website or its linked services;

        use this website for the purpose of sending unsolicited advertisements or spam</Text>


      <Text style={styles.heading}>Limitation of use</Text>
      <Text style={styles.text}>By using this website, you warrant on behalf of yourself, your users, and other parties you represent that you will not:

        Modify, copy, prepare derivative works of, decompile any information contained in the website.

        Transfer the materials to another person or “mirror” the materials on any other server; remove any copyright or other proprietary notations on this website;

        Use this website or any of its linked services in a way that abuses or disrupts our networks, whether intentionally or unintentionally.

        use this website or its connected services to send or publish harassing, indecent, obscene, fraudulent, or unlawful content;

        infringe on any applicable laws or regulations by using this website or its linked services;

        use this website for the purpose of sending unsolicited advertisements or spam;</Text>
      <Text style={styles.heading}>Content Accuracy</Text>
      <Text style={styles.text}>The contents appearing on our website are not comprehensive and are for general information purposes only.</Text>
      <Text style={styles.heading}>Right to terminate</Text>
      <Text style={styles.text}>We may suspend or terminate your right to use our website for any breach of these Terms of Service.</Text>
      <Text style={styles.heading}>Method of Delivery</Text>
      <Text style={styles.text}>The delivery fee charged will vary depending on the product category as well the delivery location. Same day delivery is available for Selected Products and Selected Locations only. Goods will be delivered all over the world Estimated delivery Period of each item varies from location to location</Text>
      <Text style={styles.heading}>Confirmation of the Payment</Text>
      <Text style={styles.text}>Once payment has been made you will receive an email confirming the item you have purchased. Before the item you have purchased is dispatched to you we will reconfirm the address provided by you by contacting you or through an email.</Text>
      <Text style={styles.heading}>Cancellation of an order</Text>
      <Text style={styles.text}>Cancellation of an order will be done due to the non-availability of an item.</Text>
      <Text style={styles.heading}>Payment Method</Text>
      <Text style={styles.text}>We accept payments pay pal or Web X pay and it safe online payments At the time of payment, you will be directed to the respective payment gateway which is secured. If any clarification is required about the safety on the online payment contact relevant customer center or help desk</Text>
      <Text style={styles.heading}>Conditions and Warranty</Text>
      <Text style={styles.text}>Any item that is covered under a warranty card, details of the warranty will be disclosed on the product’s description page. However we have the absolute discretion in accepting or refusing any item under Exchange or Return and Refund Policy</Text>
      <Text style={styles.heading}>Exchange and Refund Policy</Text>
      <Text style={styles.text}>Though we strive to give you a great customer experience each time you shop with us, if you are unsatisfied with your purchase, you could exchange the item you have purchased according to the following conditions. Exchange Process If you are not satisfied with the item you have purchased call us on our customer care number. However you will not be able to exchange any electrical item if you have opened the seal box. Any item to be exchanged will be subject to a pre-examination by our technical staff.</Text>
      <Text style={styles.heading}>Cash On Delivery</Text>
      <Text style={styles.text}>COD not available.</Text>
      </ScrollView>
    </View>



  )
}

export default TermAndCondictions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 15
  },
  heading: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 13,
    color: Colors.white,
    marginTop: 5
  }
})