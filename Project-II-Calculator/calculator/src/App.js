import React from 'react';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />
      <NumberButton />
      <ActionButton />
    </div>
  );
};

export default App;
