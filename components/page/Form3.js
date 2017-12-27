import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Form3 extends Component {

  static navigationOptions = {
    header:null,
  };

  constructor(props) {
   super(props)
   this.state = {max: 5,
                 min: 1,
                 kelas: 1,
                 pns: 1,
                 honorer: 1,
                 baca: 1,
                 pasar: 1,
                 pusat: 1,
                 ruang: 1,
                 perpus: 1,
                 kantin: 1,
                 toilet: 1,
                 lap:1 }
  }
  getVal(val){
  console.warn(val);
  }
  render() {

    return (
      <View style={styles.container}>
        <ScrollView>

          <View>
          <View style={styles.teks}>
          <Text style = {styles.nama}>Yuks Tentukan Ratingnya!</Text>
          </View>

          <View style={styles.teks}>
          <Text style = {styles.nama2}>Untuk pemberian tingkat kepentingan pada kriteria menggunakan skala bilangan 1 sampai 5 dimana 5 = Sangat Penting,
          4 = Penting, 3 = Cukup, 2 = Kurang Penting, 1 = Tidak Penting</Text>
          </View>

          <Text style={styles.instructions1}>
          Siswa Keseluruhan:
          </Text>
          <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={1}
           maximumValue={5}
           value={this.state.kelas}
           onValueChange={val => this.setState({ kelas: val })}
           onSlidingComplete={ val => this.getVal(val)}
           />
          <Text style={styles.welcome1}>
          {this.state.kelas}
          </Text>
          </View>

          <View>
          <Text style={styles.instructions2}>
          Siswa Tidak Bisa Baca:
          </Text>
          <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={1}
           maximumValue={5}
           value={this.state.baca}
           onValueChange={val => this.setState({ baca: val })}
           onSlidingComplete={ val => this.getVal(val)}
          />
          <Text style={styles.welcome2}>
            {this.state.baca}
          </Text>
          </View>

          <View>
          <Text style={styles.instructions3}>
          Tenaga Pengajar PNS:
          </Text>
          <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={1}
           maximumValue={5}
           value={this.state.pns}
           onValueChange={val => this.setState({ pns: val })}
           onSlidingComplete={ val => this.getVal(val)}
            />
          <Text style={styles.welcome3}>
            {this.state.pns}
          </Text>
          </View>

          <View>
          <Text style={styles.instructions4}>
          Tenaga Pengajar Honorer:
          </Text>
          <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={1}
           maximumValue={5}
           value={this.state.honorer}
           onValueChange={val => this.setState({ honorer: val })}
           onSlidingComplete={ val => this.getVal(val)}
          />
          <Text style={styles.welcome4}>
            {this.state.honorer}
          </Text>
          </View>

          <View>
          <Text style={styles.instructions5}>
          Jarak dengan Pasar Terdekat (km):
          </Text>
          <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={1}
           maximumValue={5}
           value={this.state.pasar}
           onValueChange={val => this.setState({ pasar: val })}
           onSlidingComplete={ val => this.getVal(val)}
          />
          <Text style={styles.welcome5}>
            {this.state.pasar}
          </Text>
          </View>

          <View>
          <Text style={styles.instructions6}>
          Jarak dengan Pusat Ibukota/Kabupaten (km):
          </Text>
          <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={1}
           maximumValue={5}
           value={this.state.pusat}
           onValueChange={val => this.setState({ pusat: val })}
           onSlidingComplete={ val => this.getVal(val)}
          />
          <Text style={styles.welcome6}>
            {this.state.pusat}
          </Text>
          </View>

          <View>
          <Text style={styles.instructions7}>
          Ruangan di Sekolah:
          </Text>
          <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={1}
           maximumValue={5}
           value={this.state.ruang}
           onValueChange={val => this.setState({ ruang: val })}
           onSlidingComplete={ val => this.getVal(val)}
          />
          <Text style={styles.welcome7}>
            {this.state.ruang}
          </Text>
          </View>

          <View>
          <Text style={styles.instructions8}>
          Perpustakaan Sekolah:
          </Text>
          <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={1}
           maximumValue={5}
           value={this.state.perpus}
           onValueChange={val => this.setState({ perpus: val })}
           onSlidingComplete={ val => this.getVal(val)}
          />
          <Text style={styles.welcome8}>
            {this.state.perpus}
          </Text>
          </View>

          <View>
          <Text style={styles.instructions9}>
          Kantin Sekolah:
          </Text>
          <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={1}
           maximumValue={5}
           value={this.state.kantin}
           onValueChange={val => this.setState({ kantin: val })}
           onSlidingComplete={ val => this.getVal(val)}
          />
          <Text style={styles.welcome9}>
            {this.state.kantin}
          </Text>
          </View>

          <View>
          <Text style={styles.instructions10}>
          Toilet Sekolah:
          </Text>
          <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={1}
           maximumValue={5}
           value={this.state.toilet}
           onValueChange={val => this.setState({ toilet: val })}
           onSlidingComplete={ val => this.getVal(val)}
          />
          <Text style={styles.welcome10}>
            {this.state.toilet}
          </Text>
          </View>

          <View>
          <Text style={styles.instructions11}>
          Lapangan Olahraga Sekolah:
          </Text>
          <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={1}
           maximumValue={5}
           value={this.state.lap}
           onValueChange={val => this.setState({ lap: val })}
           onSlidingComplete={ val => this.getVal(val)}
          />
          <Text style={styles.welcome11}>
            {this.state.lap}
          </Text>
          </View>

          <View>
          <TouchableOpacity style={styles.summitButn}>
            <Text style={styles.TombolSummit}>Summit</Text>
              <Text style={{alignItems:'center'}}/>
          </TouchableOpacity>
          </View>

          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

    teks:{
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

    nama:{
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginBottom: 15,
  },

    nama2:{
    marginTop: 10,
    fontSize: 15,
    color: 'black',
    marginBottom: 30,
    padding: 10,
  },

    welcome1: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    marginBottom: 20,
    color: '#ff4000',
  },

    instructions1: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: '#ff4000',
  },

    welcome2: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    marginBottom: 20,
    color: 'green',
  },

    instructions2: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: 'green',
  },

    welcome3: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    marginBottom: 20,
    color: 'blue',
  },

    instructions3: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: 'blue',
  },

    welcome4: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    marginBottom: 20,
    color: 'red',
  },

    instructions4: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: 'red',
  },

    welcome5: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    marginBottom: 20,
    color: 'green',
  },

    instructions5: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: 'green',
  },

    welcome6: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    marginBottom: 20,
    color: 'blue',
  },

    instructions6: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: 'blue',
  },

    welcome7: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    marginBottom: 20,
    color: 'red',
  },

    instructions7: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: 'red',
  },

    welcome8: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    marginBottom: 20,
    color: 'green',
  },

    instructions8: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: 'green',
  },

    welcome9: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    marginBottom: 20,
    color: 'blue',
  },

    instructions9: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: 'blue',
  },

    welcome10: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    marginBottom: 20,
    color: 'red',
  },

    instructions10: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: 'red',
  },

    welcome11: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    marginBottom: 20,
    color: 'green',
  },

    instructions11: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: 'green',
  },

    TombolSummit: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },

    summitButn: {
    width: 360,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 27,
    marginVertical: 10,
    justifyContent: 'center',
  }
});
