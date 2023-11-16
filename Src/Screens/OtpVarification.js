// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import CodeInput from 'your-code-input-library';
// const OtpVarification = () => {
//     const _onFulfill = (code) => {
       
//         console.log('Entered code:', code);
      
//       };
//   return (
//     <View style={styles.container}>
     
//       <Text style={styles.text}>Please Enter The 4 digit Varification code that was sent to +91 xxxxxxxxxx the code is valid for 3 minutes </Text>
  
//       <CodeInput
//         ref="codeInputRef1"
//         secureTextEntry
//         borderType={'underline'}
//         space={5}
//         size={30}
//         inputPosition='left'
//         onFulfill={(code) => _onFulfill(code)}
//       />

//     </View>
//   )
// }

// export default OtpVarification

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'black',
//         padding:20
//     },
//     text:{
//     fontSize:16,
//     color:'white',
//     textAlign:'center',
//     padding:10

//     }
// })
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OtpVarification = () => {
  return (
    <View>
      <Text>OtpVarification</Text>
    </View>
  )
}

export default OtpVarification

const styles = StyleSheet.create({})