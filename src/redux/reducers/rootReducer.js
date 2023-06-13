import { combineReducers } from 'redux';

import moviesReducer from './moviesReducer';
// import any other reducers, if exist

export default combineReducers({
  moviesReducer,
});
