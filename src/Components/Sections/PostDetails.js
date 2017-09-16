import React, { Component } from 'react';
import { store, history } from '../Config/Store';
import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form' // imported Field
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import { validations } from '../Config/Validations';

import { withRouter } from 'react-router-dom';


import { clearPost, fetchTexo, createPost, updatePost, removePost } from '../../Actions/actionsCreator';
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

import {
  push,
  replace,
  go,
  goBack,
  goForward,
} from 'react-router-redux';

import classnames from 'classnames';


// class PostDetailsReduxForm extends React.Component {
  const PostDetailsReduxForm = props => {

  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   this.props.value;
  // }

  // render() {
    let postClass = '';
    let showPost = true;

    const currentPost = props.state.posts.currentPost;

    console.log(props.postDetails);

    const isNewUpadtePost = () => {
      return props.state.router.location.pathname == "/new" ? true : false;
    }


    const submit = (values, dispatch) => {
      let payload = { values }
      // isNewUpadtePost() ? createPost(values, dispatch) : updatePost(values, currentPost);
      isNewUpadtePost() ? createPost(values, dispatch) : updatePost(values, Object.keys(currentPost)[0]); // Mapeo de objecto desde firebase
    }

    const remove = () => {
      back(props);
      // removePost(currentPost);
      removePost(Object.keys(currentPost)[0]); // Mapeo de objecto
      
    }

    const back = props => {
      // props.state.posts.currentPost = {};
      // props.clearPost();
      // store.dispatch(goBack());
      // props.history.goBack();
      history.goBack();
      // store.dispatch()
    }

    const setText = props => {
      props.fetchTexo();
    }


    //  props.fetchTexo();


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
          value: "sale",
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

    const inputTextStyle = {

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
      <form onSubmit={props.handleSubmit(submit.bind(this))}>

        {/*<UploadImg />*/}

        {props.state.posts.text ? <h1>{props.state.posts.text}</h1> : null}

        {isNewUpadtePost() ? <FileUpload multiple={true}
          name='example-upload'
          maxSize={300000}
          onUpload={uploadFileToServer}
          label='Upload Files' /> : null}

        <SwitchesGroup switchesProps={radioButtonsProps} />

        <SwitchesGroup switchesProps={checkboxProps} />

        <div>
          <InputText name="name" style="inline" placeholderFloating="Escriba su nombre" customPlaceholder="ej: Federico Croce" type="text" />

          <InputText name="age" style="inline" placeholderFloating="Escriba su edad" customPlaceholder="ej: 28" type="text" validate={validations.age} />
        </div>




        <Button type="submit" className="primary-button" label="SUBMIT" />

        <Button className="primary-button" label="VOLVER" onClick={() => back(props)} />
        <Button className="primary-button" label=" Set Text" onClick={() => setText(props)} />
        <Button className="primary-button" label="Eliminar" onClick={() => remove(props)} />

        <GMaps searchBox={true} currentLocation={true} keyValuePlace={true} />

      </form>
    );
  // }
}

PostDetailsReduxForm = reduxForm({
  form: 'postDetails'
})(PostDetailsReduxForm)




// const mapStateToProps = (state) => { 
//   state: state
// }

// const mapStateToProps = (state) => ({
//     state: state
// });

const mapStateToProps = (state) => {
  const currentPost = state.posts.currentPost[Object.keys(state.posts.currentPost)[0]];

  return {
    state: state,
    initialValues: currentPost,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    clearPost() {
      dispatch(clearPost());
    },
    fetchTexo() {
      fetchTexo(dispatch)
    }
  };
}

PostDetailsReduxForm = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailsReduxForm));



export default PostDetailsReduxForm