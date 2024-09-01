import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { CircleDotIcon, CircleIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [activeNav, setActiveNav] = useState<number>(0);
  const [contents, setContents] = useState<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    setContents(
      [
        document.querySelector<HTMLDivElement>('#introduction'),
        document.querySelector<HTMLDivElement>('#technologies'),
        document.querySelector<HTMLDivElement>('#projects'),
        document.querySelector<HTMLDivElement>('#contact'),
      ].filter((value) => value !== null),
    );
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
    <nav className='fixed -right-2 md:right-0 top-0 lg:mr-2 h-full space-y-4 flex flex-col justify-center'>
      <ThemeToggle className='bg-transparent hover:bg-transparent' />
      <div className='text-center'>&#x2022;</div>
      {navItems
        .filter((item) => !!contents.some((content) => content?.id === item.id))
        .map((item, index) => (
          <TooltipProvider key={item.id}>
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
                    <CircleDotIcon className='w-4 h-4 lg:w-6 lg:h-6 cursor-default md:cursor-pointer text-orange-500' />
                  ) : (
                    <CircleIcon className='w-4 h-4 lg:w-6 lg:h-6 cursor-default md:cursor-pointer hover:text-sky-500' />
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

interface NavItem {
  id: string;
  name: string;
}

const navItems: NavItem[] = [
  {
    id: 'introduction',
    name: 'Introduction',
  },
  {
    id: 'technologies',
    name: 'Technologies',
  },
  {
    id: 'projects',
    name: 'Projects',
  },
  {
    id: 'contact',
    name: 'Contact',
  },
];
