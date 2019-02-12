import React from 'react';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />
      <ActionButton 
      buttonStyles="white"
      text="Clear"
      />
      <NumberButton 
      buttonStyles="red"
      text="÷"
      />
      <NumberButton 
      buttonStyles="white"
      text="7"
      />
      <NumberButton 
      buttonStyles="white"
      text="8"
      />
      <NumberButton 
      buttonStyles="white"
      text="9"
      />
      <NumberButton 
      buttonStyles="red"
      text="×"
      />
      <NumberButton 
      buttonStyles="white"
      text="4"
      />
      <NumberButton 
      buttonStyles="white"
      text="5"
      />
      <NumberButton 
      buttonStyles="white"
      text="5"
      />
      <NumberButton 
      buttonStyles="red"
      text="-"
      />
      <NumberButton 
      buttonStyles="white"
      text="1"
      />
      <NumberButton 
      buttonStyles="white"
      text="2"
      />
      <NumberButton 
      buttonStyles="white"
      text="3"
      />
      <NumberButton 
      buttonStyles="red"
      text="+"
      />
      <ActionButton 
      buttonStyles="white"
      text="0"
      />
      <NumberButton 
      buttonStyles="red"
      text="="
      />
    </div>
  );
};

export default App;
