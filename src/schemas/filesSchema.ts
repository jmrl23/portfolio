export const fileSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['id', 'createdAt', 'name', 'size', 'mimetype', 'url'],
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
    },
    name: {
      type: 'string',
    },
    size: {
      type: 'integer',
    },
    mimetype: {
      type: 'string',
    },
    url: {
      type: 'string',
      format: 'uri',
    },
  },
} as const;
