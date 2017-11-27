/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text
} from 'react-native';
import * as t from 'tcomb-form-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
});

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            route: 'Login',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Username:</Text>
                <TextInput
                    placeholder="Username"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoFocus={true}
                    value={this.state.style}
                    username={styles.textField}
                    onChangeText={username => this.setState({ username })}
                />
                <Text>Password:</Text>
                <TextInput
                    style={styles.textField}
                    placeholder="Password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    autoCorrect={false}
                    value={this.state.passwore}
                    onChangeText={password => this.setState({ password })}
                />
            </View>
        );
    }
}

