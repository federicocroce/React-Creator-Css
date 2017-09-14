import React from 'react';
import { Link } from 'react-router-dom';

import { mainLinksRoutes as linksRoutes } from '../Config/AppRoutes.js'
import NavigationBar from '../Utilities/NavigationBar';
import { Route } from 'react-router-dom';
import PostsGrid from '../Sections/PostsGrid';
// import Home from '../Sections/Home';
import NewPost from '../Sections/NewPost';
import PostDetails from '../Sections/PostDetails'

class Home extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    console.log("Home");
    return (
      <div>
        <h1>
          <Link className='title-home' to="/">Venta/Alquier Inmuebles</Link>
        </h1>
        {/* <Route exact path="/main" component={PostsGrid}></Route>     
        <Route exact path="/sell " component={PostsGrid}></Route>     
        <Route exact path="/rent" component={PostsGrid}></Route>     
        <Route exact path="/new" component={NewPost}></Route>   

        <Link className='title-home' to="/main">Venta/Alquier Inmuebles</Link>  
        <Link className='title-home' to="/sell">Venta/Alquier Inmuebles</Link>  
        <Link className='title-home' to="/rent">Venta/Alquier Inmuebles</Link>  
        <Link className='title-home' to="/new">Venta/Alquier Inmuebles</Link>   */}
        {/* <div className="nav-bar-container">
          <NavigationBar linksRoutes={linksRoutes} />
        </div> */}
      </div>
    );
  }
}

export default Home;