import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../../styles/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Portfolio | Jomariel
        </title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
