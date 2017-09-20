import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';

const UserReduxForm = props => {

    const selected = props.state.user.selected

    const isNewUpadte = () => React.functions.isUndefinedOrNullOrEmpty(props.initialValues);

    const submit = values => isNewUpadte() ? React.actions.actionsUser.create(values) : React.actions.actionsUser.update(values, Object.keys(selected)[0]);

    const remove = () => {
        props.clear();
        React.config.storeHistory.history.goBack();
        React.actions.actionsPost.remove(Object.keys(selected)[0]);
    }

    const sex = {
        name: 'radioOptions',
        style: 'inline',
        type: 'radio',
        options: [
            {
                value: 'male',
                label: 'Masculino'
            },
            {
                value: 'female',
                label: 'Femenino'
            },
            {
                value: 'undefined',
                label: 'Pepe'
            }
        ]
    }

    const optinos = {
        name: 'checkboxOptions',
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
            <h1>Usuarios</h1>
            <React.components.InputText name='name' style='inline' placeholderFloating='Nombre' customPlaceholder='Ingrese su Nombre' type='text' validate={React.config.fieldValidations.validations.name} />
            <React.components.SwitchesGroup switchesProps={sex} />
            <React.components.SwitchesGroup switchesProps={optinos} />
            <React.components.Button type='submit' className='primary-button' label='SUBMIT' />
            <React.components.Button className='primary-button' label='Eliminar' onClick={() => remove(selected, props)} />
            <React.components.Button className='primary-button' label='VOLVER' onClick={() => props.clear()} back />
        </form>
    );
}


UserReduxForm = reduxForm({
    form: 'User'
})(UserReduxForm)

const mapStateToProps = (state) => {
    const initialValues = state.user.selected;

    return {
        state: state,
        initialValues: initialValues,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        clear() {
            dispatch(React.actions.actionsUser.clear());
        },
    };
}

UserReduxForm = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(UserReduxForm));

export default UserReduxForm;