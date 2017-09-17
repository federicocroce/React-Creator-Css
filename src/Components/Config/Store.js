import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
// import thunk from 'redux-thunk'


import reducer from "../../Reducers/indexReducer";

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            // logger,
            middleware            
        )
    )
)

export {
    store,
    history
}



