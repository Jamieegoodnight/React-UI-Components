import React from 'react';
import './Button.css';


const ActButton = props => <button className={`basicButtonStyles ${props.buttonStyles}`}> {props.text} </button>;

ActButton.defaultProps = {
  buttonStyles: "white",
}

const ActionButton = () => {
    return (
        <div className="act-button">
            <ActButton text="Clear" />
            <ActButton text="0" />
        </div>
    );
}


export default ActionButton