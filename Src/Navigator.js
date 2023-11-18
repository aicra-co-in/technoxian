import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomHeader from "./Component/CustomHeader";
import SignUp from './Screens/SignUp'
import CustomInput from "./Component/CustomInput";
import CustomButton from "./Component/CustomButton";
import SpleshScreen from "./Screens/SpleshScreen";
import GradientText from "./Constant/GradientText";
import TermAndCodition from "./Screens/TermAndCodition";
import Login from "./Screens/Login";
import ForgetPassword from "./Screens/ForgetPassword";
import OtpVarification from "./Screens/OtpVarification";
import CustomDropDown from "./Component/CustomDropDown";
import CodeInputComponent from "./Component/CodeInputComponent";
import ForgetOtp from "./Screens/ForgetOtp";
import ResetPassword from "./Screens/ResetPassword";
import HomeScreen from "./Screens/HomeScreen";
import Calender from "./Constant/Calender";
import DrawerComponent from "./Screens/DrawerComponent";
const Stack = createNativeStackNavigator();

const Navigators = ({ Screenames }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={"DrawerComponent"}>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Calender" component={Calender}/>
        <Stack.Screen name="OtpVarification" component={OtpVarification}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
        <Stack.Screen name="SpleshScreen" component={SpleshScreen}/>
        <Stack.Screen name="TermAndCodition" component={TermAndCodition}/>
        <Stack.Screen name="CustomHeader" component={CustomHeader} />
        <Stack.Screen name="CustomInput" component={CustomInput} />
        <Stack.Screen name="CustomButton" component={CustomButton} />
        <Stack.Screen name="GradientText" component={GradientText} />
        <Stack.Screen name="CustomDropDown" component={CustomDropDown} />
        <Stack.Screen name="CodeInputComponent" component={CodeInputComponent} />
        <Stack.Screen name="ForgetOtp" component={ForgetOtp} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="DrawerComponent" component={DrawerComponent} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigators;