import React from 'react';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { applyMiddleware,createStore, } from 'redux'
import employeeReducerApp from './reducers'

const middlewares = [thunk];
const store = createStore(employeeReducerApp,applyMiddleware(...middlewares))

export default store;
