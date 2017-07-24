import firebaseApp from '../Components/Config/Firebase';
import * as firebase from 'firebase';

const dbRefText = firebase.database().ref('/').child('texto');
const dbRefPosts = firebase.database().ref('/').child('Posts');

// const fetchTexo = () => {
//     return dispatch => {
//         dbRef.on('value', snapshot => {
//             dispatch({
//                 type: 'FETCH_TEXTO',
//                 payload: snapshot.val()
//             });
//         });
//     }
// }

const fetchPosts = (dispatch) => {
    dbRefPosts.on('value', snapshot => {
        dispatch({
            type: 'FETCH_POSTS',
            payload: snapshot.val()
        });
    });
}

const fetchTexo = (dispatch) => {
    dbRefText.on('value', snapshot => {
        dispatch({
            type: 'FETCH_TEXTO',
            payload: snapshot.val()
        });
    });
}

// const fetchTexo = (index) => {
//     return {
//         type: 'FETCH_TEXTO',
//         payload: "Nuevo Texto"
//     }
// }

// console.error(firebaseApp);

export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

const viewPost = (currentPost) => {
    return {
        type: 'VIEW_POST',
        currentPost
    }
}


const clearPost = () => {
    return {
        type: 'CLEAR_POST'
    }
}


const setCurrentPlace = (currentPlace) => {
    return {
        type: 'SET_LOCATION',
        currentPlace
    }
}

const initGMaps = (gMapsElements) => {
    return {
        type: 'INIT_GMAPS',
        gMapsElements
    }
}


///////////////////////////////

const filterPosts = (posts, action) => {
    // console.error(action);
    return {
        type: action,
        posts
    }
}




export { viewPost, filterPosts, clearPost, setCurrentPlace, initGMaps, fetchTexo, fetchPosts };