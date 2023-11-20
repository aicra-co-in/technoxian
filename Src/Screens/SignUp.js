import { Button, StyleSheet, Text, View ,ScrollView,KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../Constant/GradientText';
import Colors from '../Assets/Theme/Theme';
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(5, 'Too Short').max(8, 'Too Long!').required('Required'),
});
const SignUp = () => {
    const navigation = useNavigation()
    const initialValues = {
        name: '',
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
        <ScrollView style={{flex:1,backgroundColor:Colors.Primary}}>
        <KeyboardAvoidingView>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={SignupSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldTouched }) => (
                <View style={{flex:1,  backgroundColor: Colors.Primary }}>
                    <View style={styles.form}>
                        {/* UserName CustomInput */}
                        <View style={styles.headerContent}>

                           <GradientText/>
                            <CustomButton title={'Login'} 
                            backgroundColor={Colors.Primary}
                             paddingVertical={8}
                             borderColor={Colors.white}
                             onPress={()=>navigation.navigate('Login')} />
                        </View>
                        <Text style={styles.heading}>Create your account</Text>

                        <CustomInput

                            placeholder="Full Name"
                            name="name"
                            value={values.name}
                            onChange={handleChange('name')}
                            onBlur={handleBlur}
                            error={errors.name}
                        />

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

                        <View style={{marginVertical:10}}>
                            <Text style={styles.text1}>By signing up, you accept our  <Text style={{ color: '#2AC171' }} onPress={() => navigation.navigate('TermAndCodition')}>Terms and Conditions</Text></Text>
                        </View>
                        {/* Submit button */}
                        <View style={{marginTop:15 }}>

                            <CustomButton title={'SignUp'} 
                            backgroundColor={Colors.red} 
                            paddingVertical={15} 
                            onPress={handleSubmit} />
                        </View>
                        <View style={styles.linecontainer}>
                            <View style={styles.line}></View>
                            <Text style={styles.text1}>OR</Text>
                            <View style={styles.line}></View>
                            <View></View>
                        </View>

                        <View style={{ marginTop: 30 }}>

                            <CustomButton title={'Continue with Google'} 
                            backgroundColor={Colors.black} 
                            paddingVertical={15} 
                            image={require('../Assets/Images/Google.png')} 
                            borderColor={Colors.white}/>
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
        color: Colors.red,
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
        color: Colors.redsecondry,
    },
    heading: {
        color: Colors.white,
        fontSize: 17,
        fontWeight: '600',
        marginTop: 20,

    },
    text1: {
        color: Colors.white,
        fontWeight: '400',
        fontSize: 12,
    },
    line: {
        height: 3,
        width: '42%',
        backgroundColor: Colors.white,

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
export default SignUp;
