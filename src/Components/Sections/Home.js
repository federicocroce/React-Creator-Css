import React from 'react';
import { Link } from 'react-router-dom';

import { mainLinksRoutes as linksRoutes } from '../Config/AppRoutes.js'
import NavigationBar from '../Utilities/NavigationBar';
import Post from './Post';
import PostGrid from './PostsGrid';
import PostsDetails from './PostDetails';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    console.log("Home")
    return (
      <div>
        <h1>
          <Link className='title-home' to="/">Venta/Alquier Inmuebles</Link>
        </h1>
        <PostsDetails/>
        <PostsDetails/>
        <PostsDetails/>
        <PostsDetails/>
        <div className="nav-bar-container">
          {/* <NavigationBar linksRoutes={linksRoutes} /> */}
          {/*<PostGrid />*/}
          {/*<RaisedButton label="Default" />*/}
        </div>

      </div>
    );
  }
}

export default Home;