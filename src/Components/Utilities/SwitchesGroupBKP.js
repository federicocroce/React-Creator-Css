import React from 'react';
import { Field } from 'redux-form';



const SwitchesGroup = props => {


    const renderInput = (field) => {
        let fieldProps = { ...field };
        return (
            <li className={props.switchesProps.display}>
                <label>
                    <input {...field.input} type={props.switchesProps.type} name={fieldProps.input.name} value={fieldProps.value} />
                    {fieldProps.label}
                </label>
            </li>
        )
    }


    const returnNameFromType = (props, option) => {
        return props.type == "radio" ? props.name : option.value;
    }

    return (
        <ul className="switches-container">
            {/*<ul>*/}

            {/*<Field name="sex" component="input" type="radio" value="male" />*/}
            {/*<Field name="gender" component={renderRadioButtonField} type="radio" value="M" label="Male" />*/}

            {/*<Field component={renderInputF} type="radio" value="radio3" />*/}


            {/*<Field props={props.switchesProps} component={renderInputGroup} name={props.switchesProps.name} />*/}
            <Field config={props.switchesProps} component={renderInputGroup} name={props.switchesProps.name} />


            {/*<Field component={RadioGroup} name="gender" required={true} options={[
                { title: 'Male', value: 'male' },
                { title: 'Female', value: 'female' }
            ]} />*/}

            {/*{props.switchesProps.options.map((option, index) => {
                return <Field type={props.switchesProps.type} value={option.value} key={index} props={option} component={renderInput} name={returnNameFromType(props.switchesProps, option)} />
            }
            )}*/}
        </ul>
    )

}


const renderInputGroup = (props) => {

    const { input, meta, config } = props
    return (
        <div>
            {config.options.map((option, index) => (

                <li key={index} className={config.display}>
                    <label>
                        <input {...input} type={config.type} value={option.value} checked={option.value === input.value} />
                        {option.label}
                    </label>
                </li>

            ))}
        </div>
    )

}



export default SwitchesGroup;