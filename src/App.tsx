import ThemeProvider from '@/components/ThemeProvider';
import Footer from '@/Footer';
import Content from '@/Content';
import Navigation from '@/Navigation';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider defaultTheme='light' storageKey='jomariel.portfolio.theme'>
      <QueryClientProvider client={queryClient}>
        <Content />
        <Footer />
        <Navigation />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
