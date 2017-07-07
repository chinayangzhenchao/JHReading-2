/**
 * Created by xmg on 2017/7/3.
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
    TouchableOpacity
} from 'react-native';

export default class MyButton extends Component {
    static defaultProps = {
        title: '默认按钮',
        clickBtn() {},
        renderImg() {}
    };
    static propTypes = {
        title: PropTypes.string,
        titleStyle: Text.propTypes.style,
        btnViewStyle: View.propTypes.style,
        clickBtn: PropTypes.func,
        renderImg: PropTypes.func
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.defaultViewStyle, this.props.btnViewStyle]}
                onPress={() => this.props.clickBtn()}
            >
                {this.props.renderImg()}
                <Text
                    style={[styles.defaultTextStyle, this.props.titleStyle]}
                >
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    defaultViewStyle: {
        width: 100,
        height: 36,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    defaultTextStyle: {
        fontSize: 16,
        color: '#fff'
    }
});

module.exports = MyButton;
