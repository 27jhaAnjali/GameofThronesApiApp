import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, compose } from 'redux';
import reducers from "./Reducers/index";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
  {reducer:reducers},
  composeEnhancers(applyMiddleware(thunk))
);

export default store;