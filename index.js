import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  AppRegistry
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
import Form3 from './components/page/Form3';
//import Petunjuk from './components/page/Petunjuk';
import Hasil1 from './components/page/Hasil1';
import Hasil2 from './components/page/Hasil2';
import Hasil3 from './components/page/Hasil3';
import Hasil4 from './components/page/Hasil4';
import Hasil5 from './components/page/Hasil5';
import Hasil6 from './components/page/Hasil6';
import Hasil7 from './components/page/Hasil7';
import Hasil8 from './components/page/Hasil8';
import Profile from './components/page/Profile';
//import Calculate from './components/page/Calculate';

//import Header from './components/page/Header';
import { StackNavigator } from 'react-navigation';


export default class Index extends Component<{}> {

static navigationOptions={
  header: null,
};

  render() {

    const { navigation } = this.props;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

      <Detilschool navigation={navigation}/>


      </View>
    );
  }
}

const Navigasi = StackNavigator ({
Detilschool4 : { screen : Detilschool4},
Hasil4 : { screen : Hasil4},
Hasil8 : { screen : Hasil8},
Hasil7 : { screen : Hasil7},
Hasil6 : { screen : Hasil6},
Hasil5 : { screen : Hasil5},

Hasil3 : { screen : Hasil3},
Hasil2 : { screen : Hasil2},
Hasil1 : { screen : Hasil1},
Dashboard2: { screen : Dashboard2},
Profile: { screen : Profile},
Form3 : { screen : Form3 },


Login : { screen : Login},
//Calculate : { screen : Calculate },

//Header : { screen : Header},












//Petunjuk : { screen : Petunjuk },


Signup : { screen : Signup},

Detilschool : { screen : Detilschool},
Detilschool2 : { screen : Detilschool2},
Detilschool3 : { screen : Detilschool3},

Detilschool5 : { screen : Detilschool5},
Detilschool6 : { screen : Detilschool6},
Detilschool7 : { screen : Detilschool7},
Detilschool8 : { screen : Detilschool8},


});

const styles = StyleSheet.create({
container : {
  flex: 1
}
});

AppRegistry.registerComponent('seavol', () => Navigasi);
