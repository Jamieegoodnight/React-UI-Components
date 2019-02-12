import React from 'react';
import './Button.css';


const ActionButton = props => <button className={`act-button ${props.buttonStyles}`}> {props.text} </button>;

export default ActionButton