import React from 'react';

const ripple = e => {

    const posX = e.offsetX,
        posY = e.offsetY;


    // effect.style.top = (e.pageY - offset.top) + "px";
    // effect.style.left = (e.pageX - offset.left) + "px";

    console.log(e.target);

    // e.
}


const InputText = (props) => {
    return (
        <div className="input-text-container">
            <input id={props.id} onClick={(e) => ripple(e)} className="inputMaterial" type="text" placeholder=" " required />
            <label className="floating">{props.placeholderFloating}</label>
            <label className="placeholder">{props.placeholder}</label>
            {/*<Ripple />*/}
            <hr />
        </div>
    );
}


export default InputText;