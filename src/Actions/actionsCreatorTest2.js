import React from 'react';
import * as firebase from 'firebase';

const dbRef = firebase.database().ref('/').child('TEST2');

const actions = {};

actions.fetchObjects = dispatch => React.config.firebaseApp.fetchObjects(dbRef, dispatch, 'FETCH_TEST2');
actions.create = post =>  React.config.firebaseApp.create(dbRef, post);
actions.remove = (key) => React.config.firebaseApp.remove(dbRef, key);
actions.update = (post, key) => React.config.firebaseApp.update(dbRef, post, key);
// actions.fetchObject = (dispatch) => React.config.firebaseApp.fetchObject(dbRefText, dispatch, 'action');

export default actions;