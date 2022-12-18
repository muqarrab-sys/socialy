module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@helpers': './src/helpers',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@hooks': './src/hooks',
          '@types': './src/types',
        },
      },
    ],
  ],
};
