import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import useProjects from '@/hooks/useProjects';
import { SquareArrowOutUpRightIcon } from 'lucide-react';

export default function Projects() {
  const { data: projects } = useProjects();

  return (
    <div
      className='container py-6 space-y-6 min-h-[calc(100vh-4rem)] scroll-mt-14'
      id='projects'
    >
      <h1 className='font-extrabold text-4xl mb-6'>Projects</h1>
      <p>GitHub pinned repositories</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <Card className='border-none shadow-none' key={project.name}>
            <CardHeader className='space-y-6'>
              <CardTitle className='text-lg'>
                <a
                  className='inline-flex gap-x-2 items-center hover:underline'
                  target='_blank'
                  href={project.url}
                >
                  {project.name}
                  <SquareArrowOutUpRightIcon className='w-4 h-4' />
                </a>
              </CardTitle>
              <div className='w-full h-[200px] bg-gray-500 rounded'></div>
              <CardDescription className='text-lg'>
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                {project.languages.map((language) => (
                  <Badge key={language}>{language}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
