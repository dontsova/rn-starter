import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Text>Color Screen:</Text>
      <Button
        title='Add Color'
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      <FlatList
        keyExtractor={color => color}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: item }}
            ></View>
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const style = StyleSheet.create({});

export default ColorScreen;
