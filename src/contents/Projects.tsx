import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import useProjects from '@/hooks/useProjects';

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
              <CardTitle className='text-base'>{project.name}</CardTitle>
              <div className='w-full h-[200px] bg-gray-500 rounded'></div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                <Badge>{project.language}</Badge>
              </div>
              <div className='text-base mt-4 flex gap-4'>
                <a
                  href={`https://github.com/jmrl23/${project.name}`}
                  target='_blank'
                >
                  <svg
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 inline-block fill-slate-950 dark:fill-white'
                  >
                    <title>GitHub</title>
                    <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                  </svg>{' '}
                  <span className='underline'>Source code</span>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
