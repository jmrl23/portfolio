import type { NextPage } from 'next'
import Link from 'next/link'

const NotFound: NextPage = () => {
  return (
    <>
      <div className="container px-4 md:px-0 h-screen flex flex-col items-center justify-center gap-y-4">
        <div className='flex gap-x-4 items-center'>
          <h1 className='font-bold text-6xl font-mono text-sky-400'>
            404
          </h1>
          <p className='font-bold'>
            Page not found
          </p>
        </div>
        <p className='text-sm'>
          The page you are looking for does not exists or an other error occured.
        </p>
        <Link href='/'>
          <a className='bg-slate-900/90 text-white dark:bg-white dark:text-black dark:hover:bg-gray-300 px-4 py-2 mt-4 rounded font-bold hover:bg-slate-900 flex gap-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Home
          </a>
        </Link>
      </div>
    </>
  )
}

export default NotFound