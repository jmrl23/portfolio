import NotFound from '@/NotFound';
import TestimonialForm from '@/pages/testimonials/TestimonialForm';
import { useParams } from 'react-router-dom';

export default function TestimonialPage() {
  const { key } = useParams();
  if (!key || !valid(key)) return <NotFound />;
  return <TestimonialForm testimonialKey={key} />;
}

function valid(key: string): boolean {
  const pattern = /^[a-zA-Z0-9]{6}$/;
  return pattern.test(key);
}
