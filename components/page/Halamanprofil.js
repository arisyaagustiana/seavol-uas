import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image
} from 'react-native';

import Profile from './components/page/Profile';

export default class Halamanprofil extends Component {

  render() {
    return (
        <View style={style.container}>
        <Header/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
    }
});
