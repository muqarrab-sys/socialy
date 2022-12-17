import React from 'react';
import { Text as RNText, TextProps, StyleSheet, TextStyle, StyleProp } from 'react-native';
import { isArray } from 'lodash';
import { useTheme } from 'hooks';
import { isAndroid } from 'helpers/common';

const Text: React.FC<TextProps> = props => {
  const { theme } = useTheme();

  const fixedStyles = isAndroid() ? fixFontWeightForAndroid(props.style) : props.style;

  return (
    <RNText {...props} style={[styles.font, { color: theme.colors.text }, fixedStyles]}>
      {props.children}
    </RNText>
  );
};

// Map font weights to font names
const fontWeights = {
  100: 'SF UI Display Ultralight',
  200: 'SF UI Display Thin',
  300: 'SF UI Display Light',
  400: 'SF UI Display Regular',
  500: 'SF UI Display Medium',
  600: 'SF UI Display Semibold',
  700: 'SF UI Display Bold',
  800: 'SF UI Display Heavy',
  900: 'SF UI Display Black',
  bold: 'SF UI Display Bold',
  normal: 'SF UI Display Regular',
};

const styles = StyleSheet.create({
  font: {
    fontFamily: fontWeights[400],
    fontSize: 14,
  },
});

const fixFontWeightForAndroid = (stylesObject: StyleProp<TextStyle>) => {
  let obj: TextStyle = isArray(stylesObject) ? Object.assign({}, ...stylesObject) : { ...(stylesObject as TextStyle) };

  if (obj?.fontWeight) {
    obj.fontFamily = fontWeights[obj.fontWeight];
    delete obj.fontWeight;
  } else {
    obj.fontFamily = fontWeights.normal;
  }

  return obj;
};

export default Text;
