/**
 * Created by me860209 on 2017/7/7.
 */
/**
 * Created by xmg on 2017/7/2.
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
    ListView
} from 'react-native';

import FindingListCellOne from './FindingListCellOne'
import  FindingListCellTwo from './ FindingListCellTwo'
import  FindingListCellThree from './FindingListCellThree'

export default class FindingListView extends Component {
    static defaultProps = {
        findData: []
    };
    static propTypes = {
        findData: PropTypes.array
    };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        const getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID]
        }

        const getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID]
        }

        this.state = {
            dataSource: new ListView.DataSource({
                getRowData: getRowData,
                getSectionData: getSectionData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                _sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this._renderRow(rowData)}
                renderSectionHeader={(sectionData)=>this._renderSectionHeader(sectionData)}
            />
        );
    }

    _renderRow(rowData) {
        if (rowData.type == 0) {
            return (
                <FindingListCellOne rowData={rowData}/>
            )
        } else if (rowData.type == 1) {
            return (
                <FindingListCellTwo rowData={rowData}/>
            )
        } else if (rowData.type == 2) {
            return (
                <FindingListCellThree rowData={rowData}/>
            )
        } else {
            return (
                <View/>
            )
        }
    }

    _renderSectionHeader(sectionData){
        if(sectionData.sType==1){
            return (
                <FindingListCellOne rowData={sectionData}/>
            )
        }else {
            return <View style={{backgroundColor:'#e8e8e8', marginTop:sectionData.height}}/>
        }
    }

    componentDidMount() {
        // 1. 获取数据
        const dataArr = findData.data;
        // 2. 定义常量
        var dataBlob = {}, sectionIDs = [], rowIDs = [], rows = [];
        // 3. 遍历
        dataArr.forEach((value, index) => {
            // 3.1 放入组号
            sectionIDs.push(index);
            // 3.2 放入组的内容
            dataBlob[index] = value.sData;
            // 3.3 取出组中行的数据
            rows = value.sData.rData;
            rowIDs[index] = [];
            rows.forEach((item, i) => {
                // 3.4 放入行号
                rowIDs[index].push(i);
                // 3.5 放入行的内容
                dataBlob[index + ':' + i] = item
            })
        })

        // 4. 更新状态机
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        })
    }
}

const styles = StyleSheet.create({});

module.exports = FindingListView;
