import React from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './redux/Employee';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { applyMiddleware,createStore, } from 'redux'
import todoApp from './redux/reducers'
import store from './redux/Store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Employee/>
    </div>
    </Provider>
  );
}

export default App;
