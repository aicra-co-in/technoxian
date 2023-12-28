import { StyleSheet, Text, View ,Image,ScrollView,TouchableOpacity,Alert} from 'react-native'
import React ,{ useState }from  'react'
import Colors from '../Assets/Theme/Theme'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';


const TxMembeshpProgram = () => {
  const navigation=useNavigation()
  const elementButton = (value) => (
    <TouchableOpacity onPress={() => _onRegisterPress(value)}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>REGISTER NOW</Text>
      </View>
    </TouchableOpacity>
  );
  const _onRegisterPress = (screenName) => {
    // Use React Navigation to navigate to the specified screen
    navigation.navigate(screenName);
  };
  const write = (
    <View>
      <Image source={require('../Assets/Images/correct.png')} style={{ height: 25, width: 25,alignSelf:'center' }}  />
    </View>
  );

  const wrong = (
    <View>
      <Image source={require('../Assets/Images/cross.png')} style={{ height: 25, width: 25,alignSelf:'center' }}  />
    </View>
  );
  
  const [tableHead, setTableHead] = useState(['', 'Basic Membership Plan', 'Premium Membership Plan', 'RoboClub (Institution)','RoboClub (Corporate)']);
  const [tableTitle, setTableTitle] = useState(['Login Panel Access', 'Live Virtual Training to make Bots for Competitions', 'Title3', 'Title4']);
  const [tableData, setTableData] = useState([
    ['Joining Fee >>\n Membership Benefits v', 'INR 500/- + GST \nUSD 10', 'INR 2500/- + GST \nUSD 50','Group of minimum \n10Members','Group of minimum \n 10 Premium Members'],
    ['Login Panel Access', write,  write, write, write],
    ['Live Virtual Training to make Bots for Competitions',  write,  write, write, write],
    ['Free 10 Most Advance Technology Workshops every year',  wrong,  write,wrong,  write,],
    ['RoboClub member interaction platform', wrong, wrong,write,write],
    ['Free Membership Kit (T-Shirt/TX Brand Gifts)',  wrong,  write,wrong,  write,],
    ['Opportunity to participate in District/Regional/International Competition', wrong,  write,wrong,  write,],
    ['RoboClub International Ranking', wrong,  write,wrong,  write,],
    ['Free Visitor Pass to all Competition', write,  write, write, write],
    ['Technical Support (Online)',  write,  write, write, write],
    ['Sponsorship Opportunity', wrong, wrong,write,wrong],
    ['Access to Vendors for Components/ Equipment', write,  write, write, write],
    ['RoboClub Portfolio Listing on TechnoXian Official website', wrong, wrong,write,write],
    ['Branding Opportunity',wrong, wrong,write,write],
    ['Membership and Competition Certificates from various Govt Depts.',  write,  write, write, write],
    ['','','','','', ],
    ['', elementButton('RegisterForMembership'), elementButton('RegisterForMembership'),elementButton('RegisterForMembership'),elementButton('RegisterForMembership')],
    
  ]);
  const widthArr = [210, 160, 160, 160, 160];
  const _alertIndex = (value) => {
    Alert.alert(`This is column ${value}`);
  };

  return (
    <View style={styles.container}>
        <ScrollView>    
      <Image source={require('../Assets/Images/innerbanner.jpg')} style={{height:200,width:'100%'}}/>
     
      <Text style={[styles.dateText,{alignItems:'center',textAlign:'center'}]}> TECHNOXIAN MEMBERSHIP PROGRAM</Text>
      <Text style={{fontSize:16,color:Colors.white,paddingHorizontal:5,marginTop:10}}>The benefits of the membership are:</Text>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
            <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={[styles.text,{color:'white'}]} />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
              {tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={widthArr}
                  style={[styles.row, index === 0 && { backgroundColor: Colors.pink}]}
               
                  textStyle={[styles.text, index === 0 && { color: 'white' }]}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
      
      </ScrollView>
    </View>
  )
}

export default TxMembeshpProgram

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  dateText: {
    fontSize: 20,
    color: Colors.white,
    paddingHorizontal: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    backgroundColor: Colors.pink,
    padding: 5,
    borderRadius: 10,
    fontFamily:'Poppins-Regular',
  },
  header: { height: 55, backgroundColor: Colors.pink },
  text: { textAlign: 'center', fontWeight: '100', color: Colors.black, fontSize: 15,
   fontWeight: '800' ,
   fontFamily:'Poppins-Regular',
  },
  dataWrapper: { marginTop: -1 },
  row: { height: 55, backgroundColor: '#E7E6E1' },
  btn: { height: 40, backgroundColor: 'red', borderRadius: 30 ,width:'90%',alignSelf:'center'},
  btnText: { textAlign: 'center',color:'white',fontWeight:'800',alignSelf:'center',margin:10,fontFamily:'Poppins-Regular',},
});
