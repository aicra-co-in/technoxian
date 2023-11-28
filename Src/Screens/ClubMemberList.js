import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'
import CustomHeader from '../Component/CustomHeader'
import { useNavigation } from '@react-navigation/native'


const ClubMemberList = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.container}>
        <CustomHeader back={true}
                // notification={true}
                //   filter={true} 
                scan={true}
                source={require('../Assets/Images/Back.png')}
                title={'Update Club Profile'}
                onPress={() => navigation.goBack()} />
                

        <View style={styles.textcontainer}>

    <Text style={styles.text}>Tx Membership Id:</Text>
    <Text style={styles.text}>TXMP140037290</Text>
        </View>
        <View style={styles.textcontainer}>

    <Text style={styles.text}>Name:</Text>
    <Text style={styles.text}>kahn</Text>
        </View>
        <View style={styles.textcontainer}>

<Text style={styles.text}>Email:</Text>
<Text style={styles.text}>abc@gmail.com</Text>
    </View>
    <View style={styles.textcontainer}>

<Text style={styles.text}>Tx Membership Id</Text>
<Text style={styles.text}>TXMP140037290</Text>
    </View>
    <View style={styles.textcontainer}>

<Text style={styles.text}>Mobile</Text>
<Text style={styles.text}>87840037290</Text>
    </View>
    <View style={styles.textcontainer}>

<Text style={styles.text}>State</Text>
<Text style={styles.text}>Jharkhand</Text>
    </View>


    <View style={styles.textcontainer}>

<Text style={styles.text}>Payment</Text>
<Text style={styles.text}>Status</Text>
    </View>



            <View style={[styles.textcontainer,{alignItems:'center'}]}>

<Text style={styles.text}>Delete</Text>
<TouchableOpacity style={{height:40,width:50,backgroundColor:Colors.red,borderRadius:10}}>
    <Image source={require('../Assets/Images/delete.png')} style={{height:30,width:30,alignSelf:'center'}}/>
</TouchableOpacity>
    </View>     
    </View>
  )
}

export default ClubMemberList

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.black,
        padding:15
    },
    text:{
        color:Colors.white,
        fontSize:16
    },
    textcontainer:{
        flexDirection:"row",justifyContent:'space-between',padding:10
    }
})