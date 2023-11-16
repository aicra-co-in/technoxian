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
const Stack = createNativeStackNavigator();

const Navigators = ({ Screenames }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={"SpleshScreen"}>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
        <Stack.Screen name="SpleshScreen" component={SpleshScreen}/>
        <Stack.Screen name="TermAndCodition" component={TermAndCodition}/>
        <Stack.Screen name="CustomHeader" component={CustomHeader} />
        <Stack.Screen name="CustomInput" component={CustomInput} />
        <Stack.Screen name="CustomButton" component={CustomButton} />
        <Stack.Screen name="GradientText" component={GradientText} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigators;