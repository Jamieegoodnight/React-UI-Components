import React from 'react';

import HeaderContainer from "./components/HeaderComponents/HeaderContainer.js";
import CardContainer from "./components/CardComponents/CardContainer.js";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <a href="https://www.reactjs.org">
        <HeaderContainer />
        <CardContainer />
      </a>  
    </div>
  );
};

export default App;
