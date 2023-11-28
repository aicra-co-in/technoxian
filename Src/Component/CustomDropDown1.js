import { StyleSheet, Text, View } from 'react-native'
import React ,{useState} from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../Assets/Theme/Theme'
import { useFormikContext } from 'formik';


const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ]

  const CustomDropDown1 = ({ bgcolor, placeholder, validation, field,Country,onChange }) => {
    const formik = useFormikContext();
    const dropdownData = Country || data;

    return (
        <View>
            <Dropdown
                style={[styles.dropdown, { backgroundColor: bgcolor }]}
                placeholderStyle={[styles.placeholderStyle, { color: 'gray' ,fontSize:13}]}
                selectedTextStyle={[styles.selectedTextStyle, { color: 'gray' }]}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={[styles.iconStyle, { tintColor: 'gray' }]}
                data={dropdownData} 
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={placeholder}
                activeColor="rgba(0, 0, 0, 0.25)"
                searchPlaceholder="Search..."
                value={formik.values[field]}
                onChange={onChange}
            />
            {formik.touched[field] && formik.errors[field] && (
                <Text style={styles.errorText}>{formik.errors[field]}</Text>
            )}
        </View>
    );
};


  
  const styles = StyleSheet.create({
      dropdown: {
        // margin: 16,
        marginTop: 17,
        height: 47,
        borderBottomColor: Colors.white,
        borderBottomWidth: 1,
         borderRadius: 10,
        // backgroundColor:'#013262'
      },
      icon: {
        marginRight: 5,
        color:Colors.white
      },
      placeholderStyle: {
        fontSize: 16,
        paddingHorizontal: 18,
        color:Colors.white
      },
      selectedTextStyle: {
        fontSize: 16,
        paddingHorizontal: 20,
        color:Colors.white
      },
      iconStyle: {
        width: 20,
        height: 20,
         right: 15,
        tintColor:Colors.white,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
        backgroundColor:"#013262",
        color:Colors.white

      },
      errorText:{
        color:Colors.red,
        fontSize:12
      }
    });
export default CustomDropDown1

