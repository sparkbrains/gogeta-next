import type { AppProps } from 'next/app'
import Head from 'next/head'
import AppContext from '<prefix>/context/appContext';
import '../style/main.scss'

export default function App({ Component, pageProps }: any) {
  return <AppContext>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#F5F5F5" />
      <title>Electric Bikes</title>
    </Head>
    <Component {...pageProps} />
  </AppContext>
}