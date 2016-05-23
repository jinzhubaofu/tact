/**
 * @file 主页面
 * @author leon(ludafa@outlook.com)
 */

import React, {Component, PropTypes} from 'react';

import {createStructuredSelector} from 'reselect';
import {getAll} from '../selectors';
import {connect} from 'redux';

import {
    Text,
    View
} from 'react-native';

import styles from './index.css.js';

class TodoList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
    createStructuredSelector({
        todos: getAll
    })
)(TodoList);
