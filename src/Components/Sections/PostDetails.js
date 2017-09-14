import React from 'react';
import Button from '../Utilities/Button';
import { store, history } from '../Config/Store';
import { clearPost, fetchTexo, createPost, updatePost, removePost } from '../../Actions/actionsCreator';
import { connect } from "react-redux";

// import {
//   push,
//   replace,
//   go,
//   goBack,
//   goForward,
// } from 'react-router-redux';

const PostDetails = props => {
  console.log("Post Details");

  const back = (props) => {
    // props.clearPost();
    props.history.goBack();
  }
  return (
    <div>
      <h1>title</h1>
      <Button className="primary-button" label="VOLVER" onClick={() => back(props)} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // posts: getFilterPosts(state.posts.allPosts, state.router.location.pathname)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    clearPost() {
      clearPost(dispatch)
    }
  };
}

/*
* Dispatch de las acciones
*/

/*
* Acá se conecta el componente con redux
*/
// const { connect } = ReactRedux;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);

