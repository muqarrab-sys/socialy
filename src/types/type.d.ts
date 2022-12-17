import theme from 'theme';

export declare type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

export declare type themeType = 'light' | 'dark';

export declare type ThemeContextType = {
  theme: typeof theme.light | typeof theme.dark;
  toggleTheme: () => void;
  themeMode: themeType;
};
