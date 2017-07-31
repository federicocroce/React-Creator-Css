import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { store } from '../Config/Store';
import { connect } from "react-redux";

import {
    push,
    replace,
    go,
    goBack,
    goForward,
} from 'react-router-redux';


const NavigationBar = props => {

    const linksRoutes = props.linksRoutes;

    const data = props.data;

    const generateLinks = (linksRoutes) => {
        return linksRoutes.map((route, index) => (
            linksRoutes[index].show != false ? <li onClick={() => setPath(linksRoutes[index].path, props)} key={index}><NavLink to={linksRoutes[index].path} > {linksRoutes[index].name}</NavLink></li> : null
        ))
    };

    const generateRutes = (linksRoutes, data) => {
        return linksRoutes.map((route, index) => {
            return <Route exact={linksRoutes[index].exact} path={linksRoutes[index].path} key={index} component={linksRoutes[index].component} data={data}></Route>
        })
    };

    const setPath = (path, props) => {
        props.posts.posts.currentPost = {};
        store.dispatch(push(path));
    }

    return (
        <div>
            <ul>{generateLinks(linksRoutes)}</ul>
            {generateRutes(linksRoutes, data)}
        </div>
    );

}







// render() {




// }
// }


// export default NavigationBar;


const mapStateToProps = (state) => {
    return {
        posts: state
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
)(NavigationBar);
