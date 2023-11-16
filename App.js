import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Navigators from "./Src/Navigator";


const App = () => {
  return (
    <>
      <StatusBar  backgroundColor={"black"} />
      < Navigators/>
    </>
  );
};

export default App;
