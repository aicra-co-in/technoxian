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
            image: 'data:image/png;base64,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',
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
