import React from 'react';
import './Button.css';


const NumberButton = props => <button className={`num-button ${props.buttonStyles}`}> {props.text} </button>;

export default NumberButton