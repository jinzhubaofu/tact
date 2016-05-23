/**
 * @file selectors
 * @author leon(ludafa@outlook.com)
 */

import {name} from './constants.js';

export function getAppData(store) {
    return store[name];
}
