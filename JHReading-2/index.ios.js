/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import App from './app/App'
import LaunchPageView from './app/LaunchPageView'
export default class JHReading extends Component {
    render() {
        return (
            <App/>
        );
    }
}

AppRegistry.registerComponent('JHReading', () => JHReading);
