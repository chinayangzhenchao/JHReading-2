/**
 * Created by me860209 on 2017/7/4.
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
    TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper'
import Util from './../Util/Util';
import ReadingDetailView from './ReadingDetailView'

export default class ReadingTopView extends Component {
    static defaultProps = {
        topData: []
    }
    static propTypes = {
        topData: PropTypes.array
    }

    render() {
        return (
            <Swiper
                height={180}
                showsPagination={true}
            >
                {this.props.topData.map((item, key) => {
                    return (
                        <TouchableOpacity key={key} onPress={() => this._pushToDetail(item.url)}>
                            <Image source={{uri: item.image}} style={styles.imgStyle}/>
                        </TouchableOpacity>
                    )
                })}
            </Swiper>
        );
    }

    /**
     * 跳转到文章详情页
     * @private
     */
    _pushToDetail(url) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                component: ReadingDetailView,
                passProps: {url}
            })
        }
    }
}

const styles = StyleSheet.create({
    imgStyle: {
        width: Util.size.width,
        height: 180,
    }
});

module.exports = ReadingTopView;
