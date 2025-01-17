import { CopyrightIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-secondary text-secondary py-6 text-lg'>
      <div className='container flex justify-between items-center'>
        <div className='flex items-center space-x-2 text-base text-muted-foreground'>
          <CopyrightIcon className='w-4 h-4' />
          <span>2025 Jomariel Gaitera</span>
        </div>
      </div>
    </footer>
  );
}
