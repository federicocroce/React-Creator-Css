import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from 'history/createBrowserHistory';
import { batchedSubscribe } from 'redux-batched-subscribe';
import { composeWithDevTools } from 'redux-devtools-extension';
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
    ...reducer,
    composeWithDevTools(
        applyMiddleware(middleware)
    )
)

// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));

export {
    store,
    history
}



