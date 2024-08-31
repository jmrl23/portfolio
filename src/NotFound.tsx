import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className='flex items-center h-screen bg-white font-sans'>
      <div className='max-w-screen-sm mx-auto'>
        <div className='prose'>
          <h1>Page Not Found</h1>
          <p>Oops! The page you're looking for doesn't exist</p>
          <p>What can you do?</p>
          <ul>
            <li>Double-check the URL for typos.</li>
            <li>
              Go back to the <Link to={'/'}>homepage.</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
