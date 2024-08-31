import NotFound from '@/NotFound';
import AppPage from '@/pages/app/AppPage';
import TestamentsPage from '@/pages/testaments/TestamentsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppPage />} />
        <Route path='/testaments/post/:key' element={<TestamentsPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
