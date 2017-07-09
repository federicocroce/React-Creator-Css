import React from 'react';
import { Field } from 'redux-form';



const renderInput = (field) => {
    return (
        <li className={field.switchesProps.display}>
            <label>
                <input {...field.input} type={field.switchesProps.type} />
                {field.label}
            </label>
        </li>
    )
}

const SwitchesGroup = props => {




    /*const renderInput = (field) => {
        let fieldProps = { ...field };
        return (
            <li className={props.switchesProps.display}>
                <label>
                    <input {...field.input} type="radio" name="gender" value="male" />
                    {fieldProps.label}
                </label>
            </li>
        )
    }*/

    const returnNameFromType = (props, option) => {
        return props.type == "radio" ? props.name : option.value;
    }

    return (
        <ul className="switches-container">
            {props.switchesProps.options.map((option, index) => {
                return <Field key={index} type={props.switchesProps.type} value={option.value} props={option} switchesProps={props.switchesProps} component={renderInput} name={returnNameFromType(props.switchesProps, option)} />
            }
            )}
        </ul>
    )

}

export default SwitchesGroup;