import React from 'react';
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import { Route } from 'react-router-dom';

import { store, history } from '../Config/Store.js';

import { mainLinksRoutes as linksRoutes } from '../Config/AppRoutes.js'
import NavigationBar from '../Utilities/NavigationBar';

import Home from './Home';

const Index = () => {

  return (
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            {/*<Route exact path="/" component={Home}></Route>*/}
            <div className="nav-bar-container">
            <NavigationBar linksRoutes={linksRoutes} />
            {/*<RaisedButton label="Default" />*/}
          </div>
          </div>
        </ConnectedRouter>
    </Provider>
  )
}

export default Index;
