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
    Image,
    TouchableOpacity
} from 'react-native';

export default class ReadingThemeCell extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.rowStyle}
                              onPress={()=>this.props.clickCell(this.props.rowData.article_link)}>
                <Image source={{uri: this.props.rowData.img_url}} style={styles.imageStyle}/>
                <View style={styles.innerViewStyle}>
                    <Text style={{color:'red', fontSize:16}} numberOfLines={2}>{this.props.rowData.title}</Text>
                    <Text style={{color:'gray', fontSize:13}}>{this.props.rowData.author}</Text>
                </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    rowStyle: {
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row',
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 1
    },
    imageStyle: {
        width: 120,
        height: 90,
        marginRight: 10
    },
    innerViewStyle: {
        justifyContent: 'space-between',
        flex: 1
    }
});

module.exports = ReadingThemeCell;
