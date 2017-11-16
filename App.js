/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Camera from 'react-native-camera';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    AlertIOS
} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCamera: true
        };
    }

    render() {
        if (this.state.showCamera) {
            return (
                <Camera ref="cam" style={styles.container} onBarCodeRead={this._readBarCode}>
                    <View style={styles.buttonBar}>
                       {/*  <TouchableHighlight style={styles.button} onPress={this._takePicture}>
                            <Text style={styles.buttonText}>Take</Text>
                        </TouchableHighlight> */}
                    </View>
                </Camera>
            );
        } else {
            return (
                <View></View>
            )
        }
       
    }

    _takePicture = () => {
        this.refs.cam.capture(function (err, data) {
            console.log(err, data);
        });
    }

    _readBarCode = (e) => {
        this.setState({ showCamera: false });
        AlertIOS.alert(
            "Barcode Found!",
            "Type: " + e.type + "\nData: " + e.data
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    buttonBar: {
        flexDirection: "row",
        position: "absolute",
        bottom: 25,
        right: 0,
        left: 0,
        justifyContent: "center"
    },
    button: {
        padding: 10,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#FFFFFF",
        margin: 5
    },
    buttonText: {
        color: "#000"
    }
});
