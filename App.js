/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import Signup from './components/page/Signup';
import Login from './components/page/Login';
import Dashboard2 from './components/page/Dashboard2';
import Detilschool from './components/page/Detilschool';
import Detilschool2 from './components/page/Detilschool2';
import Detilschool3 from './components/page/Detilschool3';
import Detilschool4 from './components/page/Detilschool4';
import Detilschool5 from './components/page/Detilschool5';
import Detilschool6 from './components/page/Detilschool6';
import Detilschool7 from './components/page/Detilschool7';
import Detilschool8 from './components/page/Detilschool8';
import Halamanprofil from './components/page/Halamanprofil';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
       <Dashboard2/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'white'
  }

});
