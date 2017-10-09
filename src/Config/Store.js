import { createStore, applyMiddleware, combineReducers } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import reducers from "../Reducers/indexReducer";

// import thunk from 'redux-thunk'

const storeHistory = {};

storeHistory.history = createHistory();
const middleware = routerMiddleware(storeHistory.history);

storeHistory.store = createStore(
    combineReducers(reducers),
    composeWithDevTools(
        applyMiddleware(
            // logger,
            middleware            
        )
    )
)

export default storeHistory;



