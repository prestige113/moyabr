import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from "../middleware/promiseMiddleware";
import {rootReducer} from "../reducer";


const enhancers = [];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}


const store = createStore(
    rootReducer, applyMiddleware(thunkMiddleware, promiseMiddleware())
);

export default store