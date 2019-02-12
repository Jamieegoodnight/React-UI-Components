import React from 'react';
import './Button.css';


const NumButton = props => <button className={`basicButtonStyles ${props.buttonStyles}`}> {props.text} </button>;

NumButton.defaultProps = {
  buttonStyles: "white",
}

const NumberButton = () => {
    return (
      <div className="num-button">
        <NumButton 
        text="%"
        buttonStyles="red"
        />
        <NumButton text="7" />
        <NumButton text="8" />
        <NumButton text="9" />
        <NumButton 
        text="×"
        buttonStyles="red" 
        />
        <NumButton text="4" />
        <NumButton text="5" />
        <NumButton text="6" />
        <NumButton 
        text="-"
        buttonStyles="red"
         />
        <NumButton text="1" />
        <NumButton text="2" />
        <NumButton text="3" />
        <NumButton 
        text="+" 
        buttonStyles="red"
        />
        <NumButton 
        text="=" 
        buttonStyles="red"
        />
      </div>
    );
  }

export default NumberButton