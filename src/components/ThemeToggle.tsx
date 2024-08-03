import { Button, ButtonProps } from '@/components/ui/button';
import useTheme from '@/hooks/useTheme';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function ThemeToggle(props: ButtonProps) {
  const themeContext = useTheme();
  const isDark = themeContext.theme === 'dark';

  return (
    <Button
      variant={'ghost'}
      size={'sm'}
      onClick={() => themeContext.setTheme(isDark ? 'light' : 'dark')}
      {...props}
    >
      <SunIcon className='w-6 h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500' />
      <MoonIcon className='w-6 h-6 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-sky-500' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
