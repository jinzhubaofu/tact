/**
 * @file root reducer
 * @author leon(ludafa@outlook.com)
 */

import {combineReducers} from 'redux';
// import todo from './todo';

import app from './app';

console.log(app);

export default combineReducers({
    [app.constants.name]: app.reducers
    // [todo.constants.name]: todo.reducer
});
