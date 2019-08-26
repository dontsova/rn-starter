import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Slava';

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
      <Button title='Click Me' color='#841584'></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
