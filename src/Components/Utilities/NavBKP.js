import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { store } from '../Config/Store';
import { connect } from "react-redux";

import {
    push,
    replace,
    go,
    goBack,
    goForward,
} from 'react-router-redux';
// import AppBar from 'material-ui/AppBar';

// import PhotoGrid from './PhotoGrid'




const NavigationBar = props => {

    const linksRoutes = props.linksRoutes;

    const data = props.data;

    const generateLinks = (linksRoutes) => {
        return linksRoutes.map((route, index) => (
            linksRoutes[index].show != false ? <li onClick={() => setPath(linksRoutes[index].path, props)} key={index}><Link to={linksRoutes[index].path} > {linksRoutes[index].name}</Link></li> : null
        ))
    };

    const generateRutes = (linksRoutes, data) => {
        return linksRoutes.map((route, index) => {
            return <Route exact={linksRoutes[index].exact} path={linksRoutes[index].path} key={index} component={linksRoutes[index].component} data={data}></Route>
        })
    };

    const setPath = (path, props) => {
        props.posts.posts.currentPost = {};
        // store.dispatch(push(path));
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




//////////////////////////////////////////////////////////////





import React from 'react';
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import { Route, Link } from 'react-router-dom';

import { store, history } from '../Config/Store.js';

import { mainLinksRoutes as linksRoutes } from '../Config/AppRoutes.js'
import NavigationBar from '../Utilities/NavigationBar';
import PostsGrid from '../Sections/PostsGrid';


const testLinks = [
    "/main",
    "/sale",
    "/rent"
]


const functionName = props => {

    return (
        <div>
            <ul>

                {testLinks.map((route, index) => (
                    <li key={index}><Link to={route} > {route}</Link></li>
                ))}
{/* 
                <li><Link to="/main">main</Link></li>
                <li><Link to="/sale">sale</Link></li>
                <li><Link to="/rent">rent</Link></li> */}
            </ul>

            <hr />
            <Route path="/main" component={PostsGrid} />
            <Route path="/sale" component={PostsGrid} />
            <Route path="/rent" component={PostsGrid} />
        </div>
    );
}

export default functionName;