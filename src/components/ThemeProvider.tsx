import themeContext, { Theme } from '@/contexts/themeContext';
import { useEffect, useState } from 'react';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export default function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'jomariel.portfolio.theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <themeContext.Provider {...props} value={value}>
      {children}
    </themeContext.Provider>
  );
}
