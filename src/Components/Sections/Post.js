import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { viewPost } from '../../Actions/actionsCreator';
import $ from 'jquery'

import classnames from 'classnames';

const Post = (props) => {

  // const postClass = 'active-post';
  var postClass = true;

  // postClass = !$.isEmptyObject(props.currentPost) && props.currentPost.id == props.object.id ? 'active-post' : null;

  if (!$.isEmptyObject(props.currentPost)) {
    if (props.currentPost.id == props.object.id) {
      postClass = true;
    }
    else {
      postClass = false;
    }
  }

  return (
    // 
    postClass ?
      <div onClick={() => props.viewPost(props.object)} className={postClass}>
        {/*<NavLink to={'/view'} >*/}
        <div className="post-image">
          <img src={props.object.display_src} />
        </div>

        <p>{props.object.likes}</p>
        <p>{props.object.type}</p>

        {/*</NavLink>*/}
      </div>
      : null
  );

}

const mapStateToProps = (state) => {
  return {
    currentPost: state.posts.currentPost,
    activePost: ''
  };
}


const mapDispatchToProps = dispatch => {
  return {
    viewPost(currentPost, activePost) {
      dispatch(viewPost(currentPost));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);