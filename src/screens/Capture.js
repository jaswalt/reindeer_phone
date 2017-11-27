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
    AlertIOS,
    AsyncStorage,
    Vibration,
    ImageBackground,
    Alert
} from 'react-native';
import jwtDecode from 'jwt-decode';


export default class Capture extends Component {
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
                <ImageBackground source={require('./gift.jpeg')} style={styles.container} onLayout={this._goBack}>
                    
                </ImageBackground>
            )
        }

    }

    _readBarCode = async (e) => {
        this.setState({
            showCamera: false
        });
        try {
            const token = await AsyncStorage.getItem("@Reindeer:token");
            const profile = jwtDecode(token);
            const url = `http://192.168.0.16:8000/api/v1/users/${profile.user_id}/gifts/`;

            await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    "Authorization": "JWT " + token,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    type: e.type,
                    number: e.data
                })
            });
            Vibration.vibrate()
        } catch (e) {
            console.log(e)
        } 
    }

    _goBack = () => {
        Alert.alert(
            'Sweet!',
            'That gift has been received and is being processed',
            [
                { text: 'Capture Another', onPress: () => this.setState({showCamera: true}) },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
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
