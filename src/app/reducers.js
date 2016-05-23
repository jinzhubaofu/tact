/**
 * @file app reducer
 * @author leon(ludafa@outlook.com)
 */

import * as types from './actionTypes.js';

export default function (state = {}, action) {

    const {type, payload} = action;

    switch (action.type) {

        case types.BOOTSTRAP_START:
            return {
                status: 'booting',
                tab: 0
            };
        case types.BOOTSTRAP_SUCCEED:
            return {
                ...state,
                status: 'ready',
                ...action.payload
            };
        case types.BOOTSTRAP_FAILED:
            return {
                ...state,
                status: 'error'
            };

        case types.TAB_SWITCH:
            return {
                ...state,
                tab: payload
            };
        default:
            return state;
    }

}
