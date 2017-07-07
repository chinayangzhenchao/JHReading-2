/**
 * Created by me860209 on 2017/7/4.
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
import LoginView from './../Mine/LoginView'

export default class ReadingLoginView extends Component {
    render() {
        return (
            <View style={styles.container}>
                 <View style={styles.viewStyle}>
                     <Image style={styles.iconStyle} source={require('./../../images/person.png')}/>
                     <Text>未登录&nbsp;|&nbsp;</Text>
                     <TouchableOpacity onPress={()=>this._longinBtn()}>
                         <Text style={{color:'red'}}>立即登录</Text>
                     </TouchableOpacity>
                 </View>
            </View>
        );
    }

    _longinBtn(){
        const {navigator} = this.props;
        if(navigator){
            navigator.push({
                component:LoginView,
            })
        }
    }
}

const styles = StyleSheet.create({
    container:{
        width:Util.size.width,
        backgroundColor:'#fff',
        padding:20,
        paddingBottom:40
    },
    viewStyle:{
        backgroundColor:Util.viewBgColor,
        flexDirection:'row',
        padding:10,
        borderRadius:20
    },
    iconStyle:{
        width:20,
        height:20,
        marginRight:5
    }
});

module.exports = ReadingLoginView;
