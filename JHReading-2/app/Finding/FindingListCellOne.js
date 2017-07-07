/**
 * Created by xmg on 2017/7/6.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import Util from './../Util/Util';

export default class FindingListCellOne extends Component {
    render() {
        var data = this.props.rowData;
        return (
            <TouchableOpacity style={styles.rowStyle}>
                <View style={styles.leftViewStyle}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>{data.name}</Text>
                    <Text style={{color: '#999', fontSize: 14, marginLeft: 8}}>{data.disc}</Text>
                </View>
                <Image source={{uri: 'icon_shike_arrow'}} style={styles.imgStyle}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    rowStyle: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 44,
        borderBottomWidth: Util.minPixeWth,
        borderBottomColor: '#e8e8e8',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftViewStyle: {
        flexDirection: 'row',
        marginLeft: 8,
        alignItems: 'center'
    },
    imgStyle: {
        width: 7,
        height: 12,
        marginRight: 8
    }
});

module.exports = FindingListCellOne;
