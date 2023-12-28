import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MultipleSelector = ({ Country, selectedValue, onChange, selecteddata,onSelectionChange }) => {
  const [selected, setSelected] = useState([]);

  const dropdownData = Country || [];

  useEffect(() => {
    // Update the internal state when the selectedState prop changes externally
    if (selecteddata && selecteddata.length > 0) {
      setSelected(selecteddata);
    }
  }, [selecteddata]);

  const handleSelectionChange = (selectedItems) => {
    setSelected(selectedItems);
    console.log(selected)

    // Call the provided onChange function with the selected items
    if (onChange) {
      onChange(selectedItems);
    }
    if (onSelectionChange) {
      onSelectionChange(selectedItems);
    }
  };

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        data={dropdownData}
        labelField="label"
        valueField="value"
        placeholder="Select items"
        searchPlaceholder="Search..."
        value={selected}
        onChange={handleSelectionChange}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
        selectedStyle={styles.selectedStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 10 },
  dropdown: {
    height: 49,
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    fontFamily:'Poppins-Regular',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily:'Poppins-Regular',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
    backgroundColor: 'white',
  },
});

export default MultipleSelector;
