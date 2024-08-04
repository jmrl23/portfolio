import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Circle, CircleCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [activeNav, setActiveNav] = useState<number>(0);
  const [contents, setContents] = useState<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    setContents([
      document.querySelector<HTMLDivElement>('#introduction'),
      document.querySelector<HTMLDivElement>('#about-me'),
      document.querySelector<HTMLDivElement>('#technologies'),
      document.querySelector<HTMLDivElement>('#projects'),
      document.querySelector<HTMLDivElement>('#contact'),
    ]);
  }, []);

  useEffect(
    function () {
      function onScroll() {
        const abs = contents.map((element) =>
          Math.abs(
            element?.getBoundingClientRect().top ?? Number.MAX_SAFE_INTEGER,
          ),
        );
        const min = Math.min(...abs);
        const index = abs.indexOf(min);
        setActiveNav(index);
      }

      window.addEventListener('scroll', onScroll);

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    },
    [activeNav, contents],
  );

  return (
    <nav className='fixed -right-2 md:right-0 top-0 mr-2 h-full space-y-4 flex flex-col justify-center'>
      <ThemeToggle className='bg-transparent hover:bg-transparent' />
      <div className='text-center'>&#x2022;</div>
      {navItems.map((item, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={'ghost'}
                size={'sm'}
                className='bg-transparent hover:bg-transparent cursor-default md:cursor-pointer'
                onClick={() => {
                  contents.at(index)?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {activeNav === index ? (
                  <CircleCheck className='w-4 h-4 md:w-6 md:h-6 cursor-default md:cursor-pointer text-orange-500' />
                ) : (
                  <Circle className='w-4 h-4 md:w-6 md:h-6 cursor-default md:cursor-pointer' />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{item.name}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </nav>
  );
}

const navItems = [
  { name: 'Introduction' },
  { name: 'About me' },
  { name: 'Technologies' },
  { name: 'Projects' },
  { name: 'Contact' },
];
