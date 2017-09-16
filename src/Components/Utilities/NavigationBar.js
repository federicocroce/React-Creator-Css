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
// import AppBar from 'material-ui/AppBar';

// import PhotoGrid from './PhotoGrid'




const NavigationBar = props => {

    const linksRoutes = props.linksRoutes;

    const data = props.data;

    const generateLinks = (linksRoutes) => {
        return linksRoutes.map((route, index) => (
            linksRoutes[index].show != false ? <li  key={index}><NavLink exact={linksRoutes[index].exact} to={linksRoutes[index].path} > {linksRoutes[index].name}</NavLink></li> : null
        ))
    };

    const generateRutes = (linksRoutes, data) => {
        return linksRoutes.map((route, index) => {
            return <Route path={linksRoutes[index].path} key={index} component={linksRoutes[index].component} data={data}></Route>
        })
    };

    return (
        <div>
            <ul>{generateLinks(linksRoutes)}</ul>
            {generateRutes(linksRoutes, data)}
        </div>
    );

}

export default NavigationBar;