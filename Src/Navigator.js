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


import EventCalender from "./Screens/EventCalender";
import RegistrationComponent from "./Screens/RegistrationComponent";
import Splesh1 from "./Screens/Splesh1";
import SignUpScreen from "./Screens/SignUpScreen";
import Test from "./Constant/Test";
import Card1 from "./Constant/Card1";
import User from "./Screens/User";
import Notification from "./Screens/Notification";
import Card3 from "./Constant/Card3";
import WinnerCard from "./Constant/WinnerCard";
import CustomcountryPicker from "./Constant/CustomcountryPicker";
import AddItem from "./Constant/AddItem";
import WRCChalanges from "./Screens/WrcChalanges";
import NewsCard from "./Constant/NewsCard";
import RoboclubRegistration from "./Screens/RoboclubRegistration";
import RoboclubLogin from "./Screens/RoboclubLogin";
import RoboClubUpdate from "./Screens/RoboClubUpdate";
import RoboClubDeshBoard from "./Screens/RoboClubDeshBoard";
import RoboClubAddMember from "./Screens/RoboClubAddMember";
import ClubMemberList from "./Screens/ClubMemberList";
import ShowMessagenotification from "./Constant/ShowMessage";
import ViewNews from "./Screens/ViewNews";
import Card2 from "./Constant/Card2";
import TodoScreen from "./Screens/TodoScreen";
import ApplyWrcCompitition from "./Screens/ApplyWrcCompitition";
import Bloglist from "./Screens/Bloglist";
import TestList from "./Screens/TestList";
import WrcChalengesRegistration from "./Screens/WrcChalengesRegistration";

import MultipleSelector from "./Component/MultipleSelector";
import ShowPaymentOptions from "./Screens/ShowPaymentOptions";
import TesttextInput from "./Constant/TesttextInput";
import ShowSuccesspayment from "./Screens/ShowSuccesspayment";
import TermAndCondictions from "./Screens/TermAndCondictions";
import LiveClasses from "./Screens/LiveClasses";
import LiveClassroom from "./Screens/LiveClassroom";
import TestPurpose from "./Screens/testPurpose";
import ZoomMeeting from "./Screens/ZoomMeeting";
import Gallery from "./Screens/Gallery";
import Community from "./Screens/Community";
import MemberShip from "./Screens/MemberShip";
import VerticaNews from "./Constant/VerticaNews";
import TxStore from "./Screens/TxStore";
import Club from "./Screens/Club";
import TxMembeshpProgram from "./Screens/TxMembeshpProgram";
import RegisterForMembership from "./Screens/RegisterForMembership";
import MembershipPaymentOption from "./Screens/MembershipPaymentOption";
import Tickets from "./Screens/Tickets";
import TicketRegistration from "./Screens/TicketRegistration";
import GalleryImagesGrid from "./Screens/GalleryImagesGrid";
import WhatsAppChat from "./Screens/WhatsAppChat";
import WrcMemberview from "./Screens/WrcMemberview";
const Stack = createNativeStackNavigator();

const Navigators = ({ Screenames }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false,
         
        }}
        
        initialRouteName={"Gallery"}>


{/* --------------------------------------Auth Part----------------------------------- */}

        <Stack.Screen name="SpleshScreen" component={SpleshScreen}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Splesh1" component={Splesh1}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        {/* -------------------------forget password Screens ---------------------------*/}
        <Stack.Screen name="OtpVarification" component={OtpVarification}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
        <Stack.Screen name="ForgetOtp" component={ForgetOtp} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />


        {/* -----------------------deshboard -----------------------------------------*/}
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Card1" component={Card1} />
        <Stack.Screen name="Card2" component={Card2} />
        <Stack.Screen name="Card3" component={Card3} />
        <Stack.Screen name="WinnerCard"component={WinnerCard} />
        <Stack.Screen name="NewsCard"component={NewsCard} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="TxStore" component={TxStore} />
        <Stack.Screen name="WrcMemberview" component={WrcMemberview}/>

