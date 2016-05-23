/**
 * @file app
 * @author leon(ludafa@outlook.com)
 */

import React, {Component} from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import app from './app';
import createLogger from 'redux-logger';

const reducer = combineReducers({
    [app.constants.name]: app.reducers
});

const middlewares = applyMiddleware(thunk, createLogger());

const store = createStore(
    reducer,
    {
        app: {tab: 0, status: 'init'}
    },
    middlewares
);
const App = app.components.default;

// import Todo from '../components/Todo';

export default class AppContainer extends Component {

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }

}
