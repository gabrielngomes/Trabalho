import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import api from '../../services/api'

export default function Home() {

  const [cep, setCep] = useState()
  const [rua, setRua] = useState()
  const [bairro, setBairro] = useState()
  const [cidade, setCidade] = useState()
  const [estado, setEstado] = useState()

  const consultaCep = async (cep) => {
    const response = await api.get('/' + cep + '/json/');
    setRua(response.data.logradouro)
    setBairro(response.data.bairro)
    setCidade(response.data.localidade)
    setEstado(response.data.uf)
  }

  return(
    <View style={styles.container}>
      <TextInput
      style={styles.cep}
      value={cep}
      placeholder='CEP'
      onChangeText={(texto) => setCep(texto)}
      underlineColorAndroid="transparent"
      keyboardType='numeric'
      />
      <Button title="Consultar Cep" onPress={() => consultaCep(cep)} />

      <TextInput
      style={styles.cep}
      value={rua}
      placeholder='Rua'
      onChangeText={(texto) => setRua(texto)}
      underlineColorAndroid="transparent"
      keyboardType='numeric'
      />
      
      <TextInput
      style={styles.cep}
      value={bairro}
      placeholder='Bairro'
      onChangeText={(texto) => setBairro(texto)}
      underlineColorAndroid="transparent"
      keyboardType='numeric'
      />

      <TextInput
      style={styles.cep}
      value={cidade}
      placeholder='Cidade'
      onChangeText={(texto) => setCidade(texto)}
      underlineColorAndroid="transparent"
      keyboardType='numeric'
      />

      <TextInput
      style={styles.cep}
      value={estado}
      placeholder='Estado'
      onChangeText={(texto) => setEstado(texto)}
      underlineColorAndroid="transparent"
      keyboardType='numeric'
      />


    </View>    
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 60,
    alignItems: 'center'
  },

  cep:{
    width: 280,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  }
});

