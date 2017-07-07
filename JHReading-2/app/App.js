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
    View
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components'
import TabbarView from './TabbarView'
import LaunchPageView from './LaunchPageView'
export default class App extends Component {
    render() {
        return (
            <Navigator
                style={{flex:1}}
                initialRoute={{name:'LaunchPageView',component:LaunchPageView,index:0}}
                configureScene={()=> {return Navigator.SceneConfigs.FloatFromRight;}}
                renderScene={(route,navigator) =>{
              const Component = route.component;
              return (
              <View style={{flex:1}}>
                <Component navigator={navigator} route={route} {...route.passProps}/>
              </View>
               );
             }}
            />
        );
    }
}
module.exports = App;
