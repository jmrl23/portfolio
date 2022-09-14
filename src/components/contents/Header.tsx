import Link from 'next/link'
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Header() {

  const [sideNavActive, setSideNavActive] = useState(false)

  return (
    <header className="p-4">
      <div className="container flex justify-between items-center font-bold">
        <span className="uppercase text-3xl">
          JG
        </span>
        <div className="flex-row gap-x-8 text-sm items-center hidden md:flex">
          <Link href='/'>
            <a className="hover:text-sky-400">Home</a>
          </Link>
          <Link href='/about'>
            <a className="hover:text-sky-400">About</a>
          </Link>
          <Link href='/works'>
            <a className="hover:text-sky-400">Works</a>
          </Link>
          <Link href='/contact'>
            <a className="hover:text-sky-400">Contact</a>
          </Link>
        </div>
        <button className="md:hidden" type="button" onClick={() => setSideNavActive(!sideNavActive)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      </div>
      
      <div className={`fixed z-40 bg-black/30 left-0 top-0 w-screen h-screen ${sideNavActive ? void 0 : 'hidden'}`} onClick={() => setSideNavActive(false)}></div>

      <div className={`fixed z-50 right-0 top-0 bg-white h-full p-4 flex flex-col text-slate-900 transition-transform ${sideNavActive ? void 0 : 'translate-x-full'}`}>
        <button className="self-end hover:text-red-500" onClick={() => setSideNavActive(!sideNavActive)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <hr className="my-4" />
        <div className="flex flex-col font-bold text-lg px-16 h-full text-center">
          <Link href='/'>
            <a className="p-4 hover:text-sky-400">Home</a>
          </Link>
          <Link href='/about'>
            <a className="p-4 hover:text-sky-400">About</a>
          </Link>
          <Link href='/works'>
            <a className="p-4 hover:text-sky-400">Works</a>
          </Link>
          <Link href='/contact'>
            <a className="p-4 hover:text-sky-400">Contact</a>
          </Link>
          <div className="mt-auto flex gap-x-4">
            <SocialIcon url='https://github.com/JmrL23' target='_blank' />
            <SocialIcon url='https://www.facebook.com/JmrL23' target='_blank' />
          </div>
        </div>
      </div>
    </header>
  )
}