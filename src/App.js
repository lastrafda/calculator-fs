import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <h1>A Simple Calculator</h1>
      <Calculator initialValue="0" />
    </div>
  );
}

export default App;
