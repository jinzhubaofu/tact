/**
 * @file app action
 * @author leon(ludafa@outlook.com)
 */

import * as types from './actionTypes.js';
import * as resource from './resource.js';

export function bootstrap() {

    return async function (dispatch) {

        dispatch({
            type: types.BOOTSTRAP_START
        });

        try {
            const app = await resource.load();
            dispatch({
                type: types.BOOTSTRAP_SUCCEED,
                payload: app
            });
            return app;
        }
        catch (e) {
            dispatch({
                type: types.BOOTSTRAP_FAILED,
                payload: e,
                error: true
            });
            throw e;
        }

    };

}

export function switchTab(index) {
    return {
        type: types.TAB_SWITCH,
        payload: index
    };
}
