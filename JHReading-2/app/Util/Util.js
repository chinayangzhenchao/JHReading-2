/**
 * Created by xmg on 2017/7/2.
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
    PixelRatio // 获取最小线宽
} from 'react-native';
const Dimensions = require('Dimensions');

module.exports = {
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        scale: Dimensions.get('window').scale
    },
    minPixeWth: 1/PixelRatio.get(), // 获取最小线高
    viewBgColor: '#e8e8e8',

    get(api_uri, successBack, errorBack){
        fetch(api_uri)
            .then((response)=>response.json())
            .then((responseJson)=>{
                successBack(responseJson)
            })
            .catch((error)=>{
                errorBack(error)
            })
    },
}