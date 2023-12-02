import React from "react";
import { SafeAreaView, StatusBar ,View} from "react-native";
import Navigators from "./Src/Navigator";
import Colors from "./Src/Assets/Theme/Theme";
import { UserProvider } from "./UserContext";



const App = () => {
  return (
    <>
      <StatusBar  backgroundColor={Colors.black} />
      
      <UserProvider>
      < Navigators/>
      </UserProvider>
     
    </>
  );
};

export default App;
