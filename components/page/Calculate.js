import React, { Component } from 'react';

import {
  View,
} from 'react-native';

export default class Calculate extends Component<{}> {

  constructor(props){
      super(props);
      this.state =({
        userCount: 8,
        subCritera: 11,
        nilai: [[]],
        NilaiInputan: [],
        gap1: [[]],
        Data: [[]],
        gapSiswaNilaiInput: [],
        gapTenagaPengajarNilaiInput: [],
        gapPasarTerdekatNilaiInput: [],
        gapPusatIbuKotaNilaiInput: [],
        gapFasilitasNilaiInput: [],
        NamaSekolah: [],
        HasilFix: [],
        FinalResult: [],
      });

  }

  ngambilNilai(){
    var nilai = [
      [48,24,2,3,36,50,5,2,1,2,1],
      [30,5,2,4,78,90,5,1,1,2,1],
      [32,12,2,3,50,75,5,2,1,1,1],
      [35,8,2,2,82,90,5,1,1,1,1],
      [54,14,2,2,20,30,5,2,1,2,1],
      [50,2,2,3,15,20,5,1,1,2,1],
      [24,2,2,1,49,60,5,2,1,1,1],
      [58,18,2,1,68,78,5,1,1,1,1]
    ];

    var NamaSekolah = ["SD 1 Pempatan","SD 2 Pempatan","SD 3 Pempatan","SD 4 Pempatan","SD 5 Pempatan","SD 6 Pempatan","SD 7 Pempatan","SD 8 Pempatan"];

    this.setState({nilai: nilai});
    this.setState({NamaSekolah: NamaSekolah});
  }

  Rentang(){
    var nilaiLagi = this.state.nilai;
    for(var i = 0; i<this.state.userCount; i++){
      for(var a = 0; a<this.state.subCritera; a++){
        if(a == 0){
          if(nilaiLagi[i][a] <= 12){
            nilaiLagi[i][a] = 1;
          }
          else if(nilaiLagi[i][a] <= 24){
            nilaiLagi[i][a] = 2;
          }
          else if(nilaiLagi[i][a] <= 36){
            nilaiLagi[i][a] =3;
          }
          else if(nilaiLagi[i][a] <=48){
            nilaiLagi[i][a] = 4;
          }
          else{
            nilaiLagi[i][a] = 5;
          }
        }

        else if(a==1){
          if(nilaiLagi[i][a] <= 12){
            nilaiLagi[i][a] = 1;
          }
          else if(nilaiLagi[i][a] <= 24){
            nilaiLagi[i][a] = 2;
          }
          else if(nilaiLagi[i][a] <= 36){
            nilaiLagi[i][a] =3;
          }
          else if(nilaiLagi[i][a] <=48){
            nilaiLagi[i][a] = 4;
          }
          else{
            nilaiLagi[i][a] = 5;
          }
        }

        else if(a==4){
          if(nilaiLagi[i][a] <= 18){
            nilaiLagi[i][a] = 1;
          }
          else if(nilaiLagi[i][a] <= 36){
            nilaiLagi[i][a] = 2;
          }
          else if(nilaiLagi[i][a] <= 54){
            nilaiLagi[i][a] =3;
          }
          else if(nilaiLagi[i][a] <= 72){
            nilaiLagi[i][a] = 4;
          }
          else{
            nilaiLagi[i][a] = 5;
          }
        }

        else if(a==5){
          if(nilaiLagi[i][a] <= 20){
            nilaiLagi[i][a] = 1;
          }
          else if(nilaiLagi[i][a] <= 40){
            nilaiLagi[i][a] = 2;
          }
          else if(nilaiLagi[i][a] <= 60){
            nilaiLagi[i][a] =3;
          }
          else if(nilaiLagi[i][a] <=80){
            nilaiLagi[i][a] = 4;
          }
          else{
            nilaiLagi[i][a] = 5;
          }
        }
      }
    }
    this.setState({nilai: nilaiLagi});
  }

  pembobotan(){
    var gap1 = this.state.gap1;
    var nilai = this.state.nilai;
    var NilaiInputan = this.state.NilaiInputan;
      for(var i = 0; i<this.state.userCount; i++){
        for(var a = 0; a<this.state.subCritera; a++){
          gap1[i][a] = nilai[i][a] - NilaiInputan[a];
          if(gap1[i][a]==0)
          {
            gap1[i][a]==5;
          }
          else if(gap1[i][a]==1)
          {
            gap1[1][a]==4.5;
          }
          else if(gap1[i][a]==-1)
          {
            gap1[i][a]==4;
          }
          else if(gap[i][a]==2)
          {
            gap1[i][a]==3.5;
          }
          else if(gap1[i][a]==-2)
          {
            gap1[i][a]==3;
          }
          else if(gap[i][a]==3)
          {
            gap1[i][a]==2.5;
          }
          else if(gap[i][a]==-3)
          {
            gap1[i][a]==2;
          }
          else if(gap[i][a]==4)
          {
            gap1[i][a]==1.5;
          }
          else
          {
            gap1[i][a]==1;
          }
        }
      }
      this.setState({gap1: gap1});
  }

