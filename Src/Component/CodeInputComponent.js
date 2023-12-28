import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'; 
import Colors from '../Assets/Theme/Theme';
import axios from 'axios';

const CELL_COUNT = 4;
const CodeInputComponent = () => {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });


    const ForgetApi = async (value) => {
      try {
        const formData = new FormData();
        formData.append('Email', value.Email);
  
        const response = await axios.post(
          'https://api.technoxian.com/production/Forgot_Password.php',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        // if(response.data.error===false){
        //   navigation.navigate('ForgetOtp')
        // }
        console.log('Response:', response);
      } catch (error) {
        console.error('Error:', error);
      }
  
    };
//   useEffect(()=>{
// handleSubmit()
//   },[])
    return (
        <SafeAreaView style={styles.root}>
          <CodeField
            ref={ref}
            {...props}
           
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor/> : null)}
              </Text>
            )}
          />
        </SafeAreaView>
      );
    };


    const styles = StyleSheet.create({
        root: {flex: 1, padding:10},
        title: {textAlign: 'center', fontSize: 30,color:Colors.white, fontFamily:'Poppins-Regular',},
        codeFieldRoot: {marginTop: 20},
        cell: {
          width: 50,
          height: 50,
          lineHeight: 38,
          fontSize: 24,
          borderWidth: 2,
          borderColor: Colors.white,
          textAlign: 'center',
          backgroundColor:Colors.white,
          alignItems:'center'
        },
        focusCell: {
          borderColor: Colors.white,
        },
        container:{
             flex:1,
            backgroundColor:Colors.white,
            
             padding:20
                },
                text:{
                fontSize:16,
                color:Colors.white,
                textAlign:'center',
                // padding:20
            }
      });
export default CodeInputComponent

