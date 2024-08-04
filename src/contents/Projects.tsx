import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { LinkIcon, CodeIcon } from 'lucide-react';

export default function Projects() {
  return (
    <div
      className='container py-6 space-y-6 min-h-[calc(100vh-4rem)] scroll-mt-14'
      id='projects'
    >
      <h1 className='font-extrabold text-4xl mb-6'>Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Card>
          <CardHeader className='space-y-6'>
            <CardTitle className='text-base'>Test project</CardTitle>
            <div className='w-full h-[200px] bg-gray-500 rounded'></div>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
              earum?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex flex-wrap gap-2'>
              <Badge>Node.js</Badge>
              <Badge>TypeScript</Badge>
            </div>
            <div className='text-base mt-4 flex gap-4'>
              <a className='underline' href='#'>
                <LinkIcon className='w-4 h-4 inline mr-1' />
                Demo
              </a>
              <a className='underline' href='#'>
                <CodeIcon className='w-4 h-4 inline mr-1' />
                Code
              </a>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='space-y-6'>
            <CardTitle className='text-base'>Test project</CardTitle>
            <div className='w-full h-[200px] bg-gray-500 rounded'></div>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
              earum?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex flex-wrap gap-2'>
              <Badge>Node.js</Badge>
              <Badge>TypeScript</Badge>
            </div>
            <div className='text-base mt-4 flex gap-4'>
              <a className='underline' href='#'>
                <LinkIcon className='w-4 h-4 inline mr-1' />
                Demo
              </a>
              <a className='underline' href='#'>
                <CodeIcon className='w-4 h-4 inline mr-1' />
                Code
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
