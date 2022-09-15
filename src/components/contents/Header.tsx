import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Header() {

  const [sideNavActive, setSideNavActive] = useState(false)

  useEffect(() => {
    if (sideNavActive) document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')
  }, [sideNavActive])

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
        </div>
        <button className="md:hidden" title='toggle nav' type="button" onClick={() => setSideNavActive(!sideNavActive)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      </div>
      
      <div className={`fixed z-40 bg-black/30 left-0 top-0 w-screen h-screen ${sideNavActive ? void 0 : 'hidden'}`} onClick={() => setSideNavActive(false)}></div>

      <div className={`fixed z-50 right-0 top-0 bg-white dark:bg-slate-800 dark:text-white h-full flex flex-col text-slate-900 transition-transform ${sideNavActive ? void 0 : 'translate-x-full'}`}>
        <button className="self-end hover:text-red-500 p-4 pb-0" onClick={() => setSideNavActive(!sideNavActive)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
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