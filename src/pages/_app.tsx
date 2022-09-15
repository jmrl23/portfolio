import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../../styles/style.css'
import '../../styles/nprogress.css'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

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
