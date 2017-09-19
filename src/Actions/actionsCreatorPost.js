// import firebaseApp from '../Config/Firebase';
import React from "react";
import * as firebase from 'firebase';

// const r = React;

// const firebaseApp = React.config.firebaseApp;

const actionsPost = {}

const dbRefText = firebase.database().ref('/').child('texto');
const dbRefPosts = firebase.database().ref('/').child('Posts');


actionsPost.fetchPosts = dispatch => React.config.firebaseApp.fetchObjects(dbRefPosts, dispatch, 'FETCH_POSTS'); 

actionsPost.createPost = post =>  React.config.firebaseApp.create(dbRefPosts, post);

actionsPost.removePost = (key) => React.config.firebaseApp.remove(dbRefPosts, key);

actionsPost.updatePost = (post, key) => React.config.firebaseApp.update(dbRefPosts, post, key);


actionsPost.fetchTexo = (dispatch) => React.config.firebaseApp.fetchObject(dbRefText, dispatch, 'FETCH_TEXTO'); 

// const fetchTexo = (index) => {
//     return {
//         type: 'FETCH_TEXTO',
//         payload: "Nuevo Texto"
//     }
// }

// console.error(firebaseApp);

actionsPost.increment = (index) => {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

actionsPost.viewPost = (currentPost) => {
    return {
        type: 'VIEW_POST',
        currentPost
    }
}


actionsPost.clearPost = () => {
    return {
        type: 'CLEAR_POST'
    }
}


actionsPost.setCurrentPlace = (currentPlace) => {
    return {
        type: 'SET_LOCATION',
        currentPlace
    }
}




///////////////////////////////

actionsPost.filterPosts = (posts, action) => {
    return {
        type: action,
        posts
    }
}

export default actionsPost;




"import React from 'react';",
"import * as firebase from 'firebase';\n",

"const dbRef${1:name} = firebase.database().ref('/').child('${1:name}');\n",

"const actions = {};\n",

"actions.fetch${1:name} = dispatch => React.config.firebaseApp.fetchObjects(dbRef${1:name}, dispatch, 'FETCH_${1:name}');",
"actions.create${2:nameSingular} = post =>  React.config.firebaseApp.create(dbRef${1:name}, post);",
"actions.remove${2:nameSingular} = (key) => React.config.firebaseApp.remove(dbRef${1:name}, key);",
"actions.update${2:nameSingular} = (post, key) => React.config.firebaseApp.update(dbRef${1:name}, post, key);",
"actions.fetchTexo = (dispatch) => React.config.firebaseApp.fetchObject(dbRefText, dispatch, '${3:action}');\n",

"export default actions${1:name};"
