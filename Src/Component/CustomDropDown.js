import { StyleSheet, Text, View } from 'react-native'
import React ,{useState} from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../Assets/Theme/Theme'


const data = [
    { label: "Innovation Contest", value: "1" },
    { label: "RoboSoccer", value: "2" },
    { label: "WRC Bots Combat", value: "3" },
    { label: "Robo Race", value: "4" },
    { label: "Fastest Line Follower", value: "5" },
    { label: "Water Rocket", value: "6" },
    { label: "Maze Solver", value: "7" },
    { label: "Rc Creaft", value: "8" },
    { label: "Drone Competition", value: "9" },
  ]

const CustomDropDown = ({bgcolor,colors,placeholder}) => {
    const [value, setValue] = useState(null);
   
    return (
      <Dropdown
      style={[styles.dropdown,{backgroundColor:bgcolor}]}
      placeholderStyle={[styles.placeholderStyle,{color:colors}]}
      selectedTextStyle={[styles.selectedTextStyle,{color:colors}]}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={[styles.iconStyle,{tintColor:colors}]}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      activeColor="rgba(0, 0, 0, 0.25)"
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
      //   renderLeftIcon={() => (
      //     <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      //   )}
    />
  );
  };
  

  
  const styles = StyleSheet.create({
      dropdown: {
        // margin: 16,
        marginTop: 15,
        height: 48,
        borderColor: "rgba(0, 0, 0, 0.25)",
        borderWidth: 1,
        borderRadius: 10,
        // backgroundColor:bgcolor,
      },
      icon: {
        marginRight: 5,
        // color:Colors.white
      },
      placeholderStyle: {
        fontSize: 16,
        paddingHorizontal: 18,
        // color:color,
      },
      selectedTextStyle: {
        fontSize: 16,
        paddingHorizontal: 20,
        // color:color,
      },
      iconStyle: {
        width: 20,
        height: 20,
        right: 15,
        // tintColor:colors,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
        backgroundColor:"#013262",
        color:Colors.white

      },
    });
export default CustomDropDown

