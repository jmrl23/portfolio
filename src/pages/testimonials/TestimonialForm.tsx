import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { api } from '@/lib/axios';
import { testimonialSchema } from '@/schemas/testimonialsSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FromSchema } from 'json-schema-to-ts';
import { AsteriskIcon, ImageIcon, InfoIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

export interface Props {
  testimonialKey: string;
}

const formSchema = z.object({
  author: z.string().min(1, {
    message: 'name must have at least 1 character',
  }),
  bio: z.string().min(1, {
    message: 'bio must have at least 1 character',
  }),
  content: z.string().min(10, {
    message: 'content must have at least 10 characters',
  }),
});

export default function TestimonialForm({ testimonialKey: key }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File | undefined>(undefined);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      author: '',
      bio: '',
      content: '',
    },
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (isSubmitSuccess) return;
    if (isSubmitting) {
      toast.custom('Submit on progress', {
        icon: <InfoIcon />,
      });
      return;
    }
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('key', key);
    if (image) formData.append('image', image);
    formData.append('author', values.author);
    formData.append('bio', values.bio);
    formData.append('content', values.content);
    try {
      await api.post<{
        data: FromSchema<typeof testimonialSchema>;
      }>('/testimonials/create', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      toast.success('testimonial created!');
      setIsSubmitSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 1200);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message);
      }
      setIsSubmitting(false);
    }
  }

  return (
    <div className='p-6'>
      <div className='flex justify-end'>
        <ThemeToggle />
      </div>
      <div className='max-w-screen-sm mx-auto'>
        <h1 className='font-extrabold text-4xl'>Testimonial</h1>
        <p className='leading-loose text-muted-foreground my-6'>
          Compose your testimonial
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='grid grid-cols-2 gap-6'>
              <FormField
                control={form.control}
                name={'author'}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-bold inline-flex items-center space-x-1'>
                      <span className='text-base'>Name</span>
                      <AsteriskIcon className='w-4 h-4 text-red-500' />
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='text-base border-dashed border-2 border-sky-500 focus:border-sky-600'
                        placeholder='John Doe'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <FormItem>
                  <FormLabel className='font-bold inline-flex items-center space-x-1'>
                    <span className='text-base'>Photo</span>
                  </FormLabel>
                  <FormControl>
                    <>
                      <Input
                        className='hidden'
                        type='file'
                        ref={fileInputRef}
                        accept='image/*'
                        onChange={(e) => {
                          if (e.target.files?.length === undefined) return;
                          const files = [...e.target.files[Symbol.iterator]()];
                          setImage(files.at(0));
                        }}
                      />
                      <div
                        className='text-base border-dashed border-2 border-sky-500 focus:border-sky-600 cursor-pointer px-2 py-[.45rem] rounded-lg text-center font-bold text-sky-500 line-clamp-1'
                        onClick={() => fileInputRef.current?.click()}
                      >
                        {image ? (
                          image?.name
                        ) : (
                          <ImageIcon className='mx-auto' />
                        )}
                      </div>
                    </>
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              </div>
            </div>
            <FormField
              control={form.control}
              name={'bio'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-bold inline-flex items-center space-x-1'>
                    <span className='text-base'>Bio</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className='text-base border-dashed border-2 border-sky-500 focus:border-sky-600'
                      placeholder='Creative Consultant'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={'content'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-bold inline-flex items-center space-x-1'>
                    <span className='text-base'>Message/ Content</span>
                    <AsteriskIcon className='w-4 h-4 text-red-500' />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className='resize-none h-[400px] lg:h-[350px] text-base border-dashed border-2 border-sky-500 focus:border-sky-600'
                      placeholder='Aa'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex mt-6 justify-end'>
              <Button
                type='submit'
                className={'flex gap-x-2 font-bold'}
                variant={'default'}
              >
                <span>Submit</span>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
