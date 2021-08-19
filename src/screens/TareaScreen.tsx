import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

export default TareaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856d6',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0a23b',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#002FA7',
  },
});
