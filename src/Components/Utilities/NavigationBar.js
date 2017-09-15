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
            linksRoutes[index].show != false ? <li  key={index}><Link to={linksRoutes[index].path} > {linksRoutes[index].name}</Link></li> : null
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

export default NavigationBar;