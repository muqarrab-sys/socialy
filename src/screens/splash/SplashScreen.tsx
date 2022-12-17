import { Screen, Text } from 'components/common';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SplashScreenProps } from 'types/navigation';

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BottomNav');
    }, 2000);
  }, []);

  return (
    <Screen style={styles.container}>
      <Text>Splash</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
