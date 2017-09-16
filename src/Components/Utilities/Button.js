import React from 'react';

const Button = (props) => {
    return (
        <div className="button-container">
            <button type={props.type ? props.type : "button"} className={props.class} onClick={props.onClick} label={props.label}>{props.label} </button>
        </div>
    );
}


export default Button;