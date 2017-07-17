import React from 'react';
import { Field } from 'redux-form';
import {formatValidateArray} from '../Config/Validations';

const ripple = e => {

    const posX = e.offsetX,
        posY = e.offsetY;


    // effect.style.top = (e.pageY - offset.top) + "px";
    // effect.style.left = (e.pageX - offset.left) + "px";

    console.log(e.target);

    // e.
}


// const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
// const minValue = min => value =>
//     value && value < min ? `Must be at least ${min}` : undefined
// const minValue18 = minValue(18)


const renderInput = (field) => {
    let fieldProps = { ...field };
    let hasError = fieldProps.meta.invalid && fieldProps.meta.touched;
    return (
        <div className={`input-text-container ${hasError ? 'input-error' : ''}`}>
            <input {...field.input} id={fieldProps.id} className="inputMaterial" placeholder=" " required={fieldProps.required} onClick={(e) => ripple(e)} />
            <label className="floating">{fieldProps.placeholderFloating}</label>
            <label className="placeholder">{fieldProps.customPlaceholder}</label>
            {hasError ? <label className="error-text">{fieldProps.meta.error}</label> : null}
            <hr />
        </div>
    )
}



const InputText = (props) => {

    return (
        <Field props={props} component={renderInput} name={props.name} validate={formatValidateArray(props.validate)} />
    );
}


export default InputText;