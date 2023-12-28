import { StyleSheet, View } from 'react-native';
import React from 'react';
import Colors from '../Assets/Theme/Theme';
import { WebView } from 'react-native-webview';
import CustomHeader from '../Component/CustomHeader';
import { useNavigation } from '@react-navigation/native';

const TxStore = () => {
  const navigation=useNavigation()

  return (
    <View style={{flex:1,backgroundColor:Colors.black,}}>
   <View style={{padding:10}}>

    <CustomHeader back={true}
                // notification={true} 
                // filter={true} 
                //   scan={true}  
                source={require('../Assets/Images/Back.png')}
                title={'Tx Shope'}
                onPress={() => navigation.goBack()} />
   </View>
      <WebView source={{ uri: 'https://abiraworld.com/store/' }} style={{ flex: 1 }} />
      </View>
   
  );
};

export default TxStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
