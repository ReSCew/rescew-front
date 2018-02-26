import {routerMiddleware} from 'react-router-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import history from './reduxRouterHistory';

// import { hashHistory } from 'react-router'
// import { autoRehydrate } from 'redux-persist' !
// import { enableBatching } from 'redux-batched-actions';


const middleware = [
  thunk,
  routerMiddleware(history)
];

// Logging Middleware
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });
  middleware.push(logger);
}

const enhancer = compose(
  applyMiddleware(...middleware)
  // autoRehydrate()
);

export default (initialState) => {
  // return createStore(enableBatching(rootReducer), initialState, enhancer);
  return createStore(rootReducer, initialState, enhancer);
};