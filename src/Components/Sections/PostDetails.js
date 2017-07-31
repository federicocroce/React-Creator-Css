import React from 'react';
import { Link } from 'react-router-dom';

import { mainLinksRoutes as linksRoutes } from '../Config/AppRoutes.js'
import NavigationBar from '../Utilities/NavigationBar';

import postsGrid from './PostsGrid';
import Test from './Test';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    console.log("Details");
    return (
      <div>
       <h1> FEDEEEE </h1>
       <Test/>
      </div>
    );
  }
}

export default Home;