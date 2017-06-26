import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
// import { reducer as form  } from 'redux-form';
import { combineForms } from 'react-redux-form';

import { posts } from './Posts';
import { maps } from './GMaps';
// import comments from './comments';


// function currentPost(state = {}, action) {
//     // console.error("El post cambio");
//     // console.error(action);
//     switch (action.type) {
//         case 'VIEW_POST':
//             // console.error(action);

//             // return action.id;
//             // console.error(store.getState());
//             return state.currentPost = action.allPosts.find(product => product.id == action.post.id);

//             break;
//         default:
//             return state
//     }

//     return state;
// }

const initialUserState = {
    firstName: '',
    lastName: ''
};

// const forms = combineForms({
//     postDetails: initialUserState,
// });

const allReducers = {
    // forms,
    // postDetailsForm: initialUserState,
    posts,
    maps,
    routing: routerReducer
}

const rootReducer = combineForms(allReducers)

export default rootReducer;
