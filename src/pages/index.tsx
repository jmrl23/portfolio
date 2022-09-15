import type { GetServerSideProps, NextPage } from 'next'
import Header from '../components/contents/Header'
import Footer from '../components/contents/Footer'
import Image from 'next/image'
import Link from 'next/link'
import GithubData from '../types/githubData'

interface Props {
  githubData: GithubData
}

const Home: NextPage<Props> = ({ githubData }: Props) => {

  return (
    <>
      <Header />
      <div className='container flex flex-col-reverse md:flex-row justify-center md:justify-between items-center min-h-[calc(100vh-4rem)] px-4'>
        <div className='mt-6 md:mt-0 font-bold text-center md:text-left'>
          <Link href='/'>
            <h1 className='text-3xl md:text-5xl'>Jomariel Gaitera</h1>
          </Link>
          <p className='mt-4 text-sm md:text-base dark:text-sky-300'>💻&nbsp;&nbsp;Full Stack Web Developer</p>
          <div className="mt-6 flex items-center justify-center md:justify-start">
            <Link href='/about'>
              <a className='bg-slate-900/90 text-white dark:bg-white dark:text-black dark:hover:bg-gray-300 px-4 py-2 rounded-l hover:bg-slate-900' href="#">
                Learn more
              </a>
            </Link>
            <Link href='/contact'>
              <a className='bg-sky-900/90 text-white px-4 py-2 rounded-r hover:bg-sky-900' href="#">
                Let&apos;s connect
              </a>
            </Link>
          </div>
        </div>
        <div className='w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden relative'>
          <Image src={githubData.avatar_url} alt='avatar' title='avatar' layout='fill' objectFit='contain' priority={true} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch(`${process.env.API}/github`)
  const githubData = await response.json()

  return {
    props: {
      githubData
    }
  }
}

export default Home
