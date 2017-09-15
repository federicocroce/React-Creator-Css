import React from 'react';
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import { Route, Link } from 'react-router-dom';

import { store, history } from '../Config/Store.js';

import { mainLinksRoutes as linksRoutes } from '../Config/AppRoutes.js'
import NavigationBar from '../Utilities/NavigationBar';
import PostsGrid from '../Sections/PostsGrid';

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

              {/* <ul>
                <li><Link to="/main">main</Link></li>
                <li><Link to="/sale">sale</Link></li>
                <li><Link to="/rent">rent</Link></li>
              </ul>

              <hr />
              <Route path="/main" component={PostsGrid} />
              <Route path="/sale" component={PostsGrid} />
              <Route path="/rent" component={PostsGrid} /> */}

              {/* <Button className="primary-button" label="VOLVER" onClick={() => back()} /> */}
          </div>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default Index;
