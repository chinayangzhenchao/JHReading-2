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
    ListView
} from 'react-native';

import ReadingNewThemeCell from './ReadingNewThemeCell'
import ReadingDetailView from './ReadingDetailView'
import Util from './../Util/Util';
export default class ReadingNewThemeListView extends Component {
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
    }

    render() {
        
        return (
            <View style={styles.container}>
                <View style={styles.topViewStyle}>
                    <Text style={{fontSize: 16}}>最新专题</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this._renderRow(rowData)}
                    contentContainerStyle={styles.listStyle}
                />
            </View>
        );
    }

    _renderRow(rowData) {
        return(
            <ReadingNewThemeCell rowData={rowData} clickCell={(url)=>this._clickCell(url)}/>
        )
    }

    componentDidMount(){

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.myReadingData)
        });
    }

    _clickCell(url){
        const {navigator} = this.props;
        if(navigator){
            navigator.push({
                component:ReadingDetailView,
                passProps:{url}
            })
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 20,
    },

    topViewStyle:{
        height:44,
        width:Util.size.width,
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:Util.minPixeWth,
    },

    listStyle:{
        // 主轴的方向为横向
        flexDirection:'row',
        flexWrap:'wrap',
        marginBottom:20
    }

});

module.exports = ReadingNewThemeListView;
