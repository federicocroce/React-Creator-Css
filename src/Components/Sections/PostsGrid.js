import React from 'react';
import { connect } from "react-redux";
import classnames from 'classnames';
import Post from './Post';

const postsGrid = (props) => {

  var title = "Ventas";

  return (
    <div className="posts-container">
    {/*// <div className="posts-container {props.activePost}">*/}
    {/*// <div className={classnames('posts-container', props.activePost)}>*/}
    {/*<div className="posts-container active-post">*/}

      {/*<h1>{props.posts.title}</h1>*/}

      {props.posts.postList.map((object, index) =>
        <Post key={index} index={index} object={object} />
      )}

      {/*<button onClick={() => props.filterPosts(props.state.posts.allPosts, "SELL_POSTS")}> Ventas</button>
      <button onClick={() => props.filterPosts(props.state.posts.allPosts, "RENT_POSTS")}> Alquileres</button>*/}

    </div>
  );

}


const getFilterPosts = (posts, path) => {
  const filter = (value) => posts.filter(post => post.type == value);
  switch (path) {
    case '/sale':
      return {
        title: "Ventas",
        postList: filter("sale")
      }
    case '/rent':
      return {
        title: "Alquileres",
        postList: filter("rent")
      }
    default:
      return {
        title: "Todos",
        postList: posts
      }
  }
}


/*
* Si se especifica, el componente a suscribirse a las actualizaciones del store de Redux.
*/
const mapStateToProps = (state) => {
  return {
    posts: getFilterPosts(state.posts.allPosts, state.routing.location.pathname)
  };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     filterPosts(currentPost, action) {
//       console.error(action);
//       dispatch(filterPosts(currentPost, action));
//     }
//   };
// }

/*
* Dispatch de las acciones
*/

/*
* Acá se conecta el componente con redux
*/
// const { connect } = ReactRedux;
export default connect(
  mapStateToProps,
  null
)(postsGrid);