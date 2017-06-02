import React from 'react';
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Route } from 'react-router-dom';


import { store, history } from './Config/Store.js'


const Index = () => {

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            {/*<Route path="/" component={Home}></Route>*/}
            <h1>Monitor</h1>
          </div>
        </ConnectedRouter>
      </Provider>
    )
} 

export default Index;