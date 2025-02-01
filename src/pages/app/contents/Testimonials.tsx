import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import useTestimonials, { Testimonial } from '@/hooks/useTestimonials';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

export default function Testimonials() {
  const { data: testimonials } = useTestimonials();
  const isLoading = true;

  return (
    <div>
      <div>
        <div className='container py-6' id='testimonials'>
          <h1 className='font-extrabold text-4xl'>Testimonials</h1>
          <div className='fill-foreground py-8 mx-auto'>
            <Carousel opts={{ loop: true, align: 'start' }}>
              <CarouselContent>
                {isLoading || testimonials.length < 1
                  ? Array.from({ length: 3 }).map((_, index) => (
                      <CarouselItem
                        className='md:basis-1/2 lg:basis-1/3'
                        key={index}
                      >
                        <Card>
                          <CardHeader>
                            <CardTitle className='flex items-center gap-x-2 truncate'>
                              <Skeleton className='w-16 h-16 rounded-full' />
                              <Skeleton className='w-1/2 h-4' />
                            </CardTitle>
                            <br />
                            <Skeleton className='w-full h-4' />
                          </CardHeader>
                          <CardContent>
                            <span className='font-extrabold text-muted-foreground text-3xl'>
                              &ldquo;
                            </span>
                            <Skeleton className='w-full h-4 mb-4' />
                            <Skeleton className='w-full h-4 mb-4' />
                            <Skeleton className='w-full h-4' />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))
                  : testimonials.map((testimonial) => (
                      <CarouselItem
                        className='md:basis-1/2 lg:basis-1/3'
                        key={testimonial.id}
                      >
                        <TestimonialCard testimonial={testimonial} />
                      </CarouselItem>
                    ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [isClamped, setIsClamped] = useState<boolean>(false);

  useEffect(() => {
    if (
      contentRef.current &&
      contentRef.current.scrollHeight > contentRef.current.clientHeight
    ) {
      setIsClamped(true);
    }
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-x-2 truncate'>
          <Avatar>
            <AvatarImage src={testimonial.image?.url ?? void 0} />
            <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
          </Avatar>
          {testimonial.author}
        </CardTitle>
        <CardDescription className='truncate' title={testimonial.bio ?? void 0}>
          {testimonial.bio}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span className='font-extrabold text-muted-foreground text-3xl'>
          &ldquo;
        </span>
        <p
          className={cn('text-base', isClamped && 'line-clamp-3')}
          ref={contentRef}
          onClick={() => !isClamped && setIsClamped(true)}
        >
          {testimonial.content}
        </p>
        {isClamped && (
          <div className='flex justify-end mt-4'>
            <Button variant={'ghost'} onClick={() => setIsClamped(false)}>
              See more
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
