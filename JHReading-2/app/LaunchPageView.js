/**
 * Created by xmg on 2017/7/3.
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
    Image
} from 'react-native';

import Swiper from 'react-native-swiper'
import Util from './Util/Util'
import App from './App'
import MyButton from  './Util/MyButton'
import TabbarView from './TabbarView'
const IsLaunch = false;
export default class LaunchPageView extends Component {
    render() {
        if (IsLaunch) {
            return (
                <Swiper loop={false}>
                    <View>
                        <Image source={require('./../images/slider1.png')} style={styles.imageStyle}/>
                    </View>
                    <View>
                        <Image source={require('./../images/slider2.png')} style={styles.imageStyle}>
                            <MyButton title='立即体验' btnViewStyle={styles.btnViewstyle} titleStyle={{color: 'red'}}
                                      clickBtn={() => this._toMainPage()}/>
                        </Image>
                    </View>
                </Swiper>
            )
        } else {
            return (
                <TabbarView {...this.props}/>
            )
        }

    }

    _toMainPage() {
        //跳到主页

        const {navigator} = this.props;
        if (navigator) {
            navigator.replace({
                component: TabbarView
            })
        }
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        width: Util.size.width,
        height: Util.size.height
    },

    btnViewstyle: {
        width: 120,
        borderColor: 'red',
        borderRadius: 5,
        position: 'absolute',
        left: (Util.size.width - 120) / 2,
        bottom: 100,
        backgroundColor: 'transparent'
    }
});

module.exports = LaunchPageView;
