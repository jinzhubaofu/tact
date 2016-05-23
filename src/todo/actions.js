/**
 * @file todo actions
 * @author leon(ludafa@outlook.com)
 */

import * as types from './actionTypes.js';

export function load() {
    return {
        type: types.LOAD
    };
}
