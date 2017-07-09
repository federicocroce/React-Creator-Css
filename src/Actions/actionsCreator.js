//Increment
export function increment(index){
    return{
        type:'INCREMENT_LIKES',
        index
    }
}

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




export {viewPost, filterPosts, clearPost, setCurrentPlace, initGMaps};