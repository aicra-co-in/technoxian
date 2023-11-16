import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const CustomButton = ({ title, backgroundColor, paddingVertical, onPress, image,borderColor }) => {
  return (
    <View>
      <TouchableOpacity style={[styles.container, {backgroundColor:backgroundColor,borderColor:borderColor}]} onPress={onPress}>
        {image && <Image source={image} style={styles.image} />}
        <Text style={[styles.text, { paddingVertical: paddingVertical }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#705FAA',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth:1.3
  
  },
  text: {
    color: 'white',
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: '600',
    // alignSelf:'center'
  },
  image: {
    width: 20, 
    height: 20,
    marginRight: 0, 
  },
});
