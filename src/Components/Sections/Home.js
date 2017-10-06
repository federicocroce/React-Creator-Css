import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component {

  render() {

    console.log("Home");
    return (
      <section>
        <h1>
          Esta es la HOME
        </h1>
        <React.components.Button className='primary-button' label='Volver' back />
      </section>
    );
  }
}

export default Home;