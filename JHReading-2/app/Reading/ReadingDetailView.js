/**
 * Created by me860209 on 2017/7/4.
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
    View,
    WebView
} from 'react-native';

import CommonNavigation from './../Util/CommonNavigation'

export default class ReadingDetailView extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <CommonNavigation
                    centerTitle='文章详情'
                    leftIcon="btn_backitem"
                    clickLeftBtn={() => this.props.navigator.pop()}
                />
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.props.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
});

module.exports = ReadingDetailView;
