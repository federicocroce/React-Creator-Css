//Increment
export function increment(index){
    return{
        type:'INCREMENT_LIKES',
        index
    }
}

// View Post Detail
// export function viewPost(post){
//     return{
//         type:'VIEW_POST',
//         post
//     }
// }

const viewPost = (currentPost) =>{
    return{
        type:'VIEW_POST',
        currentPost
    }
}

const clearPost = () =>{
    return{
        type:'CLEAR_POST'
    }
}


const setCurrentPlace = (currentPlace) =>{
    return{
        type:'SET_LOCATION',
        currentPlace
    }
}

const initGMaps = (gMapsElements) =>{
    return{
        type:'INIT_GMAPS',
        gMapsElements
    }
}


///////////////////////////////

const filterPosts = (posts, action) =>{
    // console.error(action);
    return{
        type: action,
        posts
    }
}





//add Ccmment
export function addComment(postId, author, comment){
    return{
        type: 'ADD_COMMENT',
        postId, 
        author, 
        comment
    }
}



//remove comment
export function removeComment(postId, i){
    return{
        type:'REMOVE_COMMENT',
        postId,
        i
    }
}


export {viewPost, filterPosts, clearPost, setCurrentPlace, initGMaps};