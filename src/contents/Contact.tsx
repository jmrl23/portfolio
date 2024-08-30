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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { api } from '@/lib/axios';
import { cn } from '@/lib/utils';
import { fileSchema } from '@/schemas/filesSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FromSchema } from 'json-schema-to-ts';
import { AsteriskIcon, FilesIcon, FileX2Icon, LoaderIcon } from 'lucide-react';
import { ChangeEvent, useRef, useState } from 'react';
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
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [attachments, setAttachments] = useState<{ id: string; url: string }[]>(
    [],
  );

  async function handleRemoveAttachments() {
    try {
      const ids = attachments.map((attachment) => attachment.id).join('&id=');
      await api.delete('/files/delete?id=' + ids, {
        headers: {
          authorization: `Bearer ${import.meta.env.VITE_FILES_API_KEY}`,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      toast.success(`Attachment${attachments.length > 1 ? 's' : ''} removed`);
      setAttachments([]);
    }
  }

  async function onSubmit({
    email,
    name,
    message,
  }: z.infer<typeof formSchema>) {
    if (isSending || isUploading) return;

    let content = '';
    content += `email: ${email.trim()}\n`;
    content += `name: ${name.trim()}\n`;
    content += `\n${message.trim()}\n`;

    setIsSending(true);

    try {
      await api.post(
        '/emails/send',
        {
          text: content,
          to: [import.meta.env.VITE_EMAILS_RECEIVER],
          attachments: attachments.map((attachment) => ({
            path: attachment.url,
          })),
        },
        {
          headers: {
            authorization: `Bearer ${import.meta.env.VITE_EMAILS_API_KEY}`,
          },
        },
      );
      toast.success('message sent');
      form.setValue('email', '');
      form.setValue('name', '');
      form.setValue('message', '');
    } catch (error) {
      if (error instanceof Error) return toast.error(error.message);
      toast.error('an error occurs');
    } finally {
      setIsSending(false);
      setAttachments([]);
    }
  }

  return (
    <div className='container py-6' id='contact'>
      <h1 className='font-extrabold text-4xl'>Contact</h1>
      <p className='leading-loose text-muted-foreground mt-6 mb-10'>
        Reach me out directly at{' '}
        <a
          className='underline decoration-orange-500 hover:decoration-sky-500 hover:text-foreground underline-offset-8'
          href='mailto:gaiterajomariel@gmail.com'
        >
          gaiterajomariel@gmail.com
        </a>{' '}
        or fill out the form below
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
                <FormLabel className='font-bold inline-flex items-center space-x-1'>
                  <span className='text-base'>Email</span>
                  <AsteriskIcon className='w-4 h-4 text-red-500' />
                </FormLabel>{' '}
                <FormControl>
                  <Input
                    className='text-base border-dashed border-2 border-sky-500 focus:border-sky-600'
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
                <FormLabel className='font-bold inline-flex items-center space-x-1'>
                  <span className='text-base'>Name</span>
                  <AsteriskIcon className='w-4 h-4 text-red-500' />
                </FormLabel>{' '}
                <FormControl>
                  <Input
                    className='text-base border-dashed border-2 border-sky-500 focus:border-sky-600'
                    placeholder='John'
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
            name={'message'}
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-bold inline-flex items-center space-x-1'>
                  <span className='text-base'>Message</span>
                  <AsteriskIcon className='w-4 h-4 text-red-500' />
                </FormLabel>
                <FormControl>
                  <Textarea
                    className='resize-none h-[400px] lg:h-[350px] text-base border-dashed border-2 border-sky-500 focus:border-sky-600'
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
          <div className='flex mt-6 justify-between'>
            {attachments.length < 1 ? (
              <FileUploader
                isUploading={isUploading}
                setIsUploading={setIsUploading}
                setAttachments={setAttachments}
              />
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={'outline'}
                      className='rounded-full px-3'
                      type='button'
                      onClick={handleRemoveAttachments}
                    >
                      <FileX2Icon className='w-4 h-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {attachments.length > 1
                      ? 'Remove attached files'
                      : 'Remove attached file'}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            <Button
              type='submit'
              className={cn('flex gap-x-2 font-bold', isSending && 'pl-3')}
              disabled={isSending}
              variant={'default'}
            >
              {isSending && <LoaderIcon className='w-4 h-4 animate-spin' />}
              <span>Send message</span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

type $File = FromSchema<typeof fileSchema>;

async function uploadFiles(files: File[]): Promise<$File[]> {
  const uploadingMessage =
    files.length > 1 ? 'Uploading attachments' : 'Uploading attachment';
  const toastId = toast.loading(uploadingMessage);
  const formData = new FormData();
  for (const file of files) {
    formData.append('files', file);
  }
  try {
    const response = await api.post<{ data: $File[] }>(
      '/files/upload',
      formData,
      {
        headers: {
          'content-type': 'multipart/form-data',
          authorization: `Bearer ${import.meta.env.VITE_FILES_API_KEY}`,
        },
        signal: AbortSignal.timeout(1000 * 60 * 2),
      },
    );
    const { data: files } = response.data;
    return files;
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message ?? 'An error occurs');
    }
    console.error(error);
    return [];
  } finally {
    toast.dismiss(toastId);
  }
}

interface FileUploaderProps {
  isUploading: boolean;
  setIsUploading: (value: boolean) => void;
  setAttachments: (attachments: { id: string; url: string }[]) => void;
}

function FileUploader({
  isUploading,
  setIsUploading,
  setAttachments,
}: FileUploaderProps) {
  const ref = useRef<HTMLInputElement>(null);

  async function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (isUploading || e.target.files?.length === undefined) return;
    const files = [...e.target.files[Symbol.iterator]()];
    if (files.length > 5) {
      toast.error('Only allowed to attach up to 5 files');
      return;
    }
    setIsUploading(true);
    const uploadedFiles = await uploadFiles(files);
    setAttachments(
      uploadedFiles.map((file) => ({ id: file.id, url: file.url })),
    );
    setIsUploading(false);
    if (uploadedFiles.length < 1) return;
    toast.success(
      uploadedFiles.length > 1 ? 'Files attached' : 'File attached',
    );
  }

  return (
    <div>
      <input
        type='file'
        ref={ref}
        className='hidden'
        onChange={handleOnChange}
        multiple
      />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'outline'}
              className='rounded-full px-3'
              type='button'
              onClick={() => ref.current?.click()}
            >
              <FilesIcon className='w-4 h-4' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Add attachments</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
