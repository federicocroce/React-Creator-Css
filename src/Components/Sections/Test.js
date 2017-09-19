import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';

class TestReduxForm extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTest();
    }

    render() {

        const props = this.props;

        const submit = values => {
            React.actions.actionsTest.createTest(values);
        }

        const radioButtonsProps = {
            name: 'radio',
            style: 'inline',
            type: 'radio',
            options: [
                {
                    value: 'radio1',
                    label: 'Radio 1'
                },
                {
                    value: 'radio2',
                    label: 'Radio 2'
                },
                {
                    value: 'radio3',
                    label: 'Radio 3'
                }
            ]
        }

        const checkboxProps = {
            name: 'checkbox',
            style: 'inline',
            type: 'checkbox',
            options: [
                {
                    value: 'checkbox1',
                    label: 'Checkbox 1'
                },
                {
                    value: 'checkbox2',
                    label: 'Checkbox 2'
                },
                {
                    value: 'checkbox3',
                    label: 'Checkbox 3'
                }
            ]
        }



        return (
            <form onSubmit={props.handleSubmit(submit.bind(this))}>
                <h1>title</h1>

                <React.components.InputText name='age' style='inline' placeholderFloating='mainPlaceholder' customPlaceholder='secondPlaceholder' type='text' validate={React.config.fieldValidations.validations.age} />

                <React.components.SwitchesGroup switchesProps={radioButtonsProps} />

                <React.components.SwitchesGroup switchesProps={checkboxProps} />

                <React.components.Button type='submit' className='primary-button' label='SUBMIT' />
                <React.components.Button className='primary-button' label='VOLVER' back />
            </form>
        );
    }
}

TestReduxForm = reduxForm({
    form: 'Test'
})(TestReduxForm)

const mapStateToProps = (state) => {
    const initialValues = null;

    return {
        state: state,
        initialValues: initialValues,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTest() {
            React.actions.actionsTest.fetchTest(dispatch)
        }
    };
}

TestReduxForm = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TestReduxForm));

export default TestReduxForm;



import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';

const functionNameReduxForm = props => {

    const submit = values => {

        console.log(values);
    }

    return (
        <form onSubmit={props.handleSubmit(submit.bind(this))}>
            <h1>title</h1>
            <React.components.Button type='submit' className='primary-button' label='SUBMIT' />
            <React.components.Button className='primary-button' label='VOLVER' onClick={() => back(props)} back />
        </form>
    );
}

functionNameReduxForm = reduxForm({
    form: 'functionName'
})(functionNameReduxForm)

const mapStateToProps = (state) => {
    const initialValues = state

    return {
        state: state,
        initialValues: initialValues,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        clearPost() {
        },
        fetchTexo() {
        }
    };
}

functionNameReduxForm = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(functionNameReduxForm));

export default functionNameReduxForm;