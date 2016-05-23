/**
 * @file 主入口
 * @author leon(ludafa@outlook.com)
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {getAppData} from '../selectors.js';
import {createSelector} from 'reselect';
import Tabs, {Tab} from '../../common/component/Tabs.js';
import * as actions from '../actions.js';
import {Router, Route, createMemoryHistory} from 'react-router';

// import Todo from '../todo/Main.js';
import styles from './App.css.js';

const history = createMemoryHistory({
});

export class A extends Component {
    render() {
        return (
            <View style={styles.test}>
                <Text>a</Text>
            </View>
        );
    }
}

export class B extends Component {
    render() {
        return (
            <View style={styles.test}>
                <Text>B</Text>
            </View>
        );
    }
}

export class C extends Component {
    render() {
        return (
            <View style={styles.test}>
                <Text>C</Text>
            </View>
        );
    }
}

export class App extends Component {

    componentDidMount() {
        this.props.bootstrap();
    }

    render() {

        const {
            tab,
            // status,
            switchTab
        } = this.props;

        return (
            <View style={styles.main}>
                <View style={styles.content}>
                    <Router history={history}>
                        <Route path="/" component={A} />
                        <Route path="/a" component={A} />
                        <Route path="/b" component={B} />
                        <Route path="/c" component={C}/>
                    </Router>
                </View>
                <Tabs
                    style={styles.tab}
                    activeIndex={tab}
                    tintColor="#2196F3"
                    barTintColor="#00000010"
                    onChange={switchTab}>
                    <Tab
                        title="Todo"
                        icon={require('./img/ic_assignment.png')} />
                    <Tab
                        title="Calendar"
                        icon={require('./img/ic_event.png')} />
                    <Tab
                        title="Calendar"
                        icon={require('./img/ic_event.png')} />
                    <Tab
                        title="Me"
                        icon={require('./img/ic_person.png')} />
                </Tabs>
            </View>
        );

    }

}

export default connect(createSelector(getAppData, app => app), actions)(App);
