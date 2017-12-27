
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  View,
  TextInput,
  ScrollView,
  Text,
  ListView
} from 'react-native';

export default class Petunjuk extends Component<{}>{

  static navigationOptions = {
    header:null,
  };


  render() {
    return (

      <View style={styles.container}>

      <View style={styles.judul}>
            <Text style = {styles.nama}>PETUNJUK</Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>I N F O R M A S I</Text>
          </View>

          <ScrollView>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>Q: Apa sih Seavol Apps itu?</Text>
          </View>
           <View style={styles.boxDetail}>
            <Text style = {styles.informasi}>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>ALAMAT</Text>
          </View>
           <View style={styles.boxDetail}>
            <Text style = {styles.informasi}>huuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>JUMLAH SISWA (Siswa)</Text>
          </View>
           <View style={styles.boxDetail}>
            <Text style = {styles.informasi}>48 Siswa</Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>TENAGA PENGAJAR PNS (Orang)</Text>
          </View>
           <View style={styles.boxDetail}>
            <Text style = {styles.informasi}>2 Orang</Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>TENAGA PENGAJAR HONORER (Orang)</Text>
          </View>
           <View style={styles.boxDetail}>
            <Text style = {styles.informasi}>3 Orang</Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>JUMLAH SISWA TIDAK BISA BACA (Orang)</Text>
          </View>
           <View style={styles.boxDetail}>
            <Text style = {styles.informasi}>24 Orang</Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>JARAK DENGAN PASAR TERDEKAT (km)</Text>
          </View>
           <View style={styles.boxDetail}>
            <Text style = {styles.informasi}>36 km</Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>JARAK DENGAN PUSAT IBUKOTA/KABUPATEN (km)</Text>
          </View>
           <View style={styles.boxDetail}>
            <Text style = {styles.informasi}>50 km</Text>
          </View>

          <View style={styles.boxFasilitas}>
            <Text style = {styles.informasi2}>FASILITAS</Text>
          </View>

           <View style={styles.boxInform}>
            <Text style = {styles.informasi}>RUANGAN</Text>
          </View>
           <View style={styles.boxMain}>
            <Text style = {styles.Main}> 7 </Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>PERPUSTAKAAN</Text>
          </View>
           <View style={styles.boxMain}>
            <Text style = {styles.Main}> 1 </Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>KANTIN</Text>
          </View>
           <View style={styles.boxMain}>
            <Text style = {styles.Main}> Tidak ada </Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>TOILET</Text>
          </View>
           <View style={styles.boxMain}>
            <Text style = {styles.Main}> 2 </Text>
          </View>

          <View style={styles.boxInform}>
            <Text style = {styles.informasi}>LAPANGAN OLAHRAGA</Text>
          </View>
           <View style={styles.boxMain}>
            <Text style = {styles.Main}> 2 </Text>
          </View>
          </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff'
  },

    imagewrap: {
    padding: 2,
    height: 120,
    width: (Dimensions.get('window').width / 1) - 2 ,
    paddingVertical: 100,
    marginBottom:10,
    alignItems: 'center',
    justifyContent: 'center'
  },

    judul:{
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

    nama:{
      marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginBottom: 10
  },

    boxInform: {
    marginTop: 10,
    width: 370,
    height: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

    informasi:{
    color: 'white',
    fontSize: 15,
    fontWeight: '200'
  },

    boxDetail: {
    //marginBottom: 50,

    width: null,
    height: 20,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

    boxFasilitas: {
    marginTop: 10,
    width: 370,
    height: 40,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

    informasi2:{
    color: '#02ff06',
    fontSize: 15,
    fontWeight: '200'
  },

    boxMain:{
    marginBottom: 10,
    width: null,
    height: 20,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

    Main:{
    color: 'white',
    fontSize: 12,
    fontWeight: '200'
   }
});
