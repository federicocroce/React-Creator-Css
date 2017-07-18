import React, { Component } from 'react'

import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form' // imported Field
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import { validations } from '../Config/Validations';


import { clearPost } from '../../Actions/actionsCreator';
import InputText from '../Utilities/InputText';
// import UploadImg from '../Utilities/UploadImg';
import FileUpload from '../Utilities/UploadImg';
import SwitchesGroup from '../Utilities/SwitchesGroup';
import Button from '../Utilities/Button';
import GMaps from '../Utilities/GMaps/GMaps';



import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';


import ReactTestUtils from 'react-dom/test-utils';

import { store } from '../Config/Store.js';

import {
  push,
  replace,
  go,
  goBack,
  goForward,
} from 'react-router-redux';

import classnames from 'classnames';

const submit = values => {
  console.log(values);
}

const back = props => {
  props.state.posts.currentPost = {};
  props.clearPost();
}


const PostDetailsReduxForm = props => {

  // render() {
  var postClass = '';
  var showPost = true;

  const isNewUpadtePost = () => {
    if (props.state.routing.location.pathname == "/new") return true;
  }


  const inputTextProps = {
    name: "operationsTypes",
    style: "inline",
    type: "radio",
    options: [
      {
        value: "rent",
        label: "Alquiler"
      },
      {
        value: "rentTime",
        label: "Alquiler Temporario"
      },
      {
        value: "sell",
        label: "Venta"
      }
    ]
  }

  const radioButtonsProps = {
    name: "operationsTypes",
    style: "inline",
    type: "radio",
    options: [
      {
        value: "rent",
        label: "Alquiler"
      },
      {
        value: "rentTime",
        label: "Alquiler Temporario"
      },
      {
        value: "sell",
        label: "Venta"
      }
    ]
  }

  const checkboxProps = {
    name: "operationsTypes",
    // style: "inline",
    type: "checkbox",
    options: [
      {
        value: "rent",
        label: "Alquiler"
      },
      {
        value: "rentTime",
        label: "Alquiler Temporario"
      },
      {
        value: "sell",
        label: "Venta"
      }
    ]
  }

  // const validations = ['number', 'minValue18', 'required'];

  const uploadFileToServer = (file) => {
    const delay = file.size / 100;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  };

  return (
    <form onSubmit={props.handleSubmit(submit)}>

      {/*<UploadImg />*/}

      {isNewUpadtePost() ? <FileUpload multiple={true}
        name='example-upload'
        maxSize={300000}
        onUpload={uploadFileToServer}
        label='Upload Files' /> : null}

      <SwitchesGroup switchesProps={radioButtonsProps} />

      <SwitchesGroup switchesProps={checkboxProps} />

      <div>
        <InputText name="name" placeholderFloating="Escriba su nombre" customPlaceholder="ej: Federico Croce" type="text" />

        <InputText name="age" placeholderFloating="Escriba su edad" customPlaceholder="ej: 28" type="text" validate={validations.age} />
      </div>



      <Button type="submit" className="primary-button" label="SUBMIT" />

      <Button className="primary-button" label="VOLVER" onClick={() => back(props)} />

      <GMaps searchBox={true} currentLocation={true} keyValuePlace={true} />

    </form>
  );
  // }
}


const mapStateToProps = (state) => {
  return {
    state: state
  };
}


const mapDispatchToProps = dispatch => {
  return {
    clearPost() {
      dispatch(clearPost());
    }
  };
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailsReduxForm);

export default reduxForm({
  form: 'myForm'
})(Form)