import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title='Increment'
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title='Decrement'
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text style={style.counter}>Current count: {counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    width: 50
  },
  counter: {
    fontSize: 20
  }
});

export default CounterScreen;
