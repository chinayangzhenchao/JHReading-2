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
    TouchableOpacity
} from 'react-native';
import CommonNavigation from './../Util/CommonNavigation'
import  Util from './../Util/Util'
export default class Finding extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CommonNavigation
                    leftIcon='btn_backitem'
                    leftTitle='返回'
                    rightIcon="btn_backitem"
                    rightTitle="idfd"
                    centerTitle="首页"
                    clickLeftBtn={()=>this._clickBtn()}
                />
            </View>
        )
            ;
    }

    _clickBtn() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Util.viewBgColor
    }
});

module.exports = Finding;
