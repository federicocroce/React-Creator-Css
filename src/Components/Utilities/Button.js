import React from 'react';

const ripple = e => {

    const posX = e.offsetX,
        posY = e.offsetY;


    // effect.style.top = (e.pageY - offset.top) + "px";
    // effect.style.left = (e.pageX - offset.left) + "px";

    console.log(e.target);

    // e.
}


const Button = (props) => {
    return (
        <div className="button-container">
            <button className={props.class} onClick={props.onClick} label={props.label}>{props.label} </button>
        </div>
    );
}


export default Button;