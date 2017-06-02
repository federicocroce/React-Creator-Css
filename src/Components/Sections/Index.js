import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Route, Router, Link, Switch, IndexRoute } from 'react-router-dom';

import { store, history } from '../Config/Store.js'

import { mainLinksRoutes as linksRoutes } from '../Config/AppRoutes.js'
import NavigationBar from '../Utilities/NavigationBar';

import Home from './Home';

const Index = () => {

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route path="/" component={Home}></Route>
          </div>
        </ConnectedRouter>
      </Provider>
    )
} 

export default Index;
