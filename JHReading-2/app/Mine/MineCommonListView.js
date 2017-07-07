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
    ListView
} from 'react-native';

import MineCommonListCell from './MineCommonListCell'
import Util from './../Util/Util'

export default class MineCommonListView extends Component {
    static propTypes = {
        mineData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        cellClick: PropTypes.func,
        renderHeaderView: PropTypes.func,
        renderFooterView: PropTypes.func,
        insetHeight: PropTypes.number
    }
    static defaultProps = {
        renderHeaderView() {},
        renderFooterView() {},
        cellClick: PropTypes.func  // 点击cell
    }
    constructor(props) {
        super(props);
        // 初始状态
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };

        this.state = {
            dataSource: new ListView.DataSource({
                getRowData: getRowData,
                getSectionData: getSectionData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData, sectionID, rowID) => this._renderRow(rowData, sectionID, rowID)}
                renderSectionHeader={(sectionData) => this._renderSectionHeader(sectionData)}
                contentInset={{top: -this.props.insetHeight}}
                contentOffset={{y: this.props.insetHeight}}
                style={{backgroundColor:Util.viewBgColor}}
                renderFooter={() => this.props.renderFooterView()}
                renderHeader={() => this.props.renderHeaderView()}
            />
        )
    }

    componentDidMount() {
        // 1. 获取数据
        const dataArr = this.props.mineData.data;
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

    _renderRow(rowData, sectionID, rowID) {
        return (
            <MineCommonListCell rowData={rowData} clickCell={() => this.props.clickCell(sectionID, rowID)}/>
        )
    }

    _renderSectionHeader(sectionData) {
        return (
            <View style={[{height: sectionData.height}, styles.sectionHeaderStyle]}>
                <Text>
                    {sectionData.title}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sectionHeaderStyle: {
        flexDirection: 'row',
        paddingLeft: 8,
        alignItems: 'center',
        backgroundColor: Util.viewBgColor
    }
});

module.exports = MineCommonListView;
