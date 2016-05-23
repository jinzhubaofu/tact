/**
 * @file TouchableScale
 * @author leon(ludafa@outlook.com)
 */


import React from 'react';

import {
    TouchableWithoutFeedback,
    Animated
} from 'react-native';

/**
 * @typedef {Object} TouchableWithoutFeedbackProps
 * @property {Object} children
 * @property {Object} [accessibilityComponentType]
 * @property {boolean} [accessibilityTraits]
 * @property {boolean} [accessible]
 * @property {number} [delayLongPress]
 * @property {number} [delayPressIn]
 * @property {number} [delayPressOut]
 * @property {boolean} [disabled]
 * @property {Object} [hitSlop]
 * @property {{top: number, left: number, bottom: number, right: number}} [hitSlop]
 * @property {Function} [onLayout]
 * @property {Function} [onLongPress]
 * @property {Function} [onPress]
 * @property {Function} [onPressIn]
 * @property {Function} [onPressOut]
 * @property {{top: number, left: number, bottom: number, right: number}} [pressRetentionOffset]
 */

/**
 * TouchableScaleProps
 *
 * @property {Object} style 样式
 * @property {number} activeScale 点击时的缩放比例
 */
export default class TouchableScale extends React.Component {

    /**
     * 构造函数
     *
     * @constructor
     * @param {TouchableScaleProps} props 属性
     */
    constructor(props) {
        super(props);

        this.onPressIn = this.onPressIn.bind(this);
        this.onPressOut = this.onPressOut.bind(this);
        this.scaleAnimation = new Animated.Value(1);
    }

    render() {
        /** @type {TouchableScaleProps} */
        const props = this.props;

        return (
            <TouchableWithoutFeedback
                {...props}
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut} >
                <Animated.View
                    style={[props.style, {
                        transform: [
                            {scale: this.scaleAnimation}
                        ]}
                    ]}>
                    {props.children}
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }

    onPressIn(...args) {
        /** @type {TouchableScaleProps} */
        const props = this.props;

        Animated.spring(this.scaleAnimation, {
            toValue: props.activeScale || 0.9,
            tension: 150,
            friction: 5
        }).start();

        if (props.onPressIn) {
            props.onPressIn(...args);
        }
    }

    onPressOut(...args) {
        /** @type {TouchableScaleProps} */
        const props = this.props;

        Animated.spring(this.scaleAnimation, {
            toValue: 1,
            tension: 150,
            friction: 3
        }).start();

        if (props.onPressIn) {
            props.onPressIn(...args);
        }
    }
}
