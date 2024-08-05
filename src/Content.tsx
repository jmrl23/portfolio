import Contact from '@/contents/Contact';
import Introduction from '@/contents/Introduction';
import Projects from '@/contents/Projects';
import Technologies from '@/contents/Technologies';

export default function Content() {
  return (
    <main className='text-lg'>
      <Introduction />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}
