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
import Slider_Image from "./Constant/Slider_Image";
import Card from "./Constant/Card";
import Menu from "./Screens/Menu";
import WrcChalanges from "./Screens/WrcChalanges";
import WrcRegistrationForm from "./Screens/WrcRegistrationForm";
import EventCalender from "./Screens/EventCalender";
const Stack = createNativeStackNavigator();

const Navigators = ({ Screenames }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false,
         
        }}
        
        initialRouteName={"SpleshScreen"}>
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
        <Stack.Screen name="Slider_Image" component={Slider_Image} />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="WrcChalanges" component={WrcChalanges} />
        <Stack.Screen name="WrcRegistrationForm" component={WrcRegistrationForm} />
        <Stack.Screen name="EventCalender" component={EventCalender} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigators;