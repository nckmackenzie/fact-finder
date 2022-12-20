import { createContext } from 'react';

const themeContext = createContext({
  darkMode: true,
  setDarkMode: () => {},
});

export default themeContext;