  Siswa(){
      var siswaSfCf = [1,1];
      var siswaBobot = [40,60];
      var subCriteriaSiswa = 2;
      var gapSiswa;
      var gapSiswaFix;
      var gapSiswaNilaiInput;
      for(var i=0; i<this.state.userCount; i++){
        gapSiswaNilaiInput[i] = 0;
          for(var a=0; a<subCriteriaSiswa; a++){
              gapSiswa[i][a] = gap1[i][a]/siswaSfCf[a];
              gapSiswaFix[i][a] = gapSiswa[i][a] * (siswaBobot[a]/100);
              gapSiswaNilaiInput[i] = gapSiswaNilaiInput[i] + gapSiswaFix[i][a];
          }
      }
      this.setState({gapSiswaNilaiInput: gapSiswaNilaiInput});
  }

  TenagaPengajar(){
      var TenagaPengajarSfCf = [1,1];
      var TenagaPengajarBobot = [60,40];
      var subCriteriaTenagaPengajar = 2;
      var gapTenagaPengajar;
      var gapTenagaPengajarFix;
      var gapTenagaPengajarNilaiInput;
      for(var i=0; i<this.state.userCount; i++){
        gapTenagaPengajarNilaiInput[i] = 0;
        for(var a=2; a<subCriteriaTenagaPengajar+2; a++){
          gapTenagaPengajar[i][a] = gap1[i][a]/TenagaPengajarSfCf[a];
          gapTenagaPengajarFix[i][a] = gapTenagaPengajar[i][a] * (TenagaPengajarBobot[a]/100);
          gapTenagaPengajarNilaiInput[i] = gapTenagaPengajarNilaiInput[i] + gapTenagaPengajarFix[i][a];
        }
      }
      this.setState({gapTenagaPengajarNilaiInput: gapTenagaPengajarNilaiInput});
  }


  PasarTerdekat(){
      var PasarTerdekatSfCf = [1];
      var PasarTerdekatBobot = [40];
      var subCriteriaPasarTerdekat = 1;
      var gapPasarTerdekat;
      var gapPasarTerdekatFix;
      var gapPasarTerdekatNilaiInput;
      for(var i=0; i<this.state.userCount; i++){
        gapPasarTerdekatNilaiInput[i] = 0;
        for(var a=4; a<subCriteriaPasarTerdekat+4; a++){
          gapPasarTerdekat[i][a] = gap1[i][a]/PasarTerdekatSfCf[a];
          gapPasarTerdekatFix[i][a] = gapPasarTerdekat[i][a] * (PasarTerdekatBobot[a]/100);
          gapPasarTerdekatNilaiInput[i] = gapPasarTerdekatNilaiInput[i] + gapPasarTerdekatFix[i][a];
        }
      }
      this.setState({gapPasarTerdekatNilaiInput: gapPasarTerdekatNilaiInput});
  }


  PusatIbuKota(){
      var PusatIbuKotaSfCf = [1];
      var PusatIbuKotaBobot = [60];
      var subCriteriaIbukota = 1;
      var gapPusatIbuKota;
      var gapPusatIbuKotaFix;
      var gapPusatIbuKotaNilaiInput;
      for(var i=0; i<this.state.userCount; i++){
        gapPusatIbuKotaNilaiInput[i] = 0;
        for(var a=5; a<subCriteriaIbukota+5; a++){
          gapPusatIbuKota[i][a] = gap1[i][a]/PusatIbuKotaSfCf[a];
          gapPusatIbuKotaFix[i][a] = gapPusatIbuKota[i][a] * (PusatIbuKotaBobot[a]/100);
          gapPusatIbuKotaNilaiInput[i] = gapPusatIbuKotaNilaiInput[i] + gapPusatIbuKotaFix[i][a];
        }
      }
      this.setState({gapPusatIbuKotaNilaiInput: gapPusatIbuKotaNilaiInput});
  }


  Fasilitas(){
      var FasilitasSfCf = [2,2,3,3,3];
      var FasilitasBobot = [60,60,40,40,40];
      var subCriteriaFasilitas = 5;
      var gapFasilitas;
      var gapFasilitasFix;
      var gapFasilitasNilaiInput;
      for(var i=0; i<this.state.userCount; i++){
        gapFasilitasNilaiInput[i] = 0;
        for(var a=6; a<subCriteriaFasilitas+6; a++){
          gapFasilitas[i][a] = gap1[i][a]/FasilitasSfCf[a];
          gapFasilitasFix[i][a] = gapFasilitas[i][a] * (FasilitasBobot[a]/100);
          gapFasilitasNilaiInput[i] = gapFasilitasNilaiInput[i] + gapFasilitasFix[i][a];
        }
      }
      this.setState({gapFasilitasNilaiInput: gapFasilitasNilaiInput});
  }

