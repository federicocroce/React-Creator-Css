import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom';

import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form' // imported Field
// import { reduxForm } from 'redux-form/immutable'
// import { LocalForm, Control } from 'react-redux-form';

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

const renderInput = field =>    // Define stateless component to render input and errors
  <div>
    <input {...field.input} type={field.type} />
    {field.meta.touched &&
      field.meta.error &&
      <span className="error">{field.meta.error}</span>}
  </div>
  ;


class MyForm extends Component {

  render() {
    // const PostDetails = (props) => {

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

        <InputText name="name" placeholderFloating="Escriba su nombre" customPlaceholder="Nombre" type="text" />


        <Button className="primary-button" label="VOLVER" onClick={() => back(this.props)} />


        <GMaps searchBox={true} currentLocation={true} keyValuePlace={true} />

      </form>
    );
  }
}

// export {PostDetails};
// const selector = formValueSelector('selectingFormValues') // <-- same as form name



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

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PostDetailsReduxForm);
export default reduxForm({
  form: 'myForm'
                                              // no fields array given
})(MyForm)