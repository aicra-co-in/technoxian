import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Colors from '../Assets/Theme/Theme';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../Component/CustomHeader';

const Club = ({ route }) => {
    const { itemName, subItemName } = route.params;
    console.log('Item Name:', itemName);
    console.log('SubItem Name:', subItemName);
    const navigation = useNavigation()

    return (
        <View style={styles.newsContainer}>
            <CustomHeader
                back={true}
                // notification={true}
                //  filter={true} 
                title={'Register For Challenges'}
                // scan={true}
                source={require('../Assets/Images/Back.png')}
                onPress={() => navigation.goBack()}
            />
            <View style={{}}>
                <Image
                    style={{ height: 250, width: '100%',borderRadius:20}}
                    source={require('../Assets/Images/Signup.png')}
                    resizeMode='stretch'
                />

                <Text style={styles.dateText}>{subItemName}</Text>
               
                
               
                
                <TouchableOpacity onPress={() => { navigation.navigate('WrcChalengesRegistration') }}>

                    <Text style={[styles.dateText, { padding: 10, paddingHorizontal: 35, backgroundColor:  '#B70000', marginTop: 30 }]}>Click To Register For challenges</Text>
                </TouchableOpacity>

                <TouchableOpacity>

                    <Text style={[styles.dateText, { marginTop: 30 }]}>Rules And Guidelines</Text>
                </TouchableOpacity>

            </View>


        </View>
    );
};

export default Club;

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    newsContainer: {
        flex: 1,
        backgroundColor: Colors.black,
        padding:15

    },
    imageBackground: {
        height: 150,
        width: 250,
        borderRadius: 20,
    },
    dateText: {
        fontSize: 21,
        color: Colors.white,
        paddingHorizontal: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        backgroundColor: '#B70000',
        padding: 5,
        borderRadius: 10,
        fontFamily:'Poppins-Regular',
    },
    contentText: {
        fontSize: 15,
        color: Colors.white,
        fontFamily:'Poppins-Regular',
        //   padding: 10
        // Add any other styles for the content text here
    },
    CircleItem: {
        height: 10,
        width: 10,
        borderRadius: 40,
        backgroundColor: 'white',
        marginTop: 5,
        marginRight: 5
    }
});

