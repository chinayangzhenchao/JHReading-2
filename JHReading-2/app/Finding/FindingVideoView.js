/**
 * Created by me860209 on 2017/7/7.
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

import Video from 'react-native-video';

export default class FindingVideoView extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <Video source={{uri: this.props.video}}   // Can be a URL or a local file.
                       ref={(ref) => {
                           this.player = ref
                       }}                                      // Store reference
                       rate={1.0}                              // 0 is paused, 1 is normal.
                       volume={3.0}                            // 0 is muted, 1 is normal.
                       muted={false}                           // Mutes the audio entirely.
                       paused={false}                          // Pauses playback entirely.
                       resizeMode="contain"                      // Fill the whole screen at aspect ratio.*
                       repeat={true}                           // Repeat forever.
                       playInBackground={true}                // Audio continues to play when app entering background.
                       playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                       ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                       progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                       onLoadStart={this.loadStart}            // Callback when video starts to load
                       onLoad={this.setDuration}               // Callback when video loads
                       onProgress={this.setTime}               // Callback every ~250ms with currentTime
                       onEnd={this.onEnd}                      // Callback when playback finishes
                       onError={this.videoError}               // Callback when video cannot be loaded
                       onBuffer={this.onBuffer}                // Callback when remote video is buffering
                       onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                       style={styles.backgroundVideo} />
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: 20,
                        left: 20
                    }}
                    onPress={() => this.props.navigator.pop()}
                >
                    <Image source={{uri: 'tnwifi_back_black'}} style={styles.btnStyle}/>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    btnStyle: {
        width: 35,
        height: 35
    }
});

module.exports = FindingVideoView;