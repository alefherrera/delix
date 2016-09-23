import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import '../util/io';
const router = routerMiddleware(browserHistory);
const logger = createLogger();
const storeCreator =
  applyMiddleware(thunk, promiseMiddleware, router, logger)(createStore);
const store = storeCreator(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  })
);

export default store;
