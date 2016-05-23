/**
 * @file resource
 * @author leon(ludafa@outlook.com)
 */

import {AsyncStorage} from 'react-native';
import {name} from './constants.js';

export async function load() {
    const app = await AsyncStorage.getItem(name);
    return app || {};
}
