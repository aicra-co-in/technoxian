import { StyleSheet, View } from 'react-native';
import React from 'react';
import Colors from '../Assets/Theme/Theme';
import { WebView } from 'react-native-webview';

const TxStore = () => {
  return (
    
      <WebView source={{ uri: 'https://abiraworld.com/store/' }} style={{ flex: 1 }} />
   
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
