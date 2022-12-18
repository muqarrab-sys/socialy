import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';

const AppImage: React.FC<FastImageProps> = ({ style, ...rest }) => {
  return <FastImage style={[styles.image, style]} {...rest} />;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default AppImage;
