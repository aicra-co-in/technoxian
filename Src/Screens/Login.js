import { Button, StyleSheet, Text, View ,ScrollView,KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../Constant/GradientText';
const SignupSchema = Yup.object().shape({
    

    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(5, 'Too Short').max(8, 'Too Long!').required('Required'),
});
const Login = () => {
    const navigation = useNavigation()
    const initialValues = {
       
        email: '',
        password: ''
        // Define your initial form values here
        // For example:
        // fieldName: '',
    };

    const handleSubmit = (values) => {
        // Handle form submission here
        console.log(values);
    };

    return (
        <ScrollView style={{flex:1,backgroundColor:'black'}}>
        <KeyboardAvoidingView>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={SignupSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldTouched }) => (
                <View style={{flex:1,  backgroundColor: 'black' }}>
                    <View style={styles.form}>
                        {/* UserName CustomInput */}
                        <View style={styles.headerContent}>

                           <GradientText/>
                            <CustomButton title={'Sign Up'}
                             backgroundColor={'#705FAA'} 
                             paddingVertical={8}
                             onPress={()=>navigation.navigate('SignUp')} />
                        </View>
                       

                        {/* Enter user Email */}
                        <CustomInput
                            placeholder="Email address"
                            name="email"
                            value={values.email}
                            onChange={handleChange('email')}
                            onBlur={handleBlur}
                            error={errors.email}
                        />
                        {/* For Password */}
                        <CustomInput

                            
                            placeholder="Minimum 8 characters"
                            name="password"
                            value={values.password}
                            onChange={handleChange('password')}
                            onBlur={handleBlur}
                            error={errors.password}
                            secureTextEntry={true}
                        />

                        <View style={{marginVertical:10,alignItems:'flex-end'}}>
                            <Text style={styles.text1} onPress={()=>navigation.navigate('ForgetPassword')}>Forget Password</Text>
                        </View>
                        {/* Submit button */}
                        <View style={{marginTop:15 }}>

                            <CustomButton title={'Login'} backgroundColor={'#705FAA'} paddingVertical={15} onPress={handleSubmit} />
                        </View>
                        <View style={styles.linecontainer}>
                            <View style={styles.line}></View>
                            <Text style={styles.text1}>OR</Text>
                            <View style={styles.line}></View>
                            <View></View>
                        </View>

                        <View style={{ marginTop: 30 }}>

                            <CustomButton title={'Continue with Google'} 
                            backgroundColor={'black'} 
                            paddingVertical={15} 
                            image={require('../Assets/Images/Google.png')} 
                            borderColor={'white'}/>
                        </View>

                    </View>
                </View>
            )}
        </Formik>
        </KeyboardAvoidingView>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
    form: {
        // margin: 16,
        paddingHorizontal: 35,
        marginTop: "30%",

    },
    text: {
        fontSize: 46,
        fontWeight: '400',
        color: '#FF3D00'
    },
    heading: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
        marginTop: 20,

    },
    text1: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 14,
    },
    line: {
        height: 3,
        width: '42%',
        backgroundColor: 'white',

    },
    linecontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18,
        gap: 15
    },
    scrollViewContainer: {
        flexGrow: 1,
      },
      keyboardAvoidingView: {
        // flex: 1,
       
        
      },
      headerContent:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
      }
});



export default Login

