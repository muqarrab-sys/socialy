import { Screen, Text } from 'components/common';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <Screen style={styles.container}>
      <Text>Home.screen</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
