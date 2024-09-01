import NotFound from '@/NotFound';
import AppPage from '@/pages/app/AppPage';
import TestimonialPage from '@/pages/testimonials/TestimonialPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/testimonials/create/:key' element={<TestimonialPage />} />
        <Route path='/' element={<AppPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
