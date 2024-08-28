import { Badge } from '@/components/ui/badge';
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
import { BoxIcon, ImageOffIcon, SquareArrowOutUpRightIcon } from 'lucide-react';
import { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

export default function Projects() {
  const { data: projects, isPending } = useProjects({
    take: 6,
  });

  return (
    <div className='container pt-6' id='projects'>
      <h1 className='font-extrabold text-4xl mb-6'>Projects</h1>
      <p className='leading-loose text-muted-foreground my-6'>
        Here are my recent projects
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
