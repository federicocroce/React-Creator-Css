import React from 'react';
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import { Route } from 'react-router-dom';

import { store, history } from '../Config/Store.js'

import Home from './Home';

const Index = () => {

  return (
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            {/* <Route path="/" component={Home}></Route> */}
            <Home/>
          </div>
        </ConnectedRouter>
    </Provider>
  )
}

export default Index;
