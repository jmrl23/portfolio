import NotFound from '@/NotFound';
import Form from '@/pages/testaments/Form';
import { useParams } from 'react-router-dom';

// dev
const validKeys = ['abcd'];
function verify(key?: string) {
  if (!key) return false;
  return validKeys.includes(key);
}

export default function TestamentsPage() {
  const { key } = useParams();
  const isValidKey = verify(key);

  if (!isValidKey) return <NotFound />;
  return <Form />;
}
