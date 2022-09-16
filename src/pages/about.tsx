import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import Header from '../components/contents/Header'
import Footer from '../components/contents/Footer'
import type GithubData from '../types/githubData'
import GithubPinnedRepo from '../types/githubPinnedRepo'
import Link from 'next/link'

interface Props {
  pinnedRepos: GithubPinnedRepo[]
}

const About: NextPage<Props> = ({ pinnedRepos }: Props) => {
  return (
    <>
      <Header />
      <div className='container min-h-[calc(100vh-4rem)] px-4 py-4 lg:px-0 leading-7'>
        <section>
          <h1 className='border-l-4 pl-4 border-sky-400 font-bold mb-4 text-lg'>Now</h1>
          <p>
            Currently a third-year college student at <a className='text-sky-400' href='https://www.facebook.com/ptc1993/' target='_blank' rel="noreferrer">Pateros Technological College</a>.
          </p>
          <p>
            I discovered web development when I was in highschool, I keep on learning as time passes.
          </p>
          <p>
            I can now confidently make useful and reliable websites.
          </p>
        </section>
        <section className='mt-4'>
          <h1 className='border-l-4 pl-4 border-sky-400 font-bold mb-4 text-lg'>Tech Stacks</h1>
          <p className='mb-2'>
            Here are some of the technologies I&apos;m using:
          </p>
          <Image src='/assets/image/skillsicon.svg' width={273} height={48} alt='List of techstacks' />
        </section>
        <section className='mt-4'>
          <h1 className='border-l-4 pl-4 border-sky-400 font-bold mb-4 text-lg'>Works</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2'>
            {
              pinnedRepos.map(repo => {
                return (
                  <Link href={repo.link} key={repo.link}>
                    <a target='_blank' className='hover:scale-[1.0125] transition-all duration-75 shadow-md dark:shadow-none'>
                      <Image src={repo.image} width={1090} height={545} className='dark:rounded md:cursor-pointer' alt={repo.repo} title={repo.repo} />
                    </a>
                  </Link>
                )
              })
            }
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch(`${process.env.API}/github`)
  const githubData: GithubData = await response.json()
  const pinnedRepos: GithubPinnedRepo[] = githubData.pinned_repos

  return {
    props: {
      pinnedRepos
    }
  }
}

export default About