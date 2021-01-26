import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, getRobots } from './reducers';
import './index.css';
import thunk from 'redux-thunk';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';


const rootReducer = combineReducers({ searchRobots, getRobots })
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
    	<App />
    </Provider>
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
