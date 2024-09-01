import { fileSchema } from '@/schemas/filesSchema';

export const testimonialSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['id', 'createdAt', 'author', 'bio', 'content', 'image'],
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
    },
    author: {
      type: 'string',
    },
    bio: {
      type: 'string',
      nullable: true,
    },
    content: {
      type: 'string',
    },
    image: {
      ...fileSchema,
      nullable: true,
    },
  },
} as const;
