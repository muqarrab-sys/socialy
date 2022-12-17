import React from 'react';
import { Text as RNText, TextProps, StyleSheet, TextStyle, StyleProp } from 'react-native';
import { isArray } from 'lodash';
import { useTheme } from 'hooks';
import { isAndroid } from 'helpers/common';
import definedTheme from 'theme';

const Text: React.FC<TextProps> = props => {
  const { theme } = useTheme();

  const fixedStyles = isAndroid() ? fixFontWeightForAndroid(props.style) : props.style;

  return (
    <RNText {...props} style={[styles.font, { color: theme.colors.text }, fixedStyles]}>
      {props.children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: definedTheme.common.fontWeights[400],
    fontSize: 14,
  },
});

const fixFontWeightForAndroid = (stylesObject: StyleProp<TextStyle>) => {
  let obj: TextStyle = isArray(stylesObject) ? Object.assign({}, ...stylesObject) : { ...(stylesObject as TextStyle) };

  if (obj?.fontWeight) {
    obj.fontFamily = definedTheme.common.fontWeights[obj.fontWeight];
    delete obj.fontWeight;
  } else {
    obj.fontFamily = definedTheme.common.fontWeights.normal;
  }

  return obj;
};

export default Text;
