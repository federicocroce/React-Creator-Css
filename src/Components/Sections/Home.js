import React from 'react';
import { Link } from 'react-router-dom';

import { mainLinksRoutes as linksRoutes } from '../Config/AppRoutes.js'
import NavigationBar from '../Utilities/NavigationBar';

import postsGrid from './PostsGrid';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <h1>
          <Link className='title-home' to="/">Venta/Alquier Inmuebles</Link>
        </h1>
        <div className="nav-bar-container">
          <NavigationBar linksRoutes={linksRoutes} />
          {/*<RaisedButton label="Default" />*/}
        </div>
        <postsGrid />
      </div>
    );
  }
}

export default Home;