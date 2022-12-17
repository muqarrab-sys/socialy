import { View, StyleSheet, Button } from 'react-native';
import React from 'react';
import { Text } from 'components/common';
import useTheme from '../../hooks/useTheme';

export default function HomeScreen() {
  const { theme, toggleTheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text>Home.screen</Text>
      <Button title="Toggle Theme" onPress={() => toggleTheme()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
