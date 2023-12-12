import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../Assets/Theme/Theme';
import CustomHeader from '../Component/CustomHeader';
import CustomButton from '../Component/CustomButton';
import RazorpayCheckout from 'react-native-razorpay';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { PaymentSuccess } from '../restApi/Apiconfig';

const ShowPaymentOptions = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [clubName, setClubName] = useState('');
    const [getwrcId, setWrcId] = useState('');
    const [paymentdata, setPaymentData] = useState('');
    const [paymentID, setpaymentID] = useState('');
    const [Country, setCountry] = useState('');
    const route = useRoute();
    const { params } = route;
    const { wrcId, value, payment, country } = params || {};

    useEffect(() => {
        setName(value.name);
        setEmail(value.email);
        setMobile(value.mobile);
        setClubName(value.clubname);
        setWrcId(wrcId);
        setPaymentData(payment);
        setCountry(country);
    }, []);

    const handlePayment = () => {
        const countryName = Country.toLowerCase();
        const currency = countryName === 'india' ? 'INR' : 'USD';

        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: currency,
            key: 'rzp_live_u3yEenHLKvnkIc',
            amount: paymentdata * 100,
            name: 'TECHNOXIAN',
            order_id: '', // Replace this with an order_id created using Orders API.
            prefill: {
              email: email,
              contact: mobile,
              name: name,
            },
            theme: { color: '#FF0000' },
          };

        RazorpayCheckout.open(options)
            .then((data) => {
                // Handle success
              
                console.log(data.razorpay_payment_id)
                setpaymentID(data.razorpay_payment_id)
                navigation.navigate('ShowSuccesspayment');
                handleApiPaymentGetWay();
            })
            .catch((error) => {
                // Handle failure
                Alert.alert(`Error: ${error.code} | ${error.description}`);
            });
    };

    const handleApiPaymentGetWay = async () => {
        try {
            const formData = new FormData();
            formData.append('txnid', paymentID);
            formData.append('wrc_id', getwrcId); // Use the actual wrcId instead of the hardcoded value

            const response = await axios.post(PaymentSuccess, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Response:', response.data);
            // Handle the API response as needed
        } catch (error) {
            console.error('Error:', error);
            // Display a user-friendly error message to the user
            Alert.alert('Error', 'Failed to process payment. Please try again later.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 15 }}>
                <CustomHeader
                    back={true}
                    source={require('../Assets/Images/Back.png')}
                    title={'World Robotics Championship'}
                    onPress={() => navigation.goBack()}
                />
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
                    <Text style={styles.text}>{paymentdata}</Text>
                </View>

            </View>
            <View style={{ width: '40%', padding: 20 }}>
                <CustomButton
                    backgroundColor={Colors.pink}
                    paddingVertical={15}
                    borderColor={'white'}
                    title={'Pay Now'}
                    onPress={handlePayment}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    card: {
        width: '90%',
        backgroundColor: Colors.card,
        alignSelf: 'center',
        padding: 20,
        borderRadius: 25,
    },
    heading: {
        fontSize: 20,
        color: Colors.white,
        alignSelf: 'center',
        padding: 10,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    text: {
        fontSize: 14,
        color: Colors.white,
    },
});

export default ShowPaymentOptions;