  TransposeData(){
      var Data;
      var dataGapSiswaNilaiInput = this.state.gapSiswaNilaiInput;
      var dataGapTenagaPengajarNilaiInput = this.state.gapTenagaPengajarNilaiInput;
      var dataGapPasarTerdekatNilaiInput = this.state.gapPasarTerdekatNilaiInput;
      var dataGapPusatIbuKotaNilaiInput = this.state.gapPusatIbuKotaNilaiInput;
      var dataGapFasilitasNilaiInput = this.state.gapFasilitasNilaiInput;
      for(var i=0; i<this.state.subCritera; i++){
        for(var a=0; a<this.state.userCount; a++){
          if(i==0){
            Data[a][i] = dataGapSiswaNilaiInput[a];
          }
          else if(i==1){
            Data[a][i] = dataGapTenagaPengajarNilaiInput[a];
          }
          else if(i==2){
            Data[a][i] = dataGapPasarTerdekatNilaiInput[a];
          }
          else if(i==3){
            Data[a][i] = dataGapPusatIbuKotaNilaiInput[a];
          }
          else{
            Data[a][i] = dataGapFasilitasNilaiInput[a];
          }
        }
      }
      this.setState({Data: Data});
  }

  HasilAkhir(){
      var jumlahBobot = 5;
      var HasilTemp;
      var bobot = [30,25,10,15,20];
      var HasilFix;
      for(var i=0; i<this.state.userCount; i++){
        HasilFix[i] = 0;
        for(var a=0; a<jumlahBobot; a++){
          HasilTemp[i][a] = 1;
          HasilTemp[i][a] = Data[i][a] * bobot[a];
          HasilFix[i] = HasilFix[i] + HasilTemp[i][a];
        }
      }
      this.setState({HasilFix: HasilFix});
  }

  FindFinalResult(){
      var FinalResult;
      var dataNamaSekolah = this.state.NamaSekolah;
      var dataHasilFix = this.state.HasilFix;
      for(var i=0; i<this.state.userCount; i++){
        for(var a=0; a<2; a++){
          FinalResult[i][0] = dataNamaSekolah[i];
          FinalResult[i][1] = dataHasilFix[i];
        }
      }
      this.setState({FinalResult: FinalResult});
  }

  FinalResultSort(){
      var swapped;
      var dataFinalResult = this.state.FinalResult;
      do {
          swapped = false;
          for (var i=0; i < 8-1; i++) {
              if (dataFinalResult[i][1] > dataFinalResult[i+1][1]) {
                  var tempPoint = dataFinalResult[i][1];
                  var tempSekolah = dataFinalResult[i][0];
                  dataFinalResult[i][1] = dataFinalResult[i+1][1]
                  dataFinalResult[i+1][1] = tempPoint;
                  dataFinalResult[i][0] = dataFinalResult[i+1][0]
                  dataFinalResult[i+1][0] = tempSekolah;
                  swapped = true;
              }
          }
      } while (swapped);

      this.setState({FinalResult: dataFinalResult});
  }

  async panggil(){
    await this.ngambilNilai()
    await this.Rentang();
    await this.pembobotan();
    await this.pembobotan();
    await this.Siswa();
    await this.TenagaPengajar();
    await this.PasarTerdekat();
    await this.PusatIbuKota();
    await this.Fasilitas();
    await this.TransposeData();
    await this.HasilAkhir();
    await this.FindFinalResult();
    await this.FinalResultSort();
    await alert(this.state.FinalResult);
  }

  componentDidMount() {
    this.panggil();
  }

  render() {

    return (
      <View style={styles.container}>
      <View style={styles.container3}>

         <Image style={styles.logo}
          source={require('../image/Logo.png')}/>
            <Text style={styles.logoText}>{this.state.FinalResult}</Text>
            <Text style={styles.logoText}>School Teaching Volunter</Text>
      </View>
      <View style={styles.container2}>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },

  cobaInput: {
    width:300,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },

  KlikLogin: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center'
  },
  loginButn: {
    width: 150,
    height: 40,
    backgroundColor: 'grey',
    borderRadius: 27,
    marginVertical: 10,
    justifyContent: 'center'
  },

  daftar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'green'
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 30
  },

  logoText: {
    fontSize: 18,
    color:'grey',
    marginVertical:5
  },

  logo:{
    width: 130,
    height: 140
  }

});
