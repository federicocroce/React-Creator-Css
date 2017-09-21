import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, reset, getFormInitialValues } from 'redux-form';
import { withRouter } from 'react-router-dom';

const UserReduxForm = props => {

    const selected = props.state.user.selected

    const isNewUpadte = () => React.functions.isUndefinedOrNullOrEmpty(props.initialValues);

    // const submit = values => isNewUpadte() ? React.actions.actionsUser.create(values) : React.actions.actionsUser.update(values, Object.keys(selected)[0]);

    

    const submit = (values) => {
        if (isNewUpadte()) {
            React.actions.actionsUser.create(values);
        }
        else {
            React.actions.actionsUser.update(values, Object.keys(selected)[0]);
        }
        const {reset } = props;
        // return createRecord(values).then(() => {
          reset();
          // do other success stuff
        // });
    }

    

    const remove = () => {
        props.setSelected();
        // React.config.storeHistory.history.goBack();
        React.actions.actionsUser.remove(Object.keys(selected)[0]);
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


    // const reset = () => {
    //     props.reset();
    // }



    return (
        <form onSubmit={props.handleSubmit(submit.bind(this), props)}>
            <h1>Usuarios</h1>
            <React.components.InputText name='name' style='inline' placeholderFloating='Nombre' customPlaceholder='Ingrese su Nombre' type='text' validate={React.config.fieldValidations.validations.name} />
            <React.components.SwitchesGroup switchesProps={sex} />
            <React.components.SwitchesGroup switchesProps={optinos} />
            <React.components.UsersList />
            <React.components.Button type='submit' className='primary-button' label='SUBMIT' />
            <React.components.Button className='primary-button' label='Eliminar' onClick={() => remove(selected, props)} />
            <React.components.Button className='primary-button' label='Reset' onClick={() => reset()} />
            <React.components.Button className='primary-button' label='VOLVER' onClick={() => props.setSelected()} back />
        </form>
    );
}


UserReduxForm = reduxForm({
    form: 'User'
})(UserReduxForm)

const mapStateToProps = (state) => {
    const initialValues = state.user.selected[Object.keys(state.user.selected)[0]];

    return {
        state: state,
        initialValues: initialValues,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setSelected() {
            dispatch(React.actions.actionsUser.setSelected({}));
        },
    };
}

UserReduxForm = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(UserReduxForm));

export default UserReduxForm;