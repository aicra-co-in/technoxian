import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import SignUp from '../Screens/SignUp';

const Test = () => {
  return (
    <View style={{flex:1 ,}}>
      <View style={{height:'50%'}}>
        <Image
          source={require('../Assets/Images/Signup.png')}
          style={{ height: "102%", width:"110%",alignSelf:'center'}}
          resizeMode='contain'
        />
      </View>



      <ScrollView style={{ flex: 1,backgroundColor:'red',borderTopRightRadius:30,borderTopLeftRadius:30,height:'100%',marginTop:-90}}>
        <View style={{ padding:20}}>
          <Text>hi</Text>
          <Text>helllo</Text>
          <Text>hi</Text>
          <Text>helllo</Text>
          <Text>hi</Text>
          <Text>helllo</Text>
          <Text>hi</Text>
          <Text>helllo</Text>
          <Text>hi</Text>
          <Text>hi</Text>
          <Text>helllo</Text>
          <Text>hi</Text>
          <Text>helllo</Text>
          <Text>hi</Text>
          <Text>helllo</Text>
          <Text>hi</Text>
          <Text>jamshed</Text>
          <Text>hi</Text>
          <Text>helllo</Text>
          <Text>hi</Text>
          <Text>helllo</Text>
          <Text>hi</Text>
          <Text>helllo</Text>
          <Text>hi</Text>
          <Text>helllo</Text>
          <Text>hi</Text>
          <Text>helllo</Text>
          <Text>hi</Text>
          <Text>helllo</Text>
          <Text>hi</Text>
          <Text>helllo</Text>
          <Text>hi</Text>
          <Text>helllo</Text>
          <Text>hi</Text>
          <Text>helllo</Text>
          
          {/* ... more Text components ... */}
        </View>
      </ScrollView>
      
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
