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
    ListView
} from 'react-native';

import CommonNavigation from './../Util/CommonNavigation'
import ReadingThemeCell from  './ReadingThemeCell'
import ReadingDetailView from './ReadingDetailView'
import Util from './../Util/Util'
export default class ReadingThemeListView extends Component {
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        };
    }

    render() {

        return (
            <View style={styles.container}>
                <CommonNavigation
                    leftIcon='btn_backitem'
                    centerTitle={this.props.title + '专题'}
                    clickLeftBtn={()=>this.props.navigator.pop()}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData)=>this._renderRow(rowData)}
                    style={{backgroundColor:Util.viewBgColor}}
                />
            </View>
        );
    }

    componentDidMount(){
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(this.props.listDataArr)
        })
    }

    _renderRow(rowData){
        return(
            <ReadingThemeCell rowData={rowData} clickCell={(url)=>this._clickCell(url)}/>
        )
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
    
});

module.exports = ReadingThemeListView;
