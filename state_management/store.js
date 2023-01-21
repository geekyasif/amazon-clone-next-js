import { createStore, applyMiddleware, compose } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import rootReducer from './reducer/reducers';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk)
))


export default store;