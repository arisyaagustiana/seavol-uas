import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native';
import {
  Container,
  Content,
  Thumbnail,
  List,
  ListItem,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Footer,
  FooterTab,
  Header } from 'native-base';

import { StackNavigator } from "react-navigation";

export default class Profile extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } =this.props.navigation;
    return (
      <View style={styles.container}>
        <Container>
          <Header>
            <Body>
              <Title>Profile</Title>
            </Body>
          </Header>

          <ImageBackground style={styles.headerBackground} source={require('../image/sekolah.png')}>
            <View style={styles.header}>
              <View style={styles.profilepicWrap}>
                <Image style={styles.profilepic} source={require('../image/icha.jpg')} />
              </View>
              <Text style={styles.name}>Arisya Agustiana</Text>
              <Text style={styles.pos}>- Pendidikan -</Text>
            </View>
          </ImageBackground>

          <ScrollView>
            <View style={styles.photoGrid}>
            <Content>
            <List>
              <ListItem>
                <Body>
                  <Text style={styles.titleText} >Nama</Text>
                  <Text note style={styles.noteText} >Ni Putu Arisya Agustiana</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name='menu' />
                  </Button>
                </Right>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={styles.titleText} >Username</Text>
                  <Text note style={styles.noteText} >Icha</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name='menu' />
                  </Button>
                </Right>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={styles.titleText} >Email</Text>
                  <Text note style={styles.noteText} >putuarisyaa@gmail.com</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name='menu' />
                  </Button>
                </Right>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={styles.titleText} >Fakultas</Text>
                  <Text note style={styles.noteText} >Fakultas MIPA</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name='menu' />
                  </Button>
                </Right>
              </ListItem>
            </List>
            </Content>
            </View>
          </ScrollView>
      </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#ffffff',
  flex: 1,
 },

  headerBackground: {
  flex: 1,
    width: null,
    alignSelf: 'stretch'
 },

    header: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0, 0.5)'
  },

    profilepicWrap: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0, 0.4)',
    borderWidth: 16
  },

    profilepic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    fontWeight: 'bold'
  },

    name: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },

    pos: {
    fontSize: 14,
    color: 'black',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },

  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  titleText: {
    fontWeight: 'bold',
    color: '#000000',
  },

  noteText: {
    fontStyle: 'italic',
    color: '#2c3e50',
  }
});
