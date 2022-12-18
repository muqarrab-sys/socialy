import { Platform } from 'react-native';

export const isIos = () => Platform.OS === 'ios';
export const isAndroid = () => Platform.OS === 'android';
export const isWeb = () => Platform.OS === 'web';

export function elapsedTime(previous: Date) {
  const current = new Date();

  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours';
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + ' days';
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + ' months';
  } else {
    return Math.round(elapsed / msPerYear) + ' years';
  }
}
