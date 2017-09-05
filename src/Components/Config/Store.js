import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from 'history/createBrowserHistory';
import { batchedSubscribe } from 'redux-batched-subscribe';
// import { batchedUpdatesMiddleware } from 'redux-batched-updates';
// import thunk from 'redux-thunk'

import reducer from "../../Reducers/Index";

const history = createHistory();
const middleware = routerMiddleware(history);

// const store = batchedUpdatesMiddleware(
//     createStore(
//         reducer,
//         compose(
//             applyMiddleware(middleware)
//         )
//     )
// )

const store = createStore(
    reducer,
    compose(
        applyMiddleware(middleware)
    )
)

export {
    store,
    history
}



