import type { AppProps } from 'next/app'
import Head from 'next/head'
import AppContext from '<prefix>/context/appContext';
import 'nprogress/nprogress.css'
import '../style/main.scss'
import { useEffect, useState } from 'react';
import LoaderBox from "<prefix>/component/boxLoader";
import Router from 'next/router'
import NProgress from 'nprogress'

export default function App({ Component, pageProps }: any) {
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => { setisLoading(false) }, 1000);
  })
  useEffect(() => {
    Router.events.on('routeChangeStart', NProgress.start)
    Router.events.on('routeChangeComplete', NProgress.done)
    Router.events.on('routeChangeError', NProgress.done)
    return () => {
      Router.events.off('routeChangeStart', NProgress.start)
      Router.events.off('routeChangeComplete', NProgress.done)
      Router.events.off('routeChangeError', NProgress.done)
    }
  }, [])
  return <AppContext>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#F5F5F5" />
      <title>Electric Bikes</title>
    </Head>
    {
      isLoading ?
        <LoaderBox />
        : <Component {...pageProps} />
    }
  </AppContext>
}