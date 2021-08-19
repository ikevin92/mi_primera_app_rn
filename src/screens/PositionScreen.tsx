import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde }/>
      <View style={styles.cajaMorada }/>
      <View style={styles.cajaNaranja }/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 400,
    width: 350,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28c4d9',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cajaVerde: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject
  },
});

export default PositionScreen;
