import React from 'react';
import { connect } from "react-redux";
import classnames from 'classnames';
import Post from './Post';
import { fetchPosts } from '../../Actions/actionsCreator';
import _ from 'lodash';


class postsGrid extends React.Component {

  // const postsGrid = (props) => {

  constructor(props) {
    super(props);
  }

  // const title = "Ventas";

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log("Grid");
    let props = this.props;
    const posts = props.posts.postList;
    return (
      <div className="posts-container">



        {Object.keys(posts).map((object, index) => {
          {/*const currentPost =  posts[object];*/ }
          let post = {
            [object]: props.posts.postList[object]
          }
          return <Post key={index} index={index} object={post} />
          {/*return Object.keys(posts[object]).map((value, index) => {
            return <Post key={index} index={index} object={posts[object]} />
          }
          )*/}
        }
        )}


        {/*{Object.keys(props.firebasePosts).map((object, index) => {
          return Object.keys(props.firebasePosts[object]).map((value, index) => {
            return <p key={index}> {props.firebasePosts[object][value]}</p>
          }
          )
        }*/}


        {/*{Object.keys(props.posts.postList).map((object, index) => {
          let post = {
            [object]: props.posts.postList[object]
          }
          return <Post key={index} index={index} object={post} />
        }
        )}*/}

        {/*<button onClick={() => props.filterPosts(props.state.posts.allPosts, "SELL_POSTS")}> Ventas</button>
      <button onClick={() => props.filterPosts(props.state.posts.allPosts, "RENT_POSTS")}> Alquileres</button>*/}

      </div>
    );
  }

}


const getFilterPosts = (posts, path) => {
  const filter = (value, posts) => posts[Object.keys(posts)].filter(post => post.operationsTypes == value);
  switch (path) {
    case '/sale':
      return {
        title: "Ventas",
        postList: filter("sale", posts)
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

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts() {
      fetchPosts(dispatch)
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
)(postsGrid);