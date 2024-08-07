import { createContext } from 'react';

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'light',
  setTheme: () => void 0,
};

const themeContext = createContext<ThemeProviderState>(initialState);

export type Theme = 'dark' | 'light';

export default themeContext;
