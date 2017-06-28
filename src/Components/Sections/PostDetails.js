import React from 'react';
// import { NavLink } from 'react-router-dom';

import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from 'redux-form'
// import { reduxForm } from 'redux-form/immutable'
import { LocalForm, Control } from 'react-redux-form';

import { clearPost } from '../../Actions/actionsCreator';
import Ripple from '../Utilities/Ripple';
import InputText from '../Utilities/InputText';
import InputTextForm from '../Utilities/InputTextForm';
import Button from '../Utilities/Button';
import SearchBoxExample from '../Utilities/Map';
import GMaps from '../Utilities/GMaps/GMaps';
import GMapsSechBoxAnda from '../Utilities/GMaps/GMapsSechBoxAnda';
// import { PostDetail } from './PostDetail';
import $ from 'jquery-lite';


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

const PostDetails = (props) => {

  // const { handleSubmit } = props;

  var postClass = '';
  var showPost = true;




  const back = props => {
    props.state.posts.currentPost = {};
    props.clearPost();
  }




  // const ripple = e => {

  //   const posX = e.offsetX,
  //     posY = e.offsetY;


  //   // effect.style.top = (e.pageY - offset.top) + "px";
  //   // effect.style.left = (e.pageX - offset.left) + "px";

  //   console.log(e.target);

  //   // e.
  // }


  const handleSubmit = val => {
    console.log(val);
  }




  const styles = {
    block: {
      maxWidth: 250,
    },
    radioButton: {
      marginBottom: 16,
    },
  };

  const renderField = (field) => (
    <div className="input-row">
      <input {...field.input} type="text" />
      {/*{field.meta.touched && field.meta.error &&
        <span className="error">{field.meta.error}</span>}*/}
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>

      <RadioButtonGroup className="radio-button horizontal-radio-button" name="shipSpeed" defaultSelected="not_light">
        {/*<RadioButtonGroup style={styles.RadioButtonGroup} name="shipSpeed" defaultSelected="not_light">*/}
        <RadioButton
          value="alquiler"
          label="Alquiler"
          style={styles.radioButton}
        />

        <RadioButton
          value="temporario"
          label="Alquiler Temporario"
          style={styles.radioButton}
        />

        <RadioButton
          value="venta"
          label="Venta"
          style={styles.radioButton}
        />
      </RadioButtonGroup>

      {/*<div>
        <Field
          name="firstName"
          component="input"
          type="text"
          placeholder="First Name"
        />
      </div>*/}

      {/*<InputText name="firstName"/>*/}

      {/*<Field name="firstName" type="text" component={InputText} />*/}

      <Field name="myField" component={renderField} />

      <Button class="primary-button" label="VOLVER" onClick={() => back(props)} />

      {/*<Field name="firstName" component={<Button class="primary-button" label="VOLVER" onClick={() => back(props)} />} type="text" placeholder="First Name"/>*/}

      {/*<Field name="firstName" component="input" type="text" placeholder="First Name"/>*/}

      {/*<Field name='Name' component={InputText} type="text"/>*/}
      {/*
      <Field
        name="firstName"
        component="input"
        type="text"
        placeholder="First Name"
      />*/}


      {/*<RaisedButton className="primary-button" label="Volver" primary={true} onClick={() => back(props)} />*/}

      <GMaps searchBox={true} currentLocation={true} keyValuePlace={true} />

    </form>
  );
}

// export {PostDetails};
// const selector = formValueSelector('selectingFormValues') // <-- same as form name

const PostDetailsReduxForm = reduxForm({
  form: "postDetails" // required by reduxForm()
  // warn: (values, props) => { ... }, // optional
  // error: (values, props) => { ... } // optional
})(PostDetails)

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailsReduxForm);