import Contact from '@/pages/app/contents/Contact';
import Introduction from '@/pages/app/contents/Introduction';
import Projects from '@/pages/app/contents/Projects';
import Technologies from '@/pages/app/contents/Technologies';
import Footer from '@/pages/app/Footer';
import Navigation from '@/pages/app/Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export interface Content {
  id: string;
  name: string;
  element: JSX.Element;
}

const contents: Content[] = [
  {
    id: 'introduction',
    name: 'Introduction',
    element: <Introduction key={'introduction'} />,
  },
  {
    id: 'technologies',
    name: 'Technologies',
    element: <Technologies key={'technologies'} />,
  },
  {
    id: 'projects',
    name: 'Projects',
    element: <Projects key={'projects'} />,
  },
  {
    id: 'contact',
    name: 'Contact',
    element: <Contact key={'contact'} />,
  },
];

const queryClient = new QueryClient();

export default function AppPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className='text-lg'>
        {contents.map((content) => content.element)}
      </main>
      <Footer />
      <Navigation contents={contents} />
    </QueryClientProvider>
  );
}
