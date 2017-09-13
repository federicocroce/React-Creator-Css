import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { viewPost } from '../../Actions/actionsCreator';
import PostDetails from './PostDetails';
import $ from 'jquery-lite'
import { store } from '../Config/Store';
import {push} from 'react-router-redux';

import classnames from 'classnames';

const Post = (props) => {

  var postClass = '';
  var showPost = true;
  var showPostDetails = false;

  // showPost = !$.isEmptyObject(props.currentPost) && props.currentPost.id == props.object.id ? 'active-post' : null;

  if (!$.isEmptyObject(props.currentPost)) {
    if (Object.keys(props.currentPost)[0] == Object.keys(props.object)[0]) {
      showPost = true;
      showPostDetails = true;
      postClass = 'active-post';

    }
    else {
      showPost = false;
    }
  }

console.log("Post");
  
  // const currentPostDetails = props.object;
  const currentPostDetails = props.object[Object.keys(props.object)[0]]; // Mapeo de objecto desde firebase

  return (
    // 
    showPost ?
      <div  className={postClass}> 
        <div className="post-content" onClick={() => props.viewPost(props.object)}>
          {/*<NavLink to={'/view'}>*/}
          <div className="post-image">
            <img src={props.object.display_src} />
          </div>

          <p>{currentPostDetails.age}</p>
          <p>{currentPostDetails.name}</p>


        </div>
       {showPostDetails ? <PostDetails postDetails={currentPostDetails} /> : null}
       {/*{showPostDetails ? <TestForms postDetails={props.object} /> : null}*/}
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
      store.dispatch(push("/view"));
      dispatch(viewPost(currentPost));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);