import React from 'react'
import ReactDOM from 'react-dom'



const SwitchesGroup = props => {

    {/*<div className="radio-button-container">
                    <input className="option-input" type="radio" id={option.value} name={props.name} />
                    <div className="ripple" />
                    <label htmlFor={option.value}><span className="ripple"></span>{option.label}</label>
                </div>*/}

    const renderSwitches = (props) => {
        return props.options.map((option, index) => {
            return (
                <li key={index} className={props.display}>
                    <label>
                        <input type={props.type} id={option.value} name={props.name} />
                        {option.label}
                    </label>
                </li>
            )
        })
    };

    return (
        <ul className="switches-container">
            {renderSwitches(props.switchesProps)}
        </ul>
    )

}

export default SwitchesGroup;