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
    TouchableOpacity,
    Image
} from 'react-native';


import Util from './../Util/Util';

export default class ReadingNewThemeCell extends Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.cellStyle}
                onPress={()=>this.props.clickCell(this.props.rowData.aticleSrc)}
            >
                <Image
                    source={{uri: this.props.rowData.img}}
                    style={styles.imageStyle}
                    defaultSource={require('./../../images/placeholder_big.png')}
                />
                <Text numberOfLines={2} style={{lineHeight: 18}}>{this.props.rowData.title}</Text>
                <Text style={{color: '#666'}}>{this.props.rowData.intro}</Text>
            </TouchableOpacity>
        );
    }
}

const col = 3, cellW = 100, cellH = 190;
const marginX = (Util.size.width - col * cellW) / (col + 1);
const marginY = 20;

const styles = StyleSheet.create({
    cellStyle: {
        width: cellW,
        height: cellH,
        marginLeft: marginX,
        marginTop: marginY,
        justifyContent: 'space-between'
    },
    imageStyle: {
        width: cellW,
        height: cellW + 20
    }
});

module.exports = ReadingNewThemeCell;
