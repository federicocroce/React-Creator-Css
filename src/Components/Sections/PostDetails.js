import React from 'react';
// import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { clearPost } from '../../Actions/actionsCreator';
import Ripple from '../Utilities/Ripple'
import SearchBoxExample from '../Utilities/Map'
import GMaps from '../Utilities/GMaps/GMaps'
import GMapsSechBoxAnda from '../Utilities/GMaps/GMapsSechBoxAnda'
// import { PostDetail } from './PostDetail';
import $ from 'jquery-lite';


import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';


import ReactTestUtils from 'react-dom/test-utils';

import { store } from '../Config/Store.js';

import {
  push,
  replace,
  go,
  goBack,
  goForward,
} from 'react-router-redux';

import classnames from 'classnames';

const PostDetails = (props) => {

  var postClass = '';
  var showPost = true;

  const back = props => {
    props.state.posts.currentPost = {};
    props.clearPost();
  }




  const ripple = e => {

    const posX = e.offsetX,
      posY = e.offsetY;


    // effect.style.top = (e.pageY - offset.top) + "px";
    // effect.style.left = (e.pageX - offset.left) + "px";

    console.log(e.target);

    // e.
  }




  const styles = {
    block: {
      maxWidth: 250,
    },
    radioButton: {
      marginBottom: 16,
    },
  };



  return (
    <div>


      <RadioButtonGroup className="radio-button horizontal-radio-button" name="shipSpeed" defaultSelected="not_light">
        {/*<RadioButtonGroup style={styles.RadioButtonGroup} name="shipSpeed" defaultSelected="not_light">*/}
        <RadioButton
          value="alquiler"
          label="Alquiler"
          style={styles.radioButton}
        />

        <RadioButton
          value="temporario"
          label="Alquiler Temporario"
          style={styles.radioButton}
        />

        <RadioButton
          value="venta"
          label="Venta"
          style={styles.radioButton}
        />
      </RadioButtonGroup>

      <div className="input-text-container">
        <input onClick={(e) => ripple(e)} className="inputMaterial" type="text" required />
        <label>texto</label>
        <Ripple />
        <hr />
      </div>

      <TextField className="input-text" hintText="Hint Text" floatingLabelText="Floating Label Text" />

      <TextField hintText="Hint Text" floatingLabelText="Floating Label Text" />

      <TextField hintText="Hint Text" floatingLabelText="Floating Label Text" />

      <RaisedButton className="primary-button" label="Volver" primary={true} onClick={() => back(props)} />

        {/*<SearchBoxExample />*/}
        <GMapsSechBoxAnda/>
        {/*<GMaps/>*/}

    </div>


  );
}

// export { PostDetails };

const mapStateToProps = (state) => {
  return {
    state: state
  };
}


const mapDispatchToProps = dispatch => {
  return {
    clearPost() {
      dispatch(clearPost());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);