import React from 'react'
import ReactDOM from 'react-dom'

/*class RadioBtn extends React.Component{

    constructor(props) {
        super(props);
    }

    handleClick(){
        this.props.handler(this.props.index);
    }

    render() {
        return (
            <div className="radio-btn-group" onClick={this.handleClick.bind(this)}>
                <div className={this.props.isChecked ? "radiobtn checked" : "radiobtn unchecked"} data-value={this.props.value}></div>
                <label>{this.props.text}</label>
            </div>
        );
    }
}*/

const RadioGrp = props => {

    {/*<div className="radio-button-container">
                    <input className="option-input" type="radio" id={option.value} name={props.name} />
                    <div className="ripple" />
                    <label htmlFor={option.value}><span className="ripple"></span>{option.label}</label>
                </div>*/}

    const renderRadioButtons = (props) => {
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
        <ul className="input-button-group-container">
            {renderRadioButtons(props.radioButtonsProps)}
        </ul>
    )

}

export default RadioGrp;