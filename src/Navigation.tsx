import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Circle, CircleCheck } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className='fixed -right-2 md:right-0 top-0 mr-2 h-full space-y-4 flex flex-col justify-center'>
      <ThemeToggle className='bg-transparent hover:bg-transparent' />
      <div className='text-center'>&#x2022;</div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'ghost'}
              size={'sm'}
              className='bg-transparent hover:bg-transparent'
            >
              <Circle className='w-4 h-4 md:w-6 md:h-6 cursor-default md:cursor-pointer' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Introduction</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'ghost'}
              size={'sm'}
              className='bg-transparent hover:bg-transparent'
            >
              {' '}
              <Circle className='w-4 h-4 md:w-6 md:h-6 cursor-default md:cursor-pointer' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>About me</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'ghost'}
              size={'sm'}
              className='bg-transparent hover:bg-transparent'
            >
              <CircleCheck className='w-4 h-4 md:w-6 md:h-6 cursor-default md:cursor-pointer text-orange-500' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Technologies</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'ghost'}
              size={'sm'}
              className='bg-transparent hover:bg-transparent'
            >
              <Circle className='w-4 h-4 md:w-6 md:h-6 cursor-default md:cursor-pointer' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Projects</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'ghost'}
              size={'sm'}
              className='bg-transparent hover:bg-transparent'
            >
              <Circle className='w-4 h-4 md:w-6 md:h-6 cursor-default md:cursor-pointer' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Contact</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
}
