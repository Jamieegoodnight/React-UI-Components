import React from 'react';
import './Button.css';


const BasicButton = props => <button className={`basicButtonStyles ${props.buttonStyles}`}> {props.text} </button>;

BasicButton.defaultProps = {
  buttonStyles: "white",
}

const NumberButton = () => {
    return (
      <div>
        <BasicButton text="CLEAR" />
        <BasicButton text="7" />
        <BasicButton text="8" />
        <BasicButton text="9" />
        <BasicButton text="4" />
        <BasicButton text="5" />
        <BasicButton text="6" />
        <BasicButton text="1" />
        <BasicButton text="2" />
        <BasicButton text="3" />
        <BasicButton text="0" />
      </div>
    );
  }

export default NumberButton