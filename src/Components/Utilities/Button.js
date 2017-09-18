import React from 'react';
import { history } from '../Config/Store';

const Button = (props) => {

    const back = () => {
        if (props.onClick) {
            props.onClick();
        }
        history.goBack();
    }

    const click = () => {
        if (props.back) {
            return  back();
        }
        else if (props.onClick) {
            return props.onClick();
        }
    }

    return (
        <div className="button-container">
            <button type={props.type ? props.type : "button"} className={props.class} onClick={() => click()} label={props.label}>{props.label} </button>
        </div>
    );

};

export default Button