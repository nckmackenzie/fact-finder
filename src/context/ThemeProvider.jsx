import { useState, useContext } from 'react';
import themeContext from './theme-context';

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState('dark');
  return (
    <themeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </themeContext.Provider>
  );
}

export function useTheme() {
  return useContext(themeContext);
}
