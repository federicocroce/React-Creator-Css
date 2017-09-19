import firebaseApp from '../Config/Firebase';
import * as firebase from 'firebase';

const actionsPost = {}

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

actionsPost.fetchPosts = (dispatch) => {
    dbRefPosts.on('value', snapshot => {
        dispatch({
            type: 'FETCH_POSTS',
            payload: snapshotToArray(snapshot)
        });
    });
}

actionsPost.createPost = post => {
    // return dbRefPosts.child("newPost").set(post);   CAMBIO DE NOMBRE DEL POST A PUSHEAR
    return dbRefPosts.push().set(post);
}

actionsPost.removePost = (key) => {
    // return dbRefPosts.child("newPost").set(post);   CAMBIO DE NOMBRE DEL POST A PUSHEAR
    return dbRefPosts.child(key).remove();
}

actionsPost.updatePost = (post, key) => {
    // return dbRefPosts.child("newPost").set(post);   CAMBIO DE NOMBRE DEL POST A PUSHEAR
    return dbRefPosts.child(key).update(post);
}


actionsPost.fetchTexo = (dispatch) => {
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