import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';

const TestReduxForm = props => {

    const submit = values => {
        console.log(values);
    }

    const radioButtonsProps = {
        name: 'options',
        style: 'inline',
        type: 'radio',
        options: [
            {
                value: 'option1',
                label: 'Option 1'
            },
            {
                value: 'option2',
                label: 'Option 2'
            },
            {
                value: 'option3',
                label: 'Option 3'
            }
        ]
    }

    const checkboxProps = {
        name: 'options',
        style: 'inline',
        type: 'checkbox',
        options: [
            {
                value: 'option1',
                label: 'Option 1'
            },
            {
                value: 'option2',
                label: 'Option 2'
            },
            {
                value: 'option3',
                label: 'Option 3'
            }
        ]
    }

    

    return (
        <form onSubmit={props.handleSubmit(submit.bind(this))}>
            <h1>title</h1>

            <React.components.InputText name='age' style='inline' placeholderFloating='mainPlaceholder' customPlaceholder='secondPlaceholder' type='text' validate={React.config.fieldValidations.validations.age} />


            < React.components.SwitchesGroup switchesProps={radioButtonsProps} />



            <React.components.SwitchesGroup switchesProps={checkboxProps} />

            <React.components.Button type='submit' className='primary-button' label='SUBMIT' />
            <React.components.Button className='primary-button' label='VOLVER' back />
        </form>
    );
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
        clearPost() {
        },
        fetchTexo() {
        }
    };
}

TestReduxForm = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TestReduxForm));

export default TestReduxForm;

