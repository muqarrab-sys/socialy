import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'hooks';
import App from 'App';

export default function Root() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
