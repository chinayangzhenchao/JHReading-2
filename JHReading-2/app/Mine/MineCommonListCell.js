/**
 * Created by me860209 on 2017/7/5.
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
    Switch
} from 'react-native';

export default class MineCommonListCell extends Component {

    static defaultProps = {
        clickCell() {
        }
    }
    static propTypes = {
        clickCell: PropTypes.func
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isSwitch: false
        };
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={()=>this.props.clickCell()}>
                {this._renderLeftView()}
                {this._renderRightView()}
            </TouchableOpacity>
        );
    }

    _renderLeftView() {
        const data = this.props.rowData;
        return (
            <View style={styles.leftViewStyle}>
                {data.leftIcon != '' ? <Image source={{uri: data.leftIcon}} style={styles.leftIconStyle}/> : <View/>}
                <Text style={{color: '#666'}}>{data.name}</Text>
            </View>
        )
    }

    _renderRightView() {
        const data = this.props.rowData;
        if (data.disc == 'switch') {
            return(
                <View style={styles.rightViewStyle}>
                    <Switch
                        onValueChange={()=>this.setState({isSwitch: !this.state.isSwitch})}
                        value={this.state.isSwitch}
                    />
                </View>)
        } else {
            return (
                <View style={styles.rightViewStyle}>
                    <Text style={{color: '#666'}}>{data.disc}</Text>
                    <Image source={require('./../../images/icon_shike_arrow.png')} style={styles.rightIconStyle}/>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container:{
        height:44,
        backgroundColor: '#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth: 1,
        borderBottomColor:'#ccc'
    },
    leftViewStyle:{
        flexDirection:'row',
        marginLeft:8,
        justifyContent:'center',
        alignItems:'center'
    },
    leftIconStyle: {
        height: 17,
        width: 17,
        marginRight:5
    },
    rightViewStyle:{
        flexDirection:'row',
        marginRight:8,
        justifyContent:'center',
        alignItems:'center'
    },
    rightIconStyle:{
        width: 7,
        height: 12,
        marginLeft:5
    }
});

module.exports = MineCommonListCell;
