/**
 * Created by me860209 on 2017/7/5.
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import  Util from './../Util/Util'
import CommonNavigation from './../Util/CommonNavigation'
export default class MineSetingView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CommonNavigation
                    centerTitle='设置'
                    leftIcon="btn_backitem"
                    clickLeftBtn={() => this.props.navigator.pop()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});

module.exports = MineSetingView;
