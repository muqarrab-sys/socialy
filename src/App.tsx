import { useTheme } from 'hooks';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { RootStack } from './navigation';

export default function App() {
  const { themeMode } = useTheme();

  useEffect(() => {
    StatusBar.setBarStyle(themeMode === 'dark' ? 'light-content' : 'dark-content', true);
  }, [themeMode]);

  return <RootStack />;
}
