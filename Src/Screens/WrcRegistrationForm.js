import { StyleSheet, Text, View, ScrollView ,TextInput} from 'react-native'
import React from 'react'
import CustomDropDown1 from '../Component/CustomDropDown1'
import Colors from '../Assets/Theme/Theme'
import CustomInput1 from '../Component/CustomInput1'
import CustomButton from '../Component/CustomButton'
import CustomHeader from '../Component/CustomHeader'


const WrcRegistrationForm = () => {
  return (
    <ScrollView>

      <View style={styles.container}>
        <CustomHeader source={require('../Assets/Images/Menu.png')} back={true} notification={true} filter={true} scan={true}/>
        <CustomDropDown1 />
        <CustomInput1 placeholder={'Applicant Name: *'} />
        <CustomDropDown1 />
        <CustomInput1 placeholder={'Applicant Name: *'} />
        <CustomInput1 placeholder={'Enter Mobile Number: *'} />
        <CustomInput1 placeholder={'Enter Email Id: *'} />
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between',
          gap: 2,
        }}>
          <View style={{
            width: '47%',
            gap: 2,
          }}>

            <CustomInput1 placeholder={'DOB: *'} />
          </View>
          <View style={{
            width: '47%',
            gap: 2,
          }}>

            <CustomInput1 placeholder={'College/Institute: *'} />
          </View>
        </View>



        <View style={{
          flexDirection: 'row', justifyContent: 'space-between',
          gap: 2,
        }}>
          <View style={{
            width: '47%',
            gap: 2,
          }}>

            <CustomInput1 placeholder={'RoboClub Id: *'} />
          </View>
          <View style={{
            width: '47%',
            gap: 2,
          }}>

            <CustomInput1 placeholder={'RoboClub Name: *'} />
          </View>
        </View>
        <CustomInput1 placeholder={'Country: *'} />



        <View style={{
          flexDirection: 'row', justifyContent: 'space-between',
          gap: 2,
        }}>
          <View style={{
            width: '47%',
            gap: 2,
          }}>

            <CustomInput1 placeholder={'State:'} />
          </View>
          <View style={{
            width: '47%',
            gap: 2,
          }}>

            <CustomInput1 placeholder={'City:'} />
          </View>
        </View>



        <CustomInput1 placeholder={'Rahul Singh'} />
        <CustomInput1 placeholder={'Water Rocket Challenge: *'} />
        <View style={{height:100,backgroundColor:Colors.white,marginTop:20,borderRadius:20}}>
          
        <TextInput
         style={styles.input}
         placeholder={'Type your message here...'}
         multiline
       onChangeText={()=>{}}
        // onBlur={() => onBlur(name)}
        // value={value}
        // name={name}
        // secureTextEntry={secureTextEntry} 
        
      />
        </View>

        <View style={{marginTop:20}}>

        <CustomButton title={'Continue with Google'}
          backgroundColor={Colors.red}
          paddingVertical={15}
          
          borderColor={Colors.white} />
      </View>
          </View>
    </ScrollView>
  )
}

export default WrcRegistrationForm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
    padding: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    // borderWidth: 1,
    paddingLeft: 10,
    color: 'black', 
    marginTop:10
  },
})