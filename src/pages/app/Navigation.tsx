import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Content } from '@/pages/app/AppPage';
import { CircleDotIcon, CircleIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Props {
  contents: Content[];
}

export default function Navigation({ contents }: Props) {
  const [activeNav, setActiveNav] = useState<number>(0);
  const [elements, setElements] = useState<Array<HTMLDivElement | null>>([]);

  useEffect(
    function () {
      setElements(
        contents.map((content) =>
          document.querySelector<HTMLDivElement>(`#${content.id}`),
        ),
      );

      function onScroll() {
        const abs = elements.map((element) =>
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
    [activeNav, contents, elements],
  );

  return (
    <nav className='fixed -right-2 md:right-0 top-0 lg:mr-2 h-full space-y-4 flex flex-col justify-center'>
      <ThemeToggle className='bg-transparent hover:bg-transparent' />
      <div className='text-center'>&#x2022;</div>
      {contents.map(
        (content, index) =>
          elements.at(index) && (
            <TooltipProvider key={content.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={'ghost'}
                    size={'sm'}
                    className='bg-transparent hover:bg-transparent cursor-default md:cursor-pointer'
                    onClick={() => {
                      document.getElementById(content.id)?.scrollIntoView({
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
                <TooltipContent>{content.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ),
      )}
    </nav>
  );
}
