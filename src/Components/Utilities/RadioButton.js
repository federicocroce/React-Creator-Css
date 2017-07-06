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
        return props.options.map((option) => {
            return (
                <label className="radio-button-container display-inline-block">
                    <input type="radio" id={option.value} name={props.name} />
                    {option.label}
                </label>
            )
        })
    };

    return (
        <div className="radio-button-group-container">
            {renderRadioButtons(props.radioButtonsProps)}
            <label>
                <input type="radio" className="option-input radio" name="example" />
                Radio option
            </label>

            <label>
                <input type="radio" className="option-input" name="example" />
                Radio option
            </label>
        </div>
    )

}

export default RadioGrp;