import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'; 

const CELL_COUNT = 4;
const CodeInputComponent = () => {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
    return (
        <SafeAreaView style={styles.root}>
          <Text style={styles.title}>Verification</Text>
          <Text style={styles.text}>Please Enter The 4 digit Varification code that was sent to +91 xxxxxxxxxx the code is valid for 3 minutes </Text>
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
        root: {flex: 1, padding: 20},
        title: {textAlign: 'center', fontSize: 30,color:'white'},
        codeFieldRoot: {marginTop: 20},
        cell: {
          width: 50,
          height: 50,
          lineHeight: 38,
          fontSize: 24,
          borderWidth: 2,
          borderColor: '#00000030',
          textAlign: 'center',
        },
        focusCell: {
          borderColor: '#000',
        },
        container:{
             flex:1,
            backgroundColor:'black',
             padding:20
                },
                text:{
                fontSize:16,
                color:'white',
                textAlign:'center',
                padding:10
            }
      });
export default CodeInputComponent

