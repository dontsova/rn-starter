import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title='Go to Component Demo'
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title='Go to Image Screen Demo'
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title='Go to Counter Demo'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Go to Add Color Demo'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='Go to Color Square Demo'
        onPress={() => navigation.navigate('Square')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
