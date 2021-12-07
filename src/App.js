import React from "react";
import Attribution from "./Components/Attribution";
import BuySection from "./Components/BuySection";
import NavBar from "./Components/NavBar";
import "./style/mainStyle.css";

function App() {
  return (
    <>
      <NavBar />
      <BuySection />
      <Attribution />
    </>
  );
}

export default App;
