import { Dimensions } from 'react-native';

export default {
  metrics: {
    baseMargin: 10,
    basePadding: 20,
    baseRadius: 3,
  },

  fontSizes: {
    h1: 26,
    h2: 20,
    h3: 18,
    input: 16,
    regular: 14,
    medium: 12,
    small: 11,
  },

  headerHeight: 54,
  tabBarHeight: 49,
  statusBarHeight: 20,

  screen: {
    paddingHorizontal: 10,
  },

  list: {
    distanceBetweenItems: 10,
  },

  screenWidth: Dimensions.get('window'),
  screenHeight: Dimensions.get('window'),
};
