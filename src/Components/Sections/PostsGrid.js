
import React from 'react';
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import { Route, Link } from 'react-router-dom';

import { store, history } from '../Config/Store.js';

import { mainLinksRoutes as linksRoutes } from '../Config/AppRoutes.js'
import NavigationBar from '../Utilities/NavigationBar';

import Button from '../Utilities/Button';

// import Home from './Home';

const back = (props) => {
    // props.clearPost();
    history.goBack();
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = (props) => (
  <div>
    <h2>About</h2>
    {/*<Button className="primary-button" label="VOLVER" onClick={() => back(props)} />*/}
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    {/*<Button className="primary-button" label="VOLVER" onClick={() => back(props)} />*/}
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )} />
    {/*<Button className="primary-button" label="VOLVER" onClick={() => back(props)} />*/}
  </div>
)

const BasicExample = () => {

  
  return (
      <div>
        <ul>
          <li><Link to="/main/about">About</Link></li>
          <li><Link to="/main/topics">Topics</Link></li>
        </ul>

        <hr />
        <Route path="/main/about" component={About} />
        <Route path="/main/topics" component={Topics} />
        <Button className="primary-button" label="VOLVER" onClick={() => back()} />
      </div>
  )
}
export default BasicExample