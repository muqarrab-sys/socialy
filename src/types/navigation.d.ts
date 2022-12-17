import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ReadOnly } from './type';

export declare type RootStackParamList = ReadOnly<{
  Splash: undefined;
  BottomNav: undefined;
}>;

export declare type BottomTabParamList = ReadOnly<{
  Home: undefined;
  Settings: undefined;
}>;

export declare type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;
export declare type BottomNavProps = NativeStackScreenProps<RootStackParamList, 'BottomNav'>;

export declare type HomeTabProps = BottomTabScreenProps<BottomTabParamList, 'Home'>;
export declare type SettingsTabProps = BottomTabScreenProps<BottomTabParamList, 'Settings'>;
