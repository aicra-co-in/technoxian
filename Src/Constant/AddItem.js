// import React, { useState } from 'react'
// import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList } from 'react-native'

// let tipArray = [
//     {key: '1', tip: 20},
//     {key: '2', tip: 12}
// ]

// const AddItem = function tipInputScreen( {navigation} ) {
    
//     const [ tip, setTip ] = useState('')
    
//     const addTip = ()=>{
//         if(tip == "")return

//         tipArray.push({key: (tipArray.length + 1).toString(), tip})
//         setTip('')
//     }

//     const logInput = (input)=>{
//         setTip(input)
//     }

//     const renderTip = ({ item }) => {
//         return(
//         <TouchableOpacity style={styles.listItem}>
//             <Text style={styles.buttonText}>{`${item.tip} $`}</Text>
//         </TouchableOpacity>)
//     }

//     return (
//         <View
//         style={styles.background}>
//             <TextInput
//             style={styles.input}
//             keyboardType={'number-pad'}
//             keyboardAppearance={'dark'}
//             onChangeText={logInput}
//             value={tip}
//             />

//             <TouchableOpacity
//             style={styles.redButton}
//             onPress={addTip}>
//                 <Text style={styles.buttonText}>Add Tip</Text>
//             </TouchableOpacity>
        
//             <FlatList
//             data={tipArray}
//             renderItem={renderTip}
//             style={styles.flatList}
//             />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     background: {
//         backgroundColor: 'grey',
//         paddingTop: Platform.OS === "android" ? 25:0,
//         width: '100%',
//         height: '100%',
//         alignItems: 'center'
//     },
//     input: {
//         marginTop:40,
//         color:'white',
//         fontSize:30,
//         backgroundColor: "#2e2a2a",
//         height: 50,
//         width: '90%',
//         textDecorationColor: "white",
//         borderColor: 'black',
//         borderWidth: 2
//     },
//     flatList:{
//         width: "100%"
//     },
//     listItem: {
//         width: "90%",
//         height: 50,
//         backgroundColor: "#2e2e2e",
//         borderRadius: 25,
//         marginVertical: 4,
//         marginHorizontal: "5%",
//         justifyContent: "center"
//     },
//     listItemTitle: {
//         color: "white",
//         textAlign: "center",
//         fontSize: 18
//     },
//     redButton: {
//         justifyContent: "center",
//         width: "90%",
//         height: 50,
//         backgroundColor: "red",
//         borderRadius: 25,
//         marginHorizontal: 20,
//         marginVertical: 10
//     },
//     buttonText: {
//         color: "white",
//         textAlign: "center",
//         fontSize: 18
//     }
// })



// export default AddItem

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddItem = () => {
  return (
    <View>
      <Text>AddItem</Text>
    </View>
  )
}

export default AddItem

const styles = StyleSheet.create({})