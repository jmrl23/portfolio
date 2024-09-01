import Contact from '@/pages/app/contents/Contact';
import Introduction from '@/pages/app/contents/Introduction';
import Projects from '@/pages/app/contents/Projects';
import Technologies from '@/pages/app/contents/Technologies';
import Footer from '@/pages/app/Footer';
import Navigation from '@/pages/app/Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function AppPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className='text-lg'>
        <Introduction />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Navigation />
    </QueryClientProvider>
  );
}
