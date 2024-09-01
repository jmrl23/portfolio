import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import useProjects, { Project } from '@/hooks/useProjects';
import { cn } from '@/lib/utils';
import {
  BoxIcon,
  ImageOffIcon,
  LoaderIcon,
  SquareArrowOutUpRightIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

export default function Projects() {
  const [take, setTake] = useState<number>(4);
  const {
    data: projects,
    isLoading,
    isPending,
    refetch,
  } = useProjects({ take, order: 'asc' });
  const isMaxTake = take > projects.length;

  useEffect(() => {
    refetch();
  }, [refetch, take]);

  if (projects.length < 1 && !isLoading) return null;

  return (
    <div>
      <div className='container pt-6' id='projects'>
        <h1 className='font-extrabold text-4xl mb-6'>Projects</h1>
        <p className='leading-loose text-muted-foreground my-6'>
          Here are some of my projects
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {isLoading &&
            Array.from({ length: take }).map((_, index) => (
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
                  <Skeleton className='w-full h-[200px] lg:h-[300px] rounded-3xl' />
                  <Skeleton className='w-full h-4' />
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className='flex justify-center mt-4'>
          {!isMaxTake && (
            <Button
              className={cn('rounded-full flex gap-x-2', isPending && 'pl-3')}
              variant={'outline'}
              onClick={() => setTake((take) => take + 4)}
              disabled={isPending}
            >
              {isPending && <LoaderIcon className='w-4 h-4 animate-spin' />}
              load more
            </Button>
          )}
        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1283 132'
        className='fill-orange-500/70 my-8'
      >
        <path d='M1282.46 5.79c-.91-3.88-5.18-6.65-9.04-5.54-104.37 29.02-193.78 56.87-361.6 74.53-268.41 28.16-539.6 14.6-803.08-26.38C94.9 47.97-.34 26.24.08 41.38c-1.56 14.21 19.47 12.91 29.6 17.24 32.82 8.6 66.1 15.33 99.4 21.81 238.99 44.43 482.98 55.29 725.63 49.01 92.37-4.11 185.68-9.96 275.51-33.09 18.68-6.31 42.79-9.21 55.18-25.89 6.76-13.28-12.41-21.16-13.83-6.12-17.69 11.67-39.31 15.61-59.45 21.34-114.56 25.18-245.31 30.46-361.99 30.36-191.39.45-383.13-10.13-572-42.21 277.31 36.42 560.77 44.96 837.82 2.23 104.21-15.4 195.11-42.74 260.97-61.22a7.57 7.57 0 0 0 5.54-9.05Z'></path>
      </svg>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);

  function openImageViewer(index: number) {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }

  function closeImageViewer() {
    setCurrentImage(0);
    setIsViewerOpen(false);
  }

  return (
    <Card className='border-none shadow-none' key={project.id}>
      <CardHeader className='space-y-6'>
        <CardTitle className='text-lg flex items-center justify-between'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  className='inline-flex gap-x-2 items-center hover:underline underline'
                  target='_blank'
                  href={project.repositoryUrl}
                >
                  {project.name}
                  <SquareArrowOutUpRightIcon className='w-4 h-4' />
                </a>
              </TooltipTrigger>
              <TooltipContent>Repository</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {project.previewUrl && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={project.previewUrl} target='_blank'>
                    <BoxIcon />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Preview</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </CardTitle>
        <Carousel className='w-full' opts={{ loop: true }}>
          <CarouselContent>
            {project.images.length > 0 ? (
              project.images.map((image, idx) => (
                <CarouselItem
                  key={image.id}
                  onClick={() => {
                    openImageViewer(idx);
                  }}
                >
                  <Card className='rounded-3xl'>
                    <CardContent className='flex items-center justify-center p-0 lg:cursor-pointer'>
                      <img
                        src={image.url}
                        alt={project.name}
                        width={200}
                        height={200}
                        className='w-full rounded-3xl aspect-video object-contain'
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
          {project.images.length > 1 && (
            <>
              <CarouselPrevious className='translate-x-16' />
              <CarouselNext className='-translate-x-16' />
            </>
          )}
        </Carousel>
        <CardDescription className='text-foreground text-base'>
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-wrap gap-2'>
          {project.topics.map((topic, idx) => (
            <Badge key={idx}>{topic}</Badge>
          ))}
        </div>
      </CardContent>
      {isViewerOpen && (
        <ImageViewer
          src={project.images.map((image) => image.url)}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </Card>
  );
}
