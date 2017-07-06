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

    // constructor() {
    //     super();
    //     this.state = {
    //         selectedIndex: null,
    //         selectedValue: null,
    //         options: ["option 0", "option 1", "option 2", "option 3"]
    //     };
    // }

    // toggleRadioBtn(index) {
    //     this.setState({
    //         selectedIndex: index,
    //         selectedValue: this.state.options[index],
    //         options: this.state.options
    //     });
    // }
    const renderRadioButtons = (props) => {
        return props.options.map((option) => {
            return (
                <div className="radio-button-container">
                    <input className="option-input" type="radio" id={option.value} name={props.name} />
                    <div className="ripple" />
                    <label htmlFor={option.value}><span className="ripple"></span>{option.label}</label>
                </div>)
        })
    };

    return (
        <div className="radio-button-group-container">
            {renderRadioButtons(props.radioButtonsProps)}
            <div>
                <input type="radio" id="radio01" name="radio" />
                <label for="radio01"><span></span>Radio Button 1</label>
            </div>

            <div>
                <input type="radio" id="radio02" name="radio" />
                <label for="radio02"><span></span>Radio Button 2</label>
            </div>
        </div>
    )

}

export default RadioGrp;