import React from 'react';
import { actions } from 'react-redux-form';
import InputText from './InputText';


const ripple = e => {

    const posX = e.offsetX,
        posY = e.offsetY;


    // effect.style.top = (e.pageY - offset.top) + "px";
    // effect.style.left = (e.pageX - offset.left) + "px";

    console.log(e.target);

    // e.
}


const InputTextForm = (props) => {
    const { model, dispatch } = props;
    return (
        <InputText
            onCustomChange={e => dispatch(actions.change(model, e))}
        />
    );
}


export default InputTextForm;