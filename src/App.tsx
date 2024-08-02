import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='p-4'>
      <Button
        variant={'secondary'}
        onClick={() => setCount((count) => count + 1)}
      >
        Count: {count}
      </Button>
    </div>
  );
}
