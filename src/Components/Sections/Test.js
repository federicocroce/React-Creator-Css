import React from 'react';
import Test1 from './Test1';

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
    console.log("Test")
    return (
      <div>
        <h1>
          Test
        </h1>
         {this.state.show ? < Test1 /> : null} 
        <button type="button" onClick={this.show}>
            SHOW
        </button>
        
      </div>
    );
  }
}

export default Home;