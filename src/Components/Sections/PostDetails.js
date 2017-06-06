import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { clearPost } from '../../Actions/actionsCreator';
import { PostDetail } from './PostDetail';
import $ from 'jquery';

import { store } from '../Config/Store.js'

import {
  push,
  replace,
  go,
  goBack,
  goForward,
} from 'react-router-redux';

import classnames from 'classnames';

const PostDetails = (props) => {

  var postClass = '';
  var showPost = true;

  const back = props => {
    props.state.posts.currentPost = {};
    props.clearPost();
  }

  return (
    <div>
      ALGOO
      <button onClick={() => back(props)}>Back</button>
    </div>

  );
}

// export { PostDetails };

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
)(PostDetails);