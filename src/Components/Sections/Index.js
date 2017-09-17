import React from 'react';
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import { store, history } from '../Config/Store.js'

import Home from './Home';

const Index = () => {
  return (    
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Home/>
          </div>
        </ConnectedRouter>
    </Provider>
  )
}

export default Index;
