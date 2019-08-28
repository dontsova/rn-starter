import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetail = props => {
  return (
    <View>
      <Image source={props.imgUri} />
      <Text>Show image of {props.title}</Text>
      <Text>Image score - {props.score}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageDetail;
