import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import useProjects from '@/hooks/useProjects';
import { ImageOffIcon, SquareArrowOutUpRightIcon } from 'lucide-react';

export default function Projects() {
  const { data: projects, isPending } = useProjects();

  return (
    <div className='container py-6 min-h-screen' id='projects'>
      <h1 className='font-extrabold text-4xl mb-6'>Projects</h1>
      <p className='leading-loose text-muted-foreground my-6'>
        GitHub pinned repositories
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {isPending &&
          Array.from({ length: 6 }).map((_, index) => (
            <Card className='border-none shadow-none' key={index}>
              <CardHeader className='space-y-6'>
                <CardTitle className='text-lg'>
                  <a
                    className='inline-flex gap-x-2 items-center hover:underline underline'
                    target='_blank'
                    href='#'
                  >
                    <Skeleton className='w-[200px] h-4' />
                    <SquareArrowOutUpRightIcon className='w-4 h-4' />
                  </a>
                </CardTitle>
                <div className='w-full h-[200px] bg-gray-500 rounded-3xl' />
                <CardDescription className='text-foreground'>
                  <Skeleton className='w-full h-4' />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2'>
                  <Skeleton className='w-12 h-4' />
                  <Skeleton className='w-12 h-4' />
                  <Skeleton className='w-12 h-4' />
                </div>
              </CardContent>
            </Card>
          ))}
        {projects.map((project) => (
          <Card className='border-none shadow-none' key={project.id}>
            <CardHeader className='space-y-6'>
              <CardTitle className='text-lg'>
                <a
                  className='inline-flex gap-x-2 items-center hover:underline underline'
                  target='_blank'
                  href={project.url}
                >
                  {project.name}
                  <SquareArrowOutUpRightIcon className='w-4 h-4' />
                </a>
              </CardTitle>
              <Carousel className='w-full'>
                <CarouselContent>
                  {project.images.length > 0 ? (
                    project.images.map((url) => (
                      <CarouselItem key={url}>
                        <Card className='rounded-3xl'>
                          <CardContent className='flex aspect-video items-center justify-center p-0'>
                            <img
                              src={url}
                              alt={project.name}
                              width={200}
                              height={200}
                              className='w-full rounded-3xl'
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))
                  ) : (
                    <CarouselItem>
                      <Card className='rounded-3xl'>
                        <CardContent className='flex aspect-video items-center justify-center p-0'>
                          <ImageOffIcon className='w-12 h-12' />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  )}
                </CarouselContent>
              </Carousel>
              {/* <div className='w-full h-[200px] bg-gray-500 rounded-3xl' /> */}
              <CardDescription className='text-foreground'>
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
