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
            <div>
                <input type="radio" id={option.value} name={props.name} />
                <label for={option.value}><span></span>{option.label}</label>
            </div>)
        })
    };

    return (
        <div>
            {renderRadioButtons(props.radioButtonsProps)}
        </div>
    )

}

export default RadioGrp;