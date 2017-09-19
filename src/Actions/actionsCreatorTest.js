import React from 'react';
import * as firebase from 'firebase';

const dbRefTests = firebase.database().ref('/').child('Tests');

const actions = {};

actions.fetchTest = dispatch => React.config.firebaseApp.fetchObjects(dbRefTests, dispatch, 'FETCH_TEST');
actions.createTest = post =>  React.config.firebaseApp.create(dbRefTests, post);
actions.removeTest = (key) => React.config.firebaseApp.remove(dbRefTests, key);
actions.updateTest = (post, key) => React.config.firebaseApp.update(dbRefTests, post, key);
// actions.fetchTexo = (dispatch) => React.config.firebaseApp.fetchObject(dbRefText, dispatch, 'FETCH_T');

export default actions;