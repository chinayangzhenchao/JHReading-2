/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import  Util from './../Util/Util'
import CommonNavigation from './../Util/CommonNavigation'
import FindingListCellOne from './FindingListCellOne'
import FindListView from './FindingListView'

const findData = require('./localData/discoverData.json')
export default class Finding extends Component {


    render() {
        return (
            <View style={styles.container}>
                <CommonNavigation
                    centerIcon='discover'
                />
            <FindListView findData={findData}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

module.exports = Finding;
