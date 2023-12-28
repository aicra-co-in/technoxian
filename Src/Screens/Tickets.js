import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import Colors from '../Assets/Theme/Theme';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../Component/CustomHeader';

const data = [
    {
        id: 1,
        img: 'https://www.technoxian.com/images/icon/services-three-icon-1.png',
        text: 'Media Pass',
        type: 'Free',
        award: 'Award Function',
        text1: 'Exhibition Area Access',
    },
    {
        id: 2,
        img: 'https://www.technoxian.com/images/icon/services-three-icon-1.png',
        text: 'Visitor Pass',
        type: 'Free',
        award: 'Award Function',
        text1: 'Exhibition Area Access',
    },
];

const Tickets = () => {
    const navigation = useNavigation()
    const renderItem = ({ item }) => {
        return (


            <View style={styles.box}>
                {/* Use the local image if you have it */}
                {/* <Image source={item.img} style={{ height: 300, width: 300 }} /> */}

                {/* Use the remote image */}
                <Image source={{ uri: item.img }} style={{ height: 70, width: 70 }} />

                <Text style={styles.heading}>{item.text}</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>{item.type}</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>{item.award}</Text>
                <Text style={styles.text}>{item.text1}</Text>
                <View style={{ marginTop: 20 }}>
                    <CustomButton
                        title={'PROCEED'}
                        backgroundColor={Colors.black}
                        paddingVertical={15}
                        onPress={() => {
                            // Navigate to TicketRegistration and pass the data
                            navigation.navigate('TicketRegistration', {
                                ticketData: {
                                    text: item.text, // Pass the text property from the current item
                                    // Add other properties as needed
                                },
                            });
                        }}
                    />

                </View>
            </View>

        );
    };

    return (
        <View style={styles.container}>
            <CustomHeader back={true} 
      // notification={true} 
      // filter={true} 
    //   scan={true}  
      source={require('../Assets/Images/Back.png')}
      title={'Pass'}
      onPress={()=>navigation.goBack()}/>
            
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Tickets;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        padding:15
    },
    box: {
        backgroundColor: Colors.pink,
        padding: 20,
        width: '96%',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 20
    },
    heading: {
        fontSize: 24,
        color: Colors.white,
        fontWeight: '900',
        fontFamily:'Poppins-Regular',
    },
    text: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '900',
        fontFamily:'Poppins-Regular',
    }
});
