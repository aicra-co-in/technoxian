import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import Colors from '../Assets/Theme/Theme';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import { ZoomApi } from '../restApi/Apiconfig';
import CustomHeader from '../Component/CustomHeader';
import { useNavigation } from '@react-navigation/native';
const TxStore = () => {
  return (

    <WebView source={{ uri: 'https://abiraworld.com/store/' }} style={{ flex: 1 }} />

  );
};

const ZoomMeeting = () => {
  const navigation = useNavigation()
  const GetApi = async () => {
    try {
      const responce = await axios.get(ZoomApi)
      console.log(responce.data)
    } catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    GetApi()
  }, [])

  return (


    <View style={styles.container}>
      <CustomHeader back={true}
        // notification={true}
        //   filter={true} 
        // scan={true}
        source={require('../Assets/Images/Back.png')}
        title={'Deshboard    '}
        onPress={() => navigation.goBack()} />
      <View style={{
        alignItems: 'center',
        justifyContent: 'center', flex: 1
      }}>

        <TouchableOpacity onPress={() => navigation.navigate('TxStore')}>
          <Text style={styles.text}>Join Meeting</Text>
        </TouchableOpacity>
      </View>
    </View>


  );
};

export default ZoomMeeting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 15,

  },
  text: {
    color: Colors.white,
    backgroundColor: Colors.pink,
    fontSize: 18,
    padding: 18,
    borderRadius: 10,
    fontFamily:'Poppins-Regular',
  }
});




