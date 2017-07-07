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
    Image,
    Platform,
    TouchableOpacity
} from 'react-native';

import MineCommonListView from './MineCommonListView'
import LoginView from  './LoginView'
import MineSetingView from  './MineSetingView'
import  Util from './../Util/Util'

const mineData = require('./LocalData/mineData.json')
export default class Mine extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <MineCommonListView
                mineData={mineData}
                clickCell={(sectionID, rowID) => this._dealWithCellClick(sectionID, rowID)}
                renderHeaderView={() => this._renderHeaderView()}
                insetHeight={Platform.OS === 'ios' ? 300 : 0}
            />
        );
    }

    //ListView的头部view
    _renderHeaderView() {
        return (
            <Image source={require('./../../images/mine.png')} style={styles.topImageStyle}>
                <TouchableOpacity style={styles.userStyle} onPress={()=>this._login()}>
                    <Image source={require('./../../images/person.png')} style={styles.iconStyle}/>
                    <Text style={{color: '#fff', backgroundColor: 'transparent'}}>未登录的用户</Text>
                </TouchableOpacity>
            </Image>
        )
    }

    _login(){
        const {navigator} = this.props;
        if(navigator){
            navigator.push({
                component:LoginView
            })
        }
    }

    _dealWithCellClick(sectionID, rowID) {
        // alert('点击了第'+sectionID + '组中的第' + rowID + '行');
        if (sectionID == 1 && rowID == 3) {
            const {navigator} = this.props;
            if (navigator) {
                 navigator.push({
                 component:MineSetingView
                 })
            }
        }
    }
}

const styles = StyleSheet.create({
    topImageStyle: {
        width: Util.size.width,
        height: Platform.OS === 'ios' ? 600 : Util.size.width
    },
    userStyle: {
        width: 130,
        height: 130,
        position: 'absolute',
        left: (Util.size.width - 130) / 2,
        bottom: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        width: 80,
        height: 80,
        marginBottom: 5
    }
});

module.exports = Mine;


/*
 *  <MineCommonListView
 mineData={mineData}
 clickCell={(sectionID, rowID) => this._dealWithCellClick(sectionID, rowID)}
 renderHeaderView={() => this._renderHeaderView()}
 insetHeight={Platform.OS === 'ios' ? 300 : 0}
 />
 * */