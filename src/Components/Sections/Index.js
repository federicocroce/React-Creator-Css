import React from 'react';
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import { Route } from 'react-router-dom';

import { store, history } from '../Config/Store.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './Home';
import Post from './Post';

const Index = () => {

  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <ConnectedRouter history={history}>
          <div>
            <Route path="/" component={Home}></Route>
            {/* <Route path="/" component={Post}></Route> */}
          </div>
        </ConnectedRouter>
      </MuiThemeProvider>
    </Provider>
  )
}

export default Index;
