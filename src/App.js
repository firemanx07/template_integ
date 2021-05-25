
import './App.scss';
import MenuBar from "./Components/MenuBar";
import React from "react";
import GetStarted from "./Components/GetStarted";
import Features from "./Components/Features/Features";
import Plans from "./Components/Plans";

function App() {
  return (

    <div className="App">
      <MenuBar  />
      <GetStarted />
      <Features/>
      <Plans/>




    </div>


  );
}

export default App;
