import React from 'react';
import { connect } from "react-redux";
import classnames from 'classnames';
import Post from './Post';
import { fetchPosts } from '../../Actions/actionsCreator';
import _ from 'lodash';
import { withRouter } from 'react-router-dom'

// import { history } from '../Config/Store';



class postsGrid extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.posts.postList.length == 0)
    this.props.fetchPosts();
  }
 

  render() {
    const back = props => {
      this.props.history.goBack();
    }
    console.log("Grid");
    let props = this.props;
    const posts = props.posts.postList;
    return (
      <div className="posts-container">


        {posts ? posts.map((post, index) => {
          return <Post key={index} index={index} object={post} />
        }
        ) : null}

        <button onClick={() => back(props)}> VOLVER </button>

      </div>
    );
  }

}


const getFilterPosts = (posts, path) => {
  const filter = (value, posts) => posts.filter(post => post[Object.keys(post)[0]].operationsTypes == value);
  switch (path) {
    case '/sale':
      return {
        title: "Ventas",
        postList: filter("sale", posts)
      }
    case '/rent':
      return {
        title: "Alquileres",
        postList: filter("rent", posts)
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
    posts: getFilterPosts(state.posts.allPosts, state.router.location.pathname)
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
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(postsGrid));