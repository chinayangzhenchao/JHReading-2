/**
 * Created by me860209 on 2017/7/7.
 */
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
    Image,
    TouchableOpacity
} from 'react-native';
import Util from './../Util/Util';
import FindingVideoView from  './FindingVideoView'
export default class FindingListCellThree extends Component {
    render() {
        var data = this.props.rowData;
        var video = data.video;
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.navigator.push({component: FindingVideoView, props: {video}})}>
                <Image
                    source={{uri: data.img}}
                    style={styles.imgStyle}
                    defaultSource={require('./../../images/placeholder_big.png')}
                />
                <View style={styles.bottomViewStyle}>
                    <Text style={{color: '#fff', fontSize: 16}}>{data.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 15
    },
    imgStyle: {
        width: Util.size.width,
        height: Util.size.width * 0.5
    },
    bottomViewStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: Util.size.width,
        height: 34,
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

module.exports = FindingListCellThree;
