import React from 'react';

import { connect } from "react-redux";


const PostDetail = (props) => {
  console.error(props);
  return (
    <div>
      <h1>Post</h1>
      {JSON.stringify(props.currentPost)}
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    currentPost: state.posts.currentPost
  };
}


export default connect(
  mapStateToProps,
  null
)(PostDetail);
