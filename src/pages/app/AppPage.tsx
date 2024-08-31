import Content from '@/pages/app/Content';
import Footer from '@/pages/app/Footer';
import Navigation from '@/pages/app/Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function AppPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Content />
      <Footer />
      <Navigation />
    </QueryClientProvider>
  );
}
