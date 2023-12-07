import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect, useState}from 'react'
import Colors from '../Assets/Theme/Theme'
import CustomHeader from '../Component/CustomHeader'
import CustomButton from '../Component/CustomButton'
import RazorpayCheckout from 'react-native-razorpay';
import {useRoute} from '@react-navigation/native';
const ShowPaymentOptions = () => {
    const [name,setName]=useState('')
    const [mobile,setmobile]=useState('')
    const [email,setemail]=useState('');
   const [clubName,setClubName]=useState('')
   const [getwrcId,setWrcId]=useState('')
    const route = useRoute();
    const { params } = route;
    const { wrcId, value} = params || {};
    useEffect(() => {
        console.log('value:', value.name);
        console.log('wrcId--',wrcId)
        setName(value.name)
        setemail(value.email)
        setmobile(value.mobile)
        setClubName(value.clubname)
        setWrcId(wrcId)
        // console.log('additionalData:', value);
    }, []);
    const handlePayment = (value) => {
        var options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.jpg',
          currency: 'INR',
          key: 'rzp_test_WUfmMzVxfd8tbK',
          amount: '295000', // Adjust the amount based on your requirements
          name: 'TECHNOXIAN',
          order_id: '', // Replace this with an order_id created using Orders API.
          prefill: {
            email: email, 
            contact: mobile, 
            name: name,
          },
          theme: { color: '#53a20e' },
        };
    
        RazorpayCheckout.open(options)
          .then((data) => {
            // Handle success
            Alert.alert('Payment Success', `Payment ID: ${data.order_id}`);
            // Additional logic based on successful payment, e.g., navigate to a success screen
          })
          .catch((error) => {
            // Handle failure
            Alert.alert('Payment Error', `Error: ${error.code} | ${error.description}`);
            // Additional error handling logic, if needed
          });
      };
   
    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 15 }}>

                <CustomHeader back={true}
                    //  notification={true} 
                    //  filter={true} 
                    //  scan={true} 
                    source={require('../Assets/Images/Back.png')}
                    title={'World Robotics Championship'}
                    onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.card}>
          
                <Text style={styles.heading}>Basic Information</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={styles.text}>Competition Id</Text>
                    <Text style={styles.text}>{getwrcId}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={styles.text}>Applicant Name</Text>
                    <Text style={styles.text}>{name}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={styles.text}>Email</Text>
                    <Text style={styles.text}> {email}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={styles.text}>Mobile</Text>
                    <Text style={styles.text}>{mobile}</Text>
                </View>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={styles.text}>Event Name</Text>
                    <Text style={styles.text}>World Robotics Championship</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={styles.text}>Club Name</Text>
                    <Text style={styles.text}>{clubName}</Text>
                </View>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={styles.text}>Registration Fees</Text>
                    <Text style={styles.text}>2950 /- INR</Text>
                </View>

            </View>
            <View style={{width:'40%',padding:20}}>
                <CustomButton backgroundColor={Colors.pink}
                    paddingVertical={15}
                    borderColor={'white'} 
                    title={'Pay Now'}
                    onPress={handlePayment}
                 />
            </View>
        </View>
    )
}

export default ShowPaymentOptions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black
    },
    card: {
        width: '90%',
        backgroundColor: Colors.card,
        alignSelf: 'center',
        padding: 20,
        borderRadius: 25
    },
    heading: {
        fontSize: 20,
        color: Colors.white,
        alignSelf: 'center',
        padding: 10
    },
    text: {
        fontSize: 14,
        color: Colors.white
    }
})