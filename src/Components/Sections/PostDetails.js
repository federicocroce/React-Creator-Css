import React from 'react';
import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form' // imported Field
import fieldValidation from '../../Config/Validations';

import { withRouter } from 'react-router-dom';


import { clearPost, fetchTexo, createPost, updatePost, removePost } from '../../Actions/actionsCreator';

const PostDetailsReduxForm = props => {

  const currentPost = props.state.posts.currentPost;

  console.log(currentPost);

  const isNewUpadtePost = () => {
    return props.state.router.location.pathname == "/new" ? true : false;
  }


  const submit = (values) => {
    let payload = { values }
    isNewUpadtePost() ? createPost(values) : updatePost(values, Object.keys(currentPost)[0]); // Mapeo de objecto desde firebase
  }

  const remove = () => {
    back();
    removePost(Object.keys(currentPost)[0]); // Mapeo de objecto

  }

  const back = () => {
    props.clearPost(); 
  }

  const setText = props => {
    props.fetchTexo();
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

      {props.state.posts.text ? <h1>{props.state.posts.text}</h1> : null}

      {isNewUpadtePost() ? <React.components.UploadImg multiple={true}
        name='example-upload'
        maxSize={300000}
        onUpload={uploadFileToServer}
        label='Upload Files' /> : null}

      <React.components.SwitchesGroup switchesProps={radioButtonsProps} />

      <React.components.SwitchesGroup switchesProps={checkboxProps} />

      <div>
        <React.components.InputText name="name" style="inline" placeholderFloating="Escriba su nombre" customPlaceholder="ej: Federico Croce" type="text" />

        <React.components.InputText name="age" style="inline" placeholderFloating="Escriba su edad" customPlaceholder="ej: 28" type="text" validate={React.config.fieldValidations.validations.age} />
      </div>




      <React.components.Button type="submit" className="primary-button" label="SUBMIT" />

      <React.components.Button className="primary-button" label="VOLVER" onClick={() => back(props)} back />
      <React.components.Button className="primary-button" label=" Set Text" onClick={() => setText(props)} />
      <React.components.Button className="primary-button" label="Eliminar" onClick={() => remove(props)} />

      <React.components.GMaps searchBox={true} currentLocation={true} keyValuePlace={true} />

    </form>
  );
}

PostDetailsReduxForm = reduxForm({
  form: 'postDetails'
})(PostDetailsReduxForm)



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