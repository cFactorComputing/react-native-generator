// @flow
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const add = (num1: number, num2: number): number => num1 + num2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const XX_PROJECT_NAME_XX = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
        Welcome to React Native!
    </Text>
    <Text style={styles.instructions}>
        To get started, edit index.ios.js
    </Text>
    <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu Testing
    </Text>
    <Text>{add(12, 12)}</Text>
  </View>
);

export default XX_PROJECT_NAME_XX;

AppRegistry.registerComponent('XX_PROJECT_NAME_XX', () => XX_PROJECT_NAME_XX);
