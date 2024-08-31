import Contact from '@/pages/app/contents/Contact';
import Introduction from '@/pages/app/contents/Introduction';
import Projects from '@/pages/app/contents/Projects';
import Technologies from '@/pages/app/contents/Technologies';

export default function Content() {
  return (
    <main className='text-lg'>
      <Introduction />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1000 100'
        className='fill-background bg-accent'
      >
        <path
          d='M0 1v99c134.3 0 153.7-99 296-99H0Z'
          opacity='.5'
          className='fill-orange-500'
        ></path>
        <path
          d='M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z'
          opacity='.5'
          className='fill-orange-500'
        ></path>
        <path
          d='M617 1v86C372 119 384 1 196 1h421Z'
          opacity='.5'
          className='fill-orange-500'
        ></path>
        <path d='M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z'></path>
      </svg>
      <Technologies />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1000 100'
        className='fill-accent bg-background'
      >
        <path
          d='M0 1v99c134.3 0 153.7-99 296-99H0Z'
          opacity='.5'
          className='fill-sky-500'
        ></path>
        <path
          d='M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z'
          opacity='.5'
          className='fill-sky-500'
        ></path>
        <path
          d='M617 1v86C372 119 384 1 196 1h421Z'
          opacity='.5'
          className='fill-sky-500'
        ></path>
        <path d='M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z'></path>
      </svg>
      <Projects />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1283 132'
        className='fill-orange-500/70 my-8'
      >
        <path d='M1282.46 5.79c-.91-3.88-5.18-6.65-9.04-5.54-104.37 29.02-193.78 56.87-361.6 74.53-268.41 28.16-539.6 14.6-803.08-26.38C94.9 47.97-.34 26.24.08 41.38c-1.56 14.21 19.47 12.91 29.6 17.24 32.82 8.6 66.1 15.33 99.4 21.81 238.99 44.43 482.98 55.29 725.63 49.01 92.37-4.11 185.68-9.96 275.51-33.09 18.68-6.31 42.79-9.21 55.18-25.89 6.76-13.28-12.41-21.16-13.83-6.12-17.69 11.67-39.31 15.61-59.45 21.34-114.56 25.18-245.31 30.46-361.99 30.36-191.39.45-383.13-10.13-572-42.21 277.31 36.42 560.77 44.96 837.82 2.23 104.21-15.4 195.11-42.74 260.97-61.22a7.57 7.57 0 0 0 5.54-9.05Z'></path>
      </svg>
      <Contact />
    </main>
  );
}
