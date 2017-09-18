import React from 'react';
import $ from 'jquery-lite';
// import Home from '../Components/Sections/Home';

//////////////  COMPONENTS //////////////////
import Button from '../Components/Utilities/Button';
import NavigationBar from '../Components/Utilities/NavigationBar';
import InputText from '../Components/Utilities/InputText';
import KeyValue from '../Components/Utilities/KeyValue';
import Spinner from '../Components/Utilities/Spinner';
import GMaps from '../Components/Utilities/GMaps/GMaps';
import GMapsSearchBox from '../Components/Utilities/GMaps/GMapsSearchBox';
import SwitchesGroup from '../Components/Utilities/SwitchesGroup';
import UploadImg from '../Components/Utilities/UploadImg';


import Index from '../Components/Sections/Index';
import Home from '../Components/Sections/Home';
import Post from '../Components/Sections/Post';
import PostDetails from '../Components/Sections/PostDetails';
import PostsGrid from '../Components/Sections/PostsGrid';
///////////////////////////////////////////////////////////////

//////////////// CONFIG /////////////////////
import storeHistory from '../Config/Store.js';






const frameworkConfig = props => {

    Object.assign(React, {
        functions : {},
        components : {},
        actions:{},
        config:{}
    });

    //////////////  FUNCTIONS //////////////////
    React.functions.isEmpty = (element) => $.isEmptyObject(element) ? true : false;
    ///////////////////////////////////////////




    //////////////  COMPONENTS //////////////////
    React.components.Button = Button;
    React.components.NavigationBar = NavigationBar;
    React.components.InputText = InputText;
    React.components.KeyValue = KeyValue;
    React.components.Spinner = Spinner;
    React.components.GMaps = GMaps;
    React.components.GMapsSearchBox = GMapsSearchBox;
    React.components.SwitchesGroup = SwitchesGroup;
    React.components.UploadImg = UploadImg;

    React.components.Index = Index;
    React.components.Home = Home;
    React.components.Post = Post;
    React.components.PostDetails = PostDetails;
    React.components.PostsGrid = PostsGrid;
    ///////////////////////////////////////////

    ///////// CONFIG //////////////////
    React.config.storeHistory = storeHistory;

}

export default frameworkConfig;


