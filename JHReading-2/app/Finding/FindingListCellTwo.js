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
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

import Util from './../Util/Util';
import ReadingDetailView from './../Reading/ReadingDetailView'
export default class FindingListCellTwo extends Component {
    render() {
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.container}
            >
                {/*返回子组件*/}
                {this.props.rowData.coneten.map((item,key)=>{
                    <TouchableOpacity key={index} onPress={() => self.props.navigator.push({component: ReadingDetailView, props: item.src})}>
                        <Image
                            source={{uri: item.img}}
                            style={styles.imgStyle}
                            defaultSource={require('./../../images/placeholder_big.png')}
                        />
                    </TouchableOpacity>
                })}
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10
    },
    imgStyle: {
        width: Util.size.width * 0.6,
        height: Util.size.width * 0.3,
        borderRadius: 5,
        marginRight: 8
    }
});

module.exports = FindingListCellTwo;
