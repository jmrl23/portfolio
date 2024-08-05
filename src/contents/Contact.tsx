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
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: 'must be a valid email' }),
  name: z
    .string()
    .min(1, { message: 'must have at least 1 character' })
    .max(255, {
      message: 'max characters is 255',
    }),
  message: z
    .string()
    .min(10, { message: 'must have at least 10 characters' })
    .max(500, { message: 'max characters is 500' }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });
  const [isSending, setIsSending] = useState<boolean>(false);

  async function onSubmit({
    email,
    name,
    message,
  }: z.infer<typeof formSchema>) {
    if (isSending) return;

    let content = '';
    content += `email: ${email}\n`;
    content += `name: ${name}\n`;
    content += `\n${message}\n`;

    setIsSending(true);

    try {
      await api.post('/webhooks/discord/send-message', { content });
      toast.success('message sent');
      form.setValue('email', '');
      form.setValue('name', '');
      form.setValue('message', '');
    } catch (error) {
      if (error instanceof Error) return toast.error(error.message);
      toast.error('an error occurs');
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div
      className='container py-6 space-y-6 min-h-[calc(100vh-4rem)] scroll-mt-14'
      id='contact'
    >
      <h1 className='font-extrabold text-4xl mb-6'>Contact</h1>
      <p className='leading-loose'>
        Reach me out directly at{' '}
        <a
          className='underline decoration-orange-500 hover:decoration-sky-500 underline-offset-8'
          href='mailto:gaiterajomariel@gmail.com'
        >
          gaiterajomariel@gmail.com
        </a>{' '}
        or fill out the form below.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='md:max-w-screen-sm md:mx-auto'
        >
          <FormField
            control={form.control}
            name={'email'}
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-bold'>Email</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='johndoe@example.com'
                    disabled={isSending}
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
            name={'name'}
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-bold'>Name</FormLabel>
                <FormControl>
                  <Input placeholder='John' disabled={isSending} {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={'message'}
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-bold'>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className='resize-none h-[300px]'
                    placeholder='Aa'
                    disabled={isSending}
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
              className={cn('flex gap-x-2 font-bold', isSending && 'pl-3')}
              disabled={isSending}
            >
              {isSending && <LoaderIcon className='w-4 h-4 animate-spin' />}
              <span>Send email</span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
