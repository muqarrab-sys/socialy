import React from 'react';
import { ScrollView, StyleSheet, Switch, View } from 'react-native';
import common from 'theme/common';
import { Screen, Text } from 'components/common';
import { useTheme } from 'hooks';

export default function SettingsScreen() {
  const { toggleTheme, themeMode } = useTheme();
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <SwitchItem title="Dark Mode" onChange={toggleTheme} value={themeMode === 'dark'} />
      </ScrollView>
    </Screen>
  );
}

const SwitchItem: React.FC<{ title: string; onChange: () => void; value: boolean | undefined }> = ({ title, onChange, value }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{title}</Text>
      <Switch onChange={onChange} value={value} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: common.headerHeight,
    backgroundColor: 'red',
  },

  // Items
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
  },
});
