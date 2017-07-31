import React, { Component } from 'react'

import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form' // imported Field
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import { validations } from '../Config/Validations';


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

import { store } from '../Config/Store.js';
// import Test1 from './Test1';





// import { mainLinksRoutes as linksRoutes } from '../Config/AppRoutes.js'
// import NavigationBar from '../Utilities/NavigationBar';
// import Post from './Post';
// import PostGrid from './PostsGrid';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  show = () => {
    //   alert("Entro")
    this.setState({
      show: true
    });
    // console.log(this.state.show)
    // this.state.show = true
  }

  


  render() {

    const submit = (values, dispatch) => {
      // let payload = { values }
      // isNewUpadtePost() ? createPost(values, dispatch) : updatePost(values, Object.keys(currentPost)[0]);
    }

    const props = this.props;

    console.log("Test");
    return (
      // <form onSubmit={props.handleSubmit(submit.bind(this))}>
        <div>
          <h1>
            Test
        </h1>

          {/* {this.state.show ? < Test1 /> : null} */}
          {/* A{a} */}
          {/* {this.state.show ? <h1>Test1</h1>: null} */}
          <input type="button" onClick={this.show}>
            {/* button  */}
          </input>
          <div>
          <InputText name="name" style="inline" placeholderFloating="Escriba su nombre" customPlaceholder="ej: Federico Croce" type="text" />

          <InputText name="age" style="inline" placeholderFloating="Escriba su edad" customPlaceholder="ej: 28" type="text" validate={validations.age} />
        </div>
        </div>
      // </form>
    );
  }
}



// Home = reduxForm({
//   form: 'postDetails'
// })(Home)


// const mapStateToProps = (state) => {
//   const currentPost = state.posts.currentPost[Object.keys(state.posts.currentPost)[0]];

//   return {
//     state: state,
//   };
// }


// const mapDispatchToProps = dispatch => {
//   return {
//     // clearPost() {
//     //   dispatch(clearPost());
//     // },
//     // fetchTexo() {
//     //   fetchTexo(dispatch)
//     // }
//   };
// }

// Home = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home);



export default Home