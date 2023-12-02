import { Button, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../Constant/GradientText';
import Colors from '../Assets/Theme/Theme';
import CustomHeader from '../Component/CustomHeader';
const SignupSchema = Yup.object().shape({
    name: Yup.string().email('Invalid email').trim()
        .min(4)
        .max(25)
        .required('Required'),


});

const data = [{
    id: 1,
    img: require('../Assets/Images/1.png'),
    text: 'Pathan Sahib',
    text1: 'capton',
},
]



const RoboClubAddMember = () => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.flatlistcontainer}>
                <Image source={item.img} style={{ height: 55, width: 55 }} />
                <View style={{ marginLeft: 15 }}>

                    <Text style={{ fontSize: 18, color: 'white' }}>{item.text}</Text>
                    <Text style={{ fontSize: 14, color: 'white' }}>{item.text1}</Text>
                </View>
            </TouchableOpacity>
        )
    }





    const navigation = useNavigation()
    const initialValues = {
        name: '',


    };

    const handleSubmit = (values) => {

        console.log(values);
        navigation.navigate('RoboClubDeshBoard');
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: 'red' }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={SignupSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (

                    <View style={{ flex: 1, }}>



                        <ScrollView style={styles.signupcontainer}>



                            <View style={styles.form}>
                                <CustomHeader back={true}

                                    source={require('../Assets/Images/Back.png')}
                                    title={'Add New Member'}
                                    onPress={() => navigation.goBack()} />

                                {/* <Text style={styles.heading}>TECHNOXIAN ROBOCLUB LOGIN</Text> */}




                                <CustomInput
                                    placeholder="Name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange('name')}
                                    onBlur={handleBlur}
                                    error={errors.name}
                                />


                                <View style={{ marginTop: 5, alignItems: 'center' }}>

                                    <CustomButton title={'Add Team'}
                                        backgroundColor={Colors.pink}
                                        paddingVertical={15}
                                        onPress={handleSubmit}

                                    />
                                </View>




                                <FlatList
                                    data={data}
                                    renderItem={renderItem}
                                    keyExtractor={(item) => item.id.toString()} />



                            </View>
                        </ScrollView>
                    </View>

                )}
            </Formik>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
    },
    error: {
        color: Colors.red,
        fontSize: 12,
    },
    form: {
        // margin: 16,
        paddingHorizontal: 20,
        // marginTop: "30%",

    },
    text: {
        fontSize: 46,
        fontWeight: '400',
        color: '#FF3D00'
    },
    heading: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: '800',
        marginTop: 20,
        alignSelf: 'center'
    },
    text1: {
        color: Colors.pink,
        fontWeight: '400',
        fontSize: 14,
    },
    line: {
        height: 3,
        width: '42%',
        backgroundColor: 'white',

    },
    linecontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18,
        gap: 15
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    keyboardAvoidingView: {
        // flex: 1,


    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    signupcontainer: {
        flex: 1,
        backgroundColor: Colors.black,
        padding: 10
        // borderTopRightRadius: 30,
        // borderTopLeftRadius: 30,
        // height: '100%',
        // marginTop: -90
    },
    text2: {
        color: Colors.white,
        fontSize: 14,
        alignSelf: 'center',
        paddingVertical: 10,
        paddingBottom: 20

    }, flatlistcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10, borderRadius: 15,
        marginTop: 10
    },
});











export default RoboClubAddMember

