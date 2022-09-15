import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Header() {

  const [sideNavActive, setSideNavActive] = useState(false)
  const [theme, setTheme] = useState(
    (typeof localStorage !== 'undefined' && (localStorage.theme === 'dark' || (!('theme' in localStorage)) && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? 'dark' : 'light'
  )

  const toggleTheme = () => {
    try {
      localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
    } catch (error: any) {} finally {
      if (localStorage.getItem('theme')) return setTheme(theme === 'dark' ? 'light' : 'dark')
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  useEffect(() => {
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 md:cursor-pointer stroke-yellow-500 ${theme === 'dark' ? 'hidden' : void 0}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 md:cursor-pointer stroke-yellow-500 ${theme === 'dark' ? void 0 : 'hidden'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </button>
        </div>
        <button className="md:hidden" title='toggle nav' type="button" onClick={() => setSideNavActive(!sideNavActive)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      </div>
      
      <div className={`fixed z-40 bg-black/30 left-0 top-0 w-screen h-screen ${sideNavActive ? void 0 : 'hidden'}`} onClick={() => setSideNavActive(false)}></div>

      <div className={`fixed z-50 right-0 top-0 bg-white dark:bg-slate-800 dark:text-white h-full flex flex-col text-slate-900 transition-transform ${sideNavActive ? void 0 : 'translate-x-full'}`}>
        <div className='flex justify-between'>
          <button type='button' className="hover:text-red-500 p-4 pb-0" onClick={toggleTheme}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 md:cursor-pointer stroke-yellow-500 ${theme === 'dark' ? 'hidden' : void 0}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 md:cursor-pointer stroke-yellow-500 ${theme === 'dark' ? void 0 : 'hidden'}`}>
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
          <div className="mt-auto flex gap-x-4 dark:bg-white w-full px-16 py-4">
            <SocialIcon url='https://github.com/JmrL23' target='_blank' label='github' />
            <SocialIcon url='https://www.facebook.com/JmrL23' target='_blank' label='facebook' />
          </div>
        </div>
      </div>
    </header>
  )
}