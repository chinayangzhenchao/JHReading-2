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
    ScrollView,
    TouchableOpacity
} from 'react-native';

import  Util from './../Util/Util'
import Icon from 'react-native-vector-icons/Ionicons';

export default class ReadingBannerView extends Component {
    render() {
        return (
            <ScrollView
                style={styles.scrollViewStyle}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {this.props.bannerData.map((item, key) => {
                    return(
                        <TouchableOpacity key={key} style={styles.viewStyle} onPress={()=>alert(item.title)}>
                            <Icon name={item.icon} size={60} color="#000" />
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewStyle:{
        backgroundColor: '#fff',
        padding:20,
    },
    viewStyle:{
        marginRight:20,

        justifyContent:'center',
        alignItems:'center'
    }
});

module.exports = ReadingBannerView;
