import React from 'react'
import { Field, reduxForm } from 'redux-form';
import InputTextForm from '../Utilities/InputTextForm';

const submit = values => {
    console.log(values);
}



const ContactForm = props => {

    return (
        <form onSubmit={props.handleSubmit(submit)}>
            <div>
                {/*<InputTextForm name="test" />*/}
                <InputTextForm name="test" placeholderFloating="Escriba su dirección" customPlaceholder="Dirección" type="text" />
                {/*<label htmlFor="firstName">First Name</label>
                <Field name="firstName" component={renderField} type="text" />*/}
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactForm)

export default ContactForm;