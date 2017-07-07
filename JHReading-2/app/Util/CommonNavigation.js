/**
 * Created by xmg on 2017/7/2.
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

import Util from './Util';

export default class CommonNavigation extends Component {
    static defaultProps = {
        leftTitle: '',
        leftIcon: '',
        centerTitle: '',
        centerIcon: '',
        rightTitle: '',
        rightIcon: '',
        clickLeftBtn() {
        },
        clickRightBtn() {
        }

    };
    static propTypes = {
        leftTitle: PropTypes.string,
        leftIcon: PropTypes.string,
        centerTitle: PropTypes.string,
        centerIcon: PropTypes.string,
        rightTitle: PropTypes.string,
        rightIcon: PropTypes.string,
        clickLeftBtn: PropTypes.func,
    };

    render() {
        return (
            <View style={styles.container}>
                {this._renderLeftView()}
                {this._renderCenterView()}
                {this._renderRightView()}
            </View>
        );
    }

    _renderLeftView() {
        if (this.props.leftIcon) {
            if (this.props.leftTitle) {//有图片和文字
                return (
                    <TouchableOpacity style={styles.leftViewStyle} onPress={() => this.props.clickLeftBtn()}>
                        <Image source={{uri: this.props.leftIcon}} style={styles.iconStyle}/>
                        <Text style={styles.textStyle}>{this.props.leftTitle}</Text>
                    </TouchableOpacity>
                )
            } else {//只有图片
                return (
                    <TouchableOpacity style={styles.leftViewStyle} onPress={() => this.props.clickLeftBtn()}>
                        <Image source={{uri: this.props.leftIcon}} style={styles.iconStyle}/>
                    </TouchableOpacity>
                )
            }
        } else if (this.props.leftTitle) {//只有文字
            return (
                <View style={styles.leftViewStyle}>
                    <Text style={styles.textStyle}>{this.props.leftTitle}</Text>
                </View>
            )
        } else {//图片和文字都没有
            return (
                <View style={styles.leftViewStyle}/>
            )
        }
    }

    _renderCenterView() {
        if (this.props.centerIcon) {
            if (this.props.centerTitle) {//有图片和文字
                return (
                    <TouchableOpacity style={styles.centerViewStyle}>
                        <Text style={styles.centerTextStyle}>{this.props.centerTitle}</Text>
                        <Image source={{uri: this.props.centerIcon}} style={styles.centerIconStyle}/>
                    </TouchableOpacity>
                )
            } else {
                return (//只有图片
                    <TouchableOpacity style={styles.centerViewStyle}>
                        <Image source={{uri: this.props.centerIcon}} style={styles.centerIconStyle}/>
                    </TouchableOpacity>
                )
            }
        } else if (this.props.centerTitle) {//只有文字
            return (
                <View style={styles.centerViewStyle}>
                    <Text style={styles.centerTextStyle}>{this.props.centerTitle}</Text>
                </View>
            )
        } else {//图片和文字都没有
            return (
                <View/>
            )
        }
    }

    _renderRightView() {
        if (this.props.rightIcon) {
            if (this.props.rightTitle) {//有图片和文字
                return (
                    <TouchableOpacity style={styles.rightViewStyle} onPress={() => this.props.clickRightBtn()}>
                        <Text style={styles.textStyle}>{this.props.rightTitle}</Text>
                        <Image source={{uri: this.props.rightIcon}} style={styles.iconStyle}/>
                    </TouchableOpacity>
                )
            } else {//只有图片
                return (
                    <TouchableOpacity style={styles.rightViewStyle} onPress={() => this.props.clickRightBtn()}>
                        <Image source={{uri: this.props.rightIcon}} style={styles.iconStyle}/>
                    </TouchableOpacity>
                )
            }
        } else if (this.props.rightTitle) {//只有文字
            return (
                <View style={styles.rightViewStyle}>
                    <Text style={styles.textStyle}>{this.props.rightTitle}</Text>
                </View>
            )
        } else {//图片和文字都没有
            return (
                <View style={styles.rightViewStyle}/>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: Util.size.width,
        height: Platform.OS === 'ios' ? 64 : 44,
        flexDirection: 'row',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        paddingLeft: 10,
        paddingRight: 10
    },
    leftViewStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightViewStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    centerViewStyle: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyle: {
        width: 24,
        height: 24
    },
    centerIconStyle:{
        width: 54,
        height: 37
    },
    textStyle: {
        color: '#ccc',
        fontSize: 14
    },
    centerTextStyle: {
        color: '#000',
        fontSize: 18
    }

});

module
    .exports = CommonNavigation;
