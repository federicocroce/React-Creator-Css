import React from 'react';
import { Field } from 'redux-form';

const ripple = e => {

    const posX = e.offsetX,
        posY = e.offsetY;


    // effect.style.top = (e.pageY - offset.top) + "px";
    // effect.style.left = (e.pageX - offset.left) + "px";

    console.log(e.target);

    // e.
}

const renderInput = (field) => {
    let fieldProps = {...field};
    return (
        <div className="input-text-container">
            <input {...field.input} id={fieldProps.id} onClick={(e) => ripple(e)} className="inputMaterial" placeholder=" " required={fieldProps.required} />
            <label className="floating">{fieldProps.placeholderFloating}</label>
            <label className="placeholder">{fieldProps.customPlaceholder}</label>
            <hr />
        </div>
    )
}

{/*<div className="input-row">
        <input {...field.input} type="text" />
        {field.meta.touched && field.meta.error &&
            <span className="error">{field.meta.error}</span>}
    </div>*/}


const InputText = (props) => {
    return (
            <Field props={props} component={renderInput} name={props.name} />
    );
}


export default InputText;