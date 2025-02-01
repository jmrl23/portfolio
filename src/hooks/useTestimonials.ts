import { api } from '@/lib/axios';
import {
  testimonialListPayloadSchema,
  testimonialSchema,
} from '@/schemas/testimonialsSchema';
import { useQuery } from '@tanstack/react-query';
import { FromSchema } from 'json-schema-to-ts';

export type Testimonial = FromSchema<typeof testimonialSchema>;

export type TestimonialListPayload = FromSchema<
  typeof testimonialListPayloadSchema
>;

async function fetchTestimonials(
  payload: TestimonialListPayload,
): Promise<Testimonial[]> {
  try {
    const response = await api.get<{ data: Testimonial[] }>('/testimonials', {
      params: payload,
    });
    const { data: testimonials } = response.data;
    return testimonials;
  } catch (error) {
    return [];
  }
}

export default function useTestimonials(payload: TestimonialListPayload = {}) {
  const result = useQuery({
    queryKey: ['api', 'testimonials'],
    queryFn: () => fetchTestimonials(payload),
  });

  return {
    ...result,
    data: result.data ?? [],
  };
}
