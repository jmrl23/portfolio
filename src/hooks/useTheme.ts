import themeContext from '@/contexts/themeContext';
import { useContext } from 'react';

const useTheme = () => {
  const context = useContext(themeContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};

export default useTheme;
