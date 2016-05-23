/**
 * @file Tabs
 * @author leon(ludafa@outlook.com)
 */

import {View, Text, Image, Dimensions} from 'react-native';
import React, {Component, PropTypes, Children, cloneElement} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import styles from './Tabs.css.js';
import TouchableScale from './TouchableScale.js';

export class Tab extends Component {

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        const {onPress, index} = this.props;
        onPress(index);
    }

    render() {

        const {
            icon,
            title,
            tintColor,
            barTintColor,
            active
        } = this.props;

        return (
            <TouchableScale
                onPress={this.onPress}
                style={styles.tab}
                underlayColor={barTintColor}>
                <View style={styles.tabView}>
                    <Image style={[styles.icon, active && {tintColor}]} source={icon} />
                    <Text style={[styles.label, active && {color: tintColor}]}>{title}</Text>
                </View>
            </TouchableScale>
        );

    }
}

Tab.propTypes = {
    index: PropTypes.number,
    icon: Image.propTypes.source,
    title: PropTypes.string.isRequired
};

export default class Tabs extends Component {

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.onTabPress = this.onTabPress.bind(this);
    }

    onTabPress(index) {

        const {activeIndex, onChange} = this.props;

        if (index === activeIndex) {
            return;
        }

        onChange && onChange(index);

    }

    render() {

        const {
            activeIndex,
            tintColor,
            barTintColor,
            style
        } = this.props;

        const windowWidth = Dimensions.get('window').width;

        const children = Children
            .toArray(this.props.children)
            .filter(child => child && child.type === Tab);

        return (
            <View style={[styles.main, style, {backgroundColor: barTintColor}]}>
                {children
                    .map((tab, index) => (
                        cloneElement(tab, {
                            index,
                            tintColor,
                            barTintColor,
                            width: windowWidth / children.length,
                            onPress: this.onTabPress,
                            key: index,
                            active: index === activeIndex
                        })
                    ))
                }
            </View>
        );

    }

}

Tabs.defaultProps = {
    activeIndex: 0,
    tintColor: '#000000',
    barTintColor: '#FFFFFF'
};

Tabs.propTypes = {
    activeIndex: PropTypes.number,
    onChange: PropTypes.func,
    tintColor: PropTypes.string,
    barTintColor: PropTypes.string
};
