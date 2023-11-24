import React from "react";
import { SafeAreaView, StatusBar ,View} from "react-native";
import Navigators from "./Src/Navigator";
import Colors from "./Src/Assets/Theme/Theme";



const App = () => {
  return (
    <>
      <StatusBar  backgroundColor={Colors.black} />
      

      < Navigators/>
     
    </>
  );
};

export default App;
