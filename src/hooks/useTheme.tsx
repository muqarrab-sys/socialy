import React, { createContext } from 'react';
import definedThemes from 'theme';
import { ThemeContextType, themeType } from 'types/type';

const ThemeContext = createContext<ThemeContextType>(undefined as unknown as ThemeContextType);

const useThemeValues: () => ThemeContextType = () => {
  const [themeMode, setThemeMode] = React.useState<themeType>('light');

  const theme = React.useMemo(
    () => ({
      type: themeMode,
      ...definedThemes[themeMode as themeType],
    }),
    [themeMode],
  );

  const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light');

  return { toggleTheme, theme, themeMode };
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = useThemeValues();
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default useTheme;
