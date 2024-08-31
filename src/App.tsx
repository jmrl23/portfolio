import ThemeProvider from '@/components/ThemeProvider';
import Router from '@/Router';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <ThemeProvider storageKey='jomariel.portfolio.theme'>
      <Router />
      <Toaster />
    </ThemeProvider>
  );
}
