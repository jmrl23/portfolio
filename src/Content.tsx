import Contact from '@/contents/Contact';
import Introduction from '@/contents/Introduction';
import Projects from '@/contents/Projects';
import Technologies from '@/contents/Technologies';

export default function Content() {
  return (
    <main className='text-lg'>
      <Introduction />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1000 100'
        className='fill-background bg-accent'
      >
        <path d='M0 1v99c134.3 0 153.7-99 296-99H0Z' opacity='.5'></path>
        <path
          d='M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z'
          opacity='.5'
        ></path>
        <path d='M617 1v86C372 119 384 1 196 1h421Z' opacity='.5'></path>
        <path d='M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z'></path>
      </svg>
      <Technologies />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1000 100'
        className='fill-accent bg-background'
      >
        <path d='M0 1v99c134.3 0 153.7-99 296-99H0Z' opacity='.5'></path>
        <path
          d='M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z'
          opacity='.5'
        ></path>
        <path d='M617 1v86C372 119 384 1 196 1h421Z' opacity='.5'></path>
        <path d='M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z'></path>
      </svg>
      <Projects />
      <div className='h-2 w-1/12 bg-orange-500 dark:bg-accent rounded-r-full my-6' />
      <div className='h-2 w-1/6 bg-orange-500 dark:bg-accent rounded-r-full my-6' />
      <Contact />
    </main>
  );
}
