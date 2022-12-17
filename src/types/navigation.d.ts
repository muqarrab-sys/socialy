import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReadOnly } from './type';

export declare type RootStackParamList = ReadOnly<{
  SplashScreen: undefined;
  HomeScreen: undefined;
}>;

export declare type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;
export declare type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;
