import { SunIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className='bg-slate-900 py-4'>
      <div className='container text-white flex justify-between items-center'>
        <h1 className='font-extrabold font-mono'>
          <a href='/'>{`<Jomariel />`}</a>
        </h1>
        <Button>
          <SunIcon />
        </Button>
      </div>
    </header>
  );
}
