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
    ScrollView,
    Text,
    Button,
    AsyncStorage,
    Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
    },
    textField: {
        height: 70,
    },
});

const navigateAction = NavigationActions.navigate({
    routeName: 'Capture',
    params: {},
})

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
                    value={this.state.username}
                    style={styles.textField}
                    onChangeText={username => this.setState({ username })}
                />
                <Text>Password:</Text>
                <TextInput
                    style={styles.textField}
                    placeholder="Password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    autoCorrect={false}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <Button
                    title="Login"
                    color="#841584"
                    onPress={this._transmitForm}
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }

    _transmitForm = async(e) => {
        e.preventDefault();

        try {
            let resp = await fetch('http://192.168.0.16:8000/api-token-auth/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            });

            resp = await resp.json();
            if (resp.token) {
                console.log('setting token: ' + resp.token)
                await AsyncStorage.setItem("@Reindeer:token", resp.token)
                this.props.navigation.dispatch(navigateAction)
            } else {
                Alert.alert('Wrong Credentials', 'Username or password are invalid, please try again.')
            }
        } catch (e) {
        }
    }
}

