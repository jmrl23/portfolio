import ThemeProvider from '@/components/ThemeProvider';
import Footer from '@/Footer';
import Header from '@/Header';
import Content from '@/Content';
import Navigation from '@/Navigation';

export default function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Header />
      <Content />
      <Footer />
      <Navigation />
    </ThemeProvider>
  );
}
