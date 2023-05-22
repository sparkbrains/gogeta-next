import '../style/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Suspense } from 'react'
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#F5F5F5" />
      <title>Electric Bikes</title>
    </Head>
    <Component {...pageProps} />
  </div>
}
