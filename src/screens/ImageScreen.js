import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        imgUri={require('../../assets/forest.jpg')}
        score={9}
      />
      <ImageDetail
        title='Beach'
        imgUri={require('../../assets/beach.jpg')}
        score={6}
      />
      <ImageDetail
        title='Mountain'
        imgUri={require('../../assets/mountain.jpg')}
        score={-1}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
