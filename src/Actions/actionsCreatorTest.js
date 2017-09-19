import firebaseApp from '../Config/Firebase';
import * as firebase from 'firebase';

const dbRef = firebase.database().ref('/Tests');

const actionsTest = {};

actionsTest.fetchTest = (dispatch) => {
    dbRef.on('value', snapshot => {
        dispatch({
            type: 'FETCH_TEST',
            payload: snapshot
        });
    });
}


actionsTest.createTest = params => {
    return dbRef.push().set(params);
}


export default actionsTest;