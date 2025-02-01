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

export const testimonialListPayloadSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    revalidate: {
      type: 'boolean',
    },
    id: {
      type: 'string',
      format: 'uuid',
    },
    createdAtFrom: {
      type: 'string',
      format: 'date-time',
    },
    createdAtTo: {
      type: 'string',
      format: 'date-time',
    },
    updatedAtFrom: {
      type: 'string',
      format: 'date-time',
    },
    updatedAtTo: {
      type: 'string',
      format: 'date-time',
    },
    skip: {
      type: 'integer',
      minimum: 0,
    },
    take: {
      type: 'integer',
      minimum: 0,
    },
    order: {
      type: 'string',
      enum: ['asc', 'desc'],
    },
    author: {
      type: 'string',
      minLength: 1,
    },
    bio: {
      type: 'string',
      minLength: 1,
    },
    content: {
      type: 'string',
      minLength: 10,
    },
  },
} as const;
