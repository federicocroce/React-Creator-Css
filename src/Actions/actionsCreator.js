import firebaseApp from '../Components/Config/Firebase';
import * as firebase from 'firebase';

const dbRefText = firebase.database().ref('/').child('texto');
const dbRefPosts = firebase.database().ref().child('Posts');

const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = { [childSnapshot.key] : childSnapshot.val()}
        returnArr.push(item);
    });
    return returnArr;
};

const fetchPosts = (dispatch) => {
    dbRefPosts.on('value', snapshot => {
        dispatch({
            type: 'FETCH_POSTS',
            payload: snapshotToArray(snapshot)
        });
    });
}

const createPost = (post, dispatch) => {
    // return dbRefPosts.child("newPost").set(post);   CAMBIO DE NOMBRE DEL POST A PUSHEAR
    return dbRefPosts.push().set(post);
}

const removePost = (key) => {
    // return dbRefPosts.child("newPost").set(post);   CAMBIO DE NOMBRE DEL POST A PUSHEAR
    return dbRefPosts.child(key).remove();
}

const updatePost = (post, key) => {
    // return dbRefPosts.child("newPost").set(post);   CAMBIO DE NOMBRE DEL POST A PUSHEAR
    return dbRefPosts.child(key).update(post);
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
    return {
        type: action,
        posts
    }
}




export { viewPost, filterPosts, clearPost, setCurrentPlace, initGMaps, fetchTexo, fetchPosts, createPost, updatePost, removePost };