{/* -----------------------------------------MENU-------------------------------- */}
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="RoboclubRegistration"component={RoboclubRegistration} />
        <Stack.Screen name="RoboclubLogin"component={RoboclubLogin} />
        <Stack.Screen name="WRCChalanges"component={WRCChalanges} />
        <Stack.Screen name="WrcChalengesRegistration"component={WrcChalengesRegistration} />
        <Stack.Screen name="Calender" component={Calender}/>
        <Stack.Screen name="TermAndCodition" component={TermAndCodition}/>

        <Stack.Screen name="EventCalender" component={EventCalender} />

        <Stack.Screen name="Test" component={Test}/>
        {/* -----------------------------CUSTOM COMPONENT------------------ */}
        <Stack.Screen name="CustomHeader" component={CustomHeader} />
        <Stack.Screen name="CustomInput" component={CustomInput} />
        <Stack.Screen name="CustomButton" component={CustomButton} />
        <Stack.Screen name="GradientText" component={GradientText} />
        <Stack.Screen name="CustomDropDown" component={CustomDropDown} />
        <Stack.Screen name="CodeInputComponent" component={CodeInputComponent} />
        <Stack.Screen name="DrawerComponent" component={DrawerComponent} />
        <Stack.Screen name="Slider_Image" component={Slider_Image} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="CustomcountryPicker"component={CustomcountryPicker} />
        <Stack.Screen name="MultipleSelector"component={MultipleSelector} />
        <Stack.Screen name="TesttextInput"component={TesttextInput} />

     {/* ------------------------------------------------NEWS---------------- */}

        <Stack.Screen name="ViewNews"component={ViewNews} />
       
        <Stack.Screen name="VerticaNews" component={VerticaNews} />

        <Stack.Screen name="Bloglist"component={Bloglist} />
        <Stack.Screen name="RegistrationComponent"component={RegistrationComponent} />
{/* ----------------------------------------ROBO CLUB---------------------------- */}
        {/* ------------ */}
        <Stack.Screen name="AddItem"component={AddItem} />
        <Stack.Screen name="RoboClubUpdate"component={RoboClubUpdate} />
        <Stack.Screen name="RoboClubDeshBoard"component={RoboClubDeshBoard} />
        <Stack.Screen name="RoboClubAddMember"component={RoboClubAddMember} />
        <Stack.Screen name="ClubMemberList"component={ClubMemberList} />
        <Stack.Screen name="ShowMessagenotification"component={ShowMessagenotification} />
        {/* ====================================WRC================================================= */}
        <Stack.Screen name="ApplyWrcCompitition"component={ApplyWrcCompitition} />
        <Stack.Screen name="TodoScreen"component={TodoScreen} />
        <Stack.Screen name="TestList"component={TestList} />
        <Stack.Screen name="ShowPaymentOptions"component={ShowPaymentOptions} />
        <Stack.Screen name="ShowSuccesspayment"component={ShowSuccesspayment} />
        <Stack.Screen name="TermAndCondictions"component={TermAndCondictions} />
        {/*------------------------------------ second phase start------------------------------------------ */}

        <Stack.Screen name="TestPurpose"component={TestPurpose} />
        <Stack.Screen name="LiveClasses"component={LiveClasses} />
        <Stack.Screen name="LiveClassroom"component={LiveClassroom} />
        <Stack.Screen name="ZoomMeeting"component={ZoomMeeting} />
        {/*-------------------------- ===============GALLERY==============----------------------------------- */}
        <Stack.Screen name="Gallery"component={Gallery} />
        <Stack.Screen name="GalleryImagesGrid"component={GalleryImagesGrid} />
        <Stack.Screen name="Community"component={Community} />
        {/* ---------------------------------------MEMBERSHIP PROGRAM--------------------------------------------- */}
        <Stack.Screen name="MemberShip"component={MemberShip} />
        <Stack.Screen name="Club"component={Club} />
        <Stack.Screen name="TxMembeshpProgram"component={TxMembeshpProgram} />
        <Stack.Screen name="RegisterForMembership"component={RegisterForMembership} />
        <Stack.Screen name="MembershipPaymentOption"component={MembershipPaymentOption} />
        {/* ------------------------------------------TICKETS----------------------------------------------------------- */}
        <Stack.Screen name="Tickets"component={Tickets} />
        <Stack.Screen name="TicketRegistration"component={TicketRegistration} />
        <Stack.Screen name="WhatsAppChat"component={WhatsAppChat} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigators;