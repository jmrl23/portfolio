import { Button } from '@/components/ui/button';
import { DownloadIcon, InfoIcon } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Introduction() {
  return (
    <div
      className='container min-h-screen flex justify-center flex-col max-w-screen-lg'
      id='introduction'
    >
      <div className='space-y-6 text-center'>
        <h2 className='text-4xl font-extrabold'>Hi, I am Jomariel Gaitera</h2>
        <p className='leading-10 text-xl'>
          I love building web applications with strong backend systems. I focus
          on creating efficient, effective, and reliable websites. Let's build
          something great together!
        </p>
        <Button
          variant={'outline'}
          className='pl-3'
          onClick={() =>
            toast('Not available', {
              icon: <InfoIcon />,
            })
          }
        >
          <a className='flex' href='#'>
            <DownloadIcon className='mr-2 w-6 h-6' />
            <span className='text-base font-bold'>download resume</span>
          </a>
        </Button>
      </div>
    </div>
  );
}
