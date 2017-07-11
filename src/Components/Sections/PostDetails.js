import React, { Component } from 'react'

import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form' // imported Field
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';


import { clearPost } from '../../Actions/actionsCreator';
import InputText from '../Utilities/InputText';
import UploadImg from '../Utilities/UploadImg';
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


  const styles = {
    block: {
      maxWidth: 250,
    },
    radioButton: {
      marginBottom: 16,
    },
  };

  const radioButtonsProps = {
    name: "operationsTypes",
    style: "inline ",
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
    ],

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

  return (
    <form onSubmit={props.handleSubmit(submit)}>

      <UploadImg />

      <SwitchesGroup switchesProps={radioButtonsProps} />

      <SwitchesGroup switchesProps={checkboxProps} />

      <InputText name="name" placeholderFloating="Escriba su nombre" customPlaceholder="ej: Federico Croce" type="text" required />

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