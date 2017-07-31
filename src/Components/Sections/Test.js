import React from 'react';
import { Link } from 'react-router-dom';
// import Test1 from './Test1';





// import { mainLinksRoutes as linksRoutes } from '../Config/AppRoutes.js'
// import NavigationBar from '../Utilities/NavigationBar';
// import Post from './Post';
// import PostGrid from './PostsGrid';

class Home extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            show : false
        }
      }
    
      show = () => {
        //   alert("Entro")
        this.setState({
            show: true
        });
        // console.log(this.state.show)
        // this.state.show = true
     }


  render() {
    console.log("Test");
    return (
      <div>
        <h1>
          Test
        </h1>

        {/* {this.state.show ? < Test1 /> : null} */}
        {/* A{a} */}
        {/* {this.state.show ? <h1>Test1</h1>: null} */}
        <input type="button" onClick={this.show}>
            {/* button  */}
        </input>
        <div className="nav-bar-container">
          {/* <NavigationBar linksRoutes={linksRoutes} /> */}
          {/* <PostGrid /> */}
          {/*<RaisedButton label="Default" />*/}
        </div>

      </div>
    );
  }
}

export default Home;