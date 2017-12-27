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
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import Drawer from 'react-native-drawer';
import { Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Switch, Title, Button, Thumbnail} from 'native-base';
var{width,height}=Dimensions.get('window');
import { StackNavigator }  from 'react-navigation';

export default class Dashboard2 extends Component<{}> {

  static navigationOptions={
    header:null,
  };

  closeControlPanel = () => {
     this._drawer.close();
   };
   openControlPanel = () => {
     this._drawer.open();
   };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Drawer
          type="overlay"
          ref={(ref) => this._drawer = ref}
          content={

            <View style={styles.drawerr}>
            <Header style={{height:150, alignItems:'center', justifyContent:'center'}}>
            <View>
              <Image style={styles.fotoprofil} source={require('./../image/icha.jpg')}/>

            <Title style={{marginRight:119, fontSize: 15}}>Putu Arisya</Title>
            <Title style={{marginRight:70, fontSize: 12}}>putuarisyaa@gmail.com</Title>
            </View>
            </Header>

            <List>
            <ListItem>
            <Button style={styles.tombolDrawer} onPress={() => navigate('Profile')}>
            <Icon name="person" style={{height: 20, width: 20}}/>
            </Button>
            <Text>Profile</Text>
            </ListItem>

            <ListItem>
            <Button style={styles.tombolDrawer} onPress={() => navigate('Dashboard2')}>
            <Icon name="school" style={{height: 20, width: 20}}/>
            </Button>
            <Text>Detail Sekolah</Text>
            </ListItem>

            <ListItem>
            <Button style={styles.tombolDrawer} onPress={() => navigate('Form3')}>
            <Icon name="star"/>
            </Button>
            <Text>Rekomendasi</Text>
            </ListItem>

            <ListItem>
            <Button style={styles.tombolDrawer} onPress={() => navigate('Login')}>
            <Icon name="exit"/>
            </Button>
            <Text>Log Out</Text>
            </ListItem>
        </List>
      </View>
          }
      tapToClose={true}
      openDrawerOffset={0.2}
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      styles={drawerStyles}
      tweenHandler={(ratio) => ({
      main: { opacity:(2-ratio)/2 }
  })}
>

        <View style={styles.headerr}>
        <Container>
        <Header>
        <TouchableOpacity style={{marginRight: 120,  backgroundColor: 'transparent'}} onPress={()=>this.openControlPanel()}>
        <Icon name='menu' />
        </TouchableOpacity>
        <Body>
        <Title>Utama</Title>
        </Body>
        <Right/>
        </Header>
        </Container>
        </View>

              <View style={styles.container}>
              <TextInput style={styles.teksCari}
              placeholder='Cari Sekolah'
              underlineColorAndroid='black'/>
              </View>

              <ScrollView>
              <View style ={styles.photoGrid}>
              <TouchableOpacity style={styles.photoWrap} onPress={()=> navigate('Detilschool')}>
              <Text style={styles.teksGambar}>SDN 1 Pempatan</Text>
              <Image style={styles.photo} source={require('./../image/sdn1pempatan.png')}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.photoWrap} onPress={()=> navigate('Detilschool2')}>
              <Text style={styles.teksGambar}>SDN 2 Pempatan</Text>
              <Image style={styles.photo} source={require('./../image/sdn2pempatan.png')}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.photoWrap} onPress={()=> navigate('Detilschool3')}>
              <Text style={styles.teksGambar}>SDN 3 Pempatan</Text>
              <Image style={styles.photo} source={require('./../image/sdn3pempatan.png')}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.photoWrap} onPress={()=> navigate('Detilschool4')}>
              <Text style={styles.teksGambar}>SDN 4 Pempatan</Text>
              <Image style={styles.photo} source={require('./../image/sdn4pempatan.png')}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.photoWrap} onPress={()=> navigate('Detilschool5')}>
              <Text style={styles.teksGambar}>SDN 5 Pempatan</Text>
              <Image style={styles.photo} source={require('./../image/sdn5pempatan.png')}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.photoWrap} onPress={()=> navigate('Detilschool6')}>
              <Text style={styles.teksGambar}>SDN 6 Pempatan</Text>
              <Image style={styles.photo} source={require('./../image/sdn6pempatan.png')}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.photoWrap} onPress={()=> navigate('Detilschool7')}>
              <Text style={styles.teksGambar}>SDN 7 Pempatan</Text>
              <Image style={styles.photo} source={require('./../image/sdn7pempatan.png')}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.photoWrap} onPress={()=> navigate('Detilschool8')}>
              <Text style={styles.teksGambar}>SDN 8 Pempatan</Text>
              <Image style={styles.photo} source={require('./../image/sdn8pempatan.png')}/>
              </TouchableOpacity>
              </View>
              </ScrollView>
        </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  tengah:{
    alignItems:'center',
    justifyContent: 'center',
    textAlign:'right'
  },

  headerr:{
    paddingBottom: 50
  },

  drawerr:{
    height: '100%',
    width: '90%',
    backgroundColor: 'white'
  },

  fotoprofil:{
    height: 50,
    width: 50,
    borderRadius: 50
  },

  tombolDrawer: {
  margin: 5,
  height: 50,
  width: 50
  },

  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  photoWrap:{
    margin: 2,
    paddingVertical: 3,
    height: 120,
    width: (Dimensions.get('window').width)/ 2 - 4
  },

  photo:{
    flex: 1,
    height:null,
    width: null,
    alignSelf: 'stretch'
  },

  teksGambar:{
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'cyan',
    color: 'black'
  },

  teksCari:{
    fontSize: 20,
    textAlign: 'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    color: 'black'
  }
});


const drawerStyles = {
  drawer: {shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}
