import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form'

const ripple = e => {

    const posX = e.offsetX,
        posY = e.offsetY;


    // effect.style.top = (e.pageY - offset.top) + "px";
    // effect.style.left = (e.pageX - offset.left) + "px";

    console.log(e.target);

    // e.
}

const InputTextRender = (props) => {
    return (
        <div className="input-text-container">
            <input id={props.id} onClick={(e) => ripple(e)} className="inputMaterial" type="text" placeholder=" " required />
            <label className="floating">{props.placeholderFloating}</label>
            <label className="placeholder">{props.placeholder}</label>
            <hr />
        </div>
    );
}


const InputText = (props) => {
    return (
        <div className="input-text-container">
            <input id={props.id} onClick={(e) => ripple(e)} className="inputMaterial" type="text" placeholder=" " required />
            <label className="floating">{props.placeholderFloating}</label>
            <label className="placeholder">{props.placeholder}</label>
            <hr />
            {/*<Field component={(props) => {
                return (
                    <div class="input-row">
                        <input type="text" {...props} />
                        {props.touched && props.error && <span className="error">{props.error}</span>}
                    </div>
                )
            }} />*/}
        </div>
    );
}


export default InputText;