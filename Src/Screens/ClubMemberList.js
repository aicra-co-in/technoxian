import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import CustomHeader from '../Component/CustomHeader';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ClubMemberList = ({ route }) => {
  // const navigation=useNavigation()
  const userId = route.params?.userId || 'DefaultUserId';
  const [tableHead, setTableHead] = useState([
    'Srn',
    'Tx-Member ID',
    'Name',
    'Email',
    'State',
    'Payment',
    'Delete',
  ]);
  const [widthArr, setWidthArr] = useState([40, 140, 100, 180, 120, 140, 160,]);
  const [tableData, setTableData] = useState([]);

  const ApiData = async () => {
    try {
      const response = await axios.get(
        `https://api.technoxian.com/development/club_member_get?Club_id=${userId}`
      );
      setTableData(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ApiData();
  }, []);

  const handleDelete = (index) => {
    // Create a copy of the tableData array
    const updatedTableData = [...tableData];
    // Remove the element at the specified index
    updatedTableData.splice(index, 1);
    // Update the state with the new array
    setTableData(updatedTableData);
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        back={true}
        source={require('../Assets/Images/Back.png')}
        title={'Club Member List'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderWidth: 2, borderColor: 'black' }}>
            <Row
              data={tableHead}
              widthArr={widthArr}
              style={styles.header}
              textStyle={styles.text}
            />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderWidth: 2, borderColor: 'black' }}>
              {tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={[
                    index + 1,
                    rowData.membership_id,
                    rowData.Name,
                    rowData.Email_ID,
                    rowData.State,
                    rowData.paid_amount,
                    <TouchableOpacity onPress={() => handleDelete(index)}>
                      <Text style={{ color: 'blue' }}>Delete</Text>
                    </TouchableOpacity>,
                  ]}
                  widthArr={widthArr}
                  style={[styles.row, index % 2 && { backgroundColor: 'white' }]}
                  textStyle={[styles.text,  { color: 'black' }]}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  header: { height: 50, backgroundColor: 'red' },
  text: { textAlign: 'center', fontWeight: '900', color: 'white' },
  dataWrapper: { marginTop: -1 },
  row: { height: 50, backgroundColor: '#e5e5cc' },
});

export default ClubMemberList;
