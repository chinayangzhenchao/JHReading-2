/**
 * Created by xmg on 2017/7/2.
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
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Finding from './Finding/Finding';
import Mine from './Mine/Mine';
import Park from './Park/Park';
import Reading from './Reading/Reading';

export default class TabbarView extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: 'firstVC'
        };
    }

    render() {
        return (
            <TabNavigator>
                {this._createTabbarItem('firstVC', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', '畅阅')}
                {this._createTabbarItem('secondVC', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', '公园')}
                {this._createTabbarItem('threeVC', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', '发现')}
                {this._createTabbarItem('fourVC', 'icon_tabbar_mine', 'icon_tabbar_misc_selected', '我的')}
            </TabNavigator>
        );
    }

    _createTabbarItem(selectedTab, icon, selectedIcon, title) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                selectedTitleStyle={styles.titleStyle}
                renderIcon={() => <Image source={{uri: icon}} style={styles.tabIconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri: selectedIcon}} style={styles.tabIconStyle}/>}
                /* badgeText="1"*/
                onPress={() => this.setState({selectedTab: selectedTab})}>
                {this._renderComponent(selectedTab)}
            </TabNavigator.Item>
        )
    }

    _renderComponent(selectedTab) {
        if (selectedTab === 'firstVC') {
            return <Reading {...this.props}/>
        } else if (selectedTab === 'secondVC') {
            return <Park {...this.props}/>
        } else if (selectedTab === 'threeVC') {
            return <Finding {...this.props}/>
        } else if (selectedTab === 'fourVC') {
            return <Mine {...this.props}/>
        }
    }
}

const styles = StyleSheet.create({
    tabIconStyle: {
        width: 26,
        height: 26
    },
    titleStyle: {
        color: 'rgba(62,184,175,1)'
    }
});

module.exports = TabbarView;
