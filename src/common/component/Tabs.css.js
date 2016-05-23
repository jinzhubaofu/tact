/**
 * @file TabBar css
 * @author leon(ludafa@outlook.com)
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    main: {
        flex: 1,
        height: 56,
        flexDirection: 'row',
        alignItems: 'stretch',
        alignSelf: 'flex-end',
    },

    tab: {
        flex: 1,
        alignItems: 'stretch'
    },

    tabView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        width: 24,
        height: 24,
        tintColor: '#00000030'
    },

    label: {
        fontSize: 16,
        color: '#00000030'
    }

});
