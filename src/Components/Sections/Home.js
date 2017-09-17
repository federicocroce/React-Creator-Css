import React from 'react';
import { Link } from 'react-router-dom';

import { mainLinksRoutes as linksRoutes } from '../Config/AppRoutes.js'
import NavigationBar from '../Utilities/NavigationBar';

class Home extends React.Component {

  render() {
    console.log("Home");
    return (
      <div>
        <h1>
          <Link className='title-home' to="/">Venta/Alquier Inmuebles</Link>
        </h1>
        <div className="nav-bar-container">
          <NavigationBar linksRoutes={linksRoutes} />
        </div>
      </div>
    );
  }
}

export default Home;