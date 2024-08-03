import { CodeIcon } from 'lucide-react';

export default function Header() {
  return (
    <header className='bg-background sticky left-0 top-0 flex items-center'>
      <div className='container flex justify-between items-center py-6'>
        <h1 className='font-extrabold md:text-lg group'>
          <a href='/'>
            <CodeIcon className='inline-block mr-2' />
            <span className='underline underline-offset-8 decoration-4 decoration-orange-500 group-hover:decoration-sky-500'>
              Web Developer
            </span>
          </a>
        </h1>
      </div>
    </header>
  );
}
