import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {

  const [sideNavActive, setSideNavActive] = useState(false)
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    try {
      localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
    } catch (error: any) {} finally {
      if (localStorage.getItem('theme')) return setTheme(theme === 'dark' ? 'light' : 'dark')
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  useEffect(() => {
    setTheme(
      (typeof localStorage !== 'undefined' && (localStorage.theme === 'dark' || (!('theme' in localStorage)) && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? 'dark' : 'light'
    )
    if (sideNavActive) document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [sideNavActive, theme])

  return (
    <header className="p-4 sticky top-0 z-30 bg-white dark:bg-slate-900 border-b dark:border-slate-600">
      <div className="container flex justify-between items-center font-bold">
        <Link href='/'>
          <span className="uppercase text-3xl md:cursor-pointer">
            JG
          </span>
        </Link>
        <div className="flex-row gap-x-12 text-sm items-center hidden md:flex">
          <Link href='/'>
            <a className="hover:text-sky-400">Home</a>
          </Link>
          <Link href='/about'>
            <a className="hover:text-sky-400">About</a>
          </Link>
          <Link href='/contact'>
            <a className="hover:text-sky-400">Contact</a>
          </Link>
          <button type='button' className='md:cursor-pointer rounded-full' onClick={toggleTheme}>
            <span className={`${theme === 'dark' ? 'hidden' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-6 h-6 md:cursor-pointer stroke-yellow-500'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </span>
            <span className={`${theme === 'dark' ? '' : 'hidden'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-6 h-6 md:cursor-pointer stroke-yellow-500'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </span>
          </button>
        </div>
        <button className="md:hidden" title='toggle nav' type="button" onClick={() => setSideNavActive(!sideNavActive)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      </div>
      
      <div className={`fixed z-40 bg-black/30 left-0 top-0 w-screen h-screen ${sideNavActive ? '' : 'hidden'}`} onClick={() => setSideNavActive(false)}></div>

      <div className={`fixed z-50 right-0 top-0 bg-white dark:bg-slate-800 dark:text-white h-full flex flex-col text-slate-900 transition-transform ${sideNavActive ? void 0 : 'translate-x-full'}`}>
        <div className='flex justify-between'>
          <button type='button' className="hover:text-red-500 p-4 pb-0" onClick={toggleTheme}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 md:cursor-pointer stroke-yellow-500 ${theme === 'dark' ? 'hidden' : ''}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 md:cursor-pointer stroke-yellow-500 ${theme === 'dark' ? '' : 'hidden'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </button>

          <button type='button' className="hover:text-red-500 p-4 pb-0" onClick={() => setSideNavActive(!sideNavActive)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <hr className="my-4 dark:border-slate-600" />
        <div className="flex flex-col font-bold text-lg h-full text-center">
          <Link href='/'>
            <a className="p-4 hover:text-sky-400">Home</a>
          </Link>
          <Link href='/about'>
            <a className="p-4 hover:text-sky-400">About</a>
          </Link>
          <Link href='/contact'>
            <a className="p-4 hover:text-sky-400">Contact</a>
          </Link>
          <div className="mt-auto flex gap-x-4 w-full px-24 py-6">
            <a href='https://github.com/JmrL23' target='_blank' rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path className='fill-slate-700 dark:fill-gray-50/75 md:cursor-pointer' d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href='https://www.facebook.com/JmrL23' target='_blank' rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path className='fill-slate-700 dark:fill-gray-50/75 md:cursor-pointer' d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}