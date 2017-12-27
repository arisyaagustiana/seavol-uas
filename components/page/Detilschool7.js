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

export default class Detilschool7 extends Component<{}>{

  render() {
    return (

      <View style={styles.container}>

      <View style={styles.teksSekolah}>
            <Text style = {styles.namaSekolah}>SDN 7 PEMPATAN</Text>
          </View>

    <Image style={styles.imagewrap}
          source={require('../image/sdn7pempatan.png')}/>


          <View style={styles.boxInform}>
          <Text style = {styles.informasi}>I N F O R M A S I</Text>
          </View>

          <ScrollView>

          <View style={styles.boxInform}>
          <Text style = {styles.informasi}>NAMA SEKOLAH</Text>
          </View>
          <View style={styles.boxDetail}>
          <Text style = {styles.informasi}>SDN 7 Pempatan, Karangasem Bali</Text>
          </View>

          <View style={styles.boxInform}>
          <Text style = {styles.informasi}>ALAMAT</Text>
          </View>
          <View style={styles.boxDetail}>
          <Text style = {styles.informasi}>Dusun Kubakal, Pempatan, Kec. Rendang</Text>
          </View>

          <View style={styles.boxInform}>
          <Text style = {styles.informasi}>JUMLAH SISWA KESELURUHAN</Text>
          </View>
          <View style={styles.boxDetail}>
          <Text style = {styles.informasi}>24 Siswa</Text>
          </View>

          <View style={styles.boxInform}>
          <Text style = {styles.informasi}>JUMLAH SISWA TIDAK BISA BACA</Text>
          </View>
          <View style={styles.boxDetail}>
          <Text style = {styles.informasi}>2 Orang</Text>
          </View>

          <View style={styles.boxInform}>
          <Text style = {styles.informasi}>TENAGA PENGAJAR PNS</Text>
          </View>
          <View style={styles.boxDetail}>
          <Text style = {styles.informasi}>2 Orang</Text>
          </View>

          <View style={styles.boxInform}>
          <Text style = {styles.informasi}>TENAGA PENGAJAR HONORER</Text>
          </View>
          <View style={styles.boxDetail}>
          <Text style = {styles.informasi}>1 Orang</Text>
          </View>

          <View style={styles.boxInform}>
          <Text style = {styles.informasi}>JARAK DENGAN PASAR TERDEKAT (km)</Text>
          </View>
          <View style={styles.boxDetail}>
          <Text style = {styles.informasi}>49 km</Text>
          </View>

          <View style={styles.boxInform}>
          <Text style = {styles.informasi}>JARAK DENGAN PUSAT IBUKOTA/KABUPATEN (km)</Text>
          </View>
          <View style={styles.boxDetail}>
          <Text style = {styles.informasi}>60 km</Text>
          </View>

          <View style={styles.boxFasilitas}>
          <Text style = {styles.informasi2}>FASILITAS</Text>
          </View>

          <View style={styles.boxInform}>
          <Text style = {styles.informasi}>RUANGAN</Text>
          </View>
          <View style={styles.boxMain}>
          <Text style = {styles.Main}> 5 </Text>
          </View>

          <View style={styles.boxInform}>
          <Text style = {styles.informasi}>PERPUSTAKAAN</Text>
          </View>
          <View style={styles.boxMain}>
          <Text style = {styles.Main}> 2 </Text>
          </View>

          <View style={styles.boxInform}>
          <Text style = {styles.informasi}>KANTIN</Text>
          </View>
          <View style={styles.boxMain}>
          <Text style = {styles.Main}> 1 </Text>
          </View>

          <View style={styles.boxInform}>
          <Text style = {styles.informasi}>TOILET</Text>
          </View>
          <View style={styles.boxMain}>
          <Text style = {styles.Main}> 1 </Text>
          </View>

          <View style={styles.boxInform}>
          <Text style = {styles.informasi}>LAPANGAN OLAHRAGA</Text>
          </View>
          <View style={styles.boxMain}>
          <Text style = {styles.Main}> 1 </Text>
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

    teksSekolah:{
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

    namaSekolah:{
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
    fontSize: 12,
    fontWeight: '200'
  },

    boxDetail: {
    marginBottom: 10,
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
