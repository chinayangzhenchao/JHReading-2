/**
 * Created by xmg on 2017/7/2.
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
    TouchableOpacity,
    ScrollView
} from 'react-native';

import  Util from './../Util/Util'
import CommonNavigation from './../Util/CommonNavigation'
import ReadingTopView from './ReadingTopView'
import ReadingBannerView from './ReadingBannerView'
import ReadingLoginView from './ReadingLoginView'
import ReadingThemeView from './ReadingThemeView'
import ReadingNewThemeListView from './ReadingNewThemeListView'

//获取数据(引入本地的数据)
const topData = require('./localData/TopData.json');
const bannerData = require('./localData/BannerData.json');
const themeData = require('./localData/TheamData.json');
const myReadingData = require('./localData/MyReading.json');


export default class Reading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CommonNavigation
                    centerIcon='reading'
                />
                <ScrollView>
                    {/*头部轮播图*/}
                    <ReadingTopView topData={topData} {...this.props}/>
                    {/*导航视图*/}
                    <ReadingBannerView bannerData={bannerData} {...this.props}/>
                    {/*登录视图*/}
                    <ReadingLoginView {...this.props}/>
                    {/*主题视图*/}
                    <ReadingThemeView themeData={themeData} {...this.props}/>
                    {/*最新专题*/}
                    <ReadingNewThemeListView myReadingData={myReadingData} {...this.props}/>
                </ScrollView>
            </View>
        )
    }
}
// <ReadingNewThemeListView myReading={myReadingData}/>
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Util.viewBgColor
    },
});

module.exports = Reading;
