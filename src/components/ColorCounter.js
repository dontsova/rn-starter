import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color, counter, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>
        {color}: {counter}
      </Text>
      <Button title={`Increase ${color}`} onPress={onIncrease} />
      <Button title={`Decrease ${color}`} onPress={onDecrease} />
    </View>
  );
};

const style = StyleSheet.create({});

export default ColorCounter;